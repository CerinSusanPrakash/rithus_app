const express = require('express');
require('./connection');
const productModel = require('./models/Product');
const orderModel = require('./models/Order');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(express.json());
// app.use(cors());
// Middleware
app.use(cors({
    origin: ["https://book-my-show-frt.vercel.app/add","https://book-my-show-frt.vercel.app"], // Add all allowed origins
    methods: ["GET", "DELETE", "POST", "PUT"],
    credentials: true,
}));
app.use(express.json()); // Parse incoming JSON requests

// Default Route
app.get("/", (req, res) => {
    res.json({ message: "Backend is working" });
});




// Static file serving for images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer Setup for Product and Order Images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Store in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique file names
  },
});

const upload = multer({ storage });

// **Order Handling**
app.get('/getorders', async (req, res) => {
  try {
    const data = await orderModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error fetching orders');
  }
});

app.post('/addorder', upload.single('paymentImage'), async (req, res) => {
  try {
    const { orderName, orderAddress, orderPhoneNumber, orderQuantity, upiTransactionId,productName } = req.body;
    const paymentImage = req.file ? req.file.path : null; // Image path

    const newOrder = new orderModel({
      orderName,
      orderAddress,
      orderPhoneNumber,
      orderQuantity,
      upiTransactionId,
      paymentImage, // Store the image path
      productName,
    });

    await newOrder.save();
    res.send('Order placed successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error placing order');
  }
});

app.put('/editorder/:id', async (req, res) => {
  try {
    const data = await orderModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send('Order updated successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error updating order');
  }
});

app.delete('/deleteorder/:id', async (req, res) => {
  try {
    await orderModel.findByIdAndDelete(req.params.id);
    res.send('Order deleted successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error deleting order');
  }
});

// **Product Handling**
app.get('/getproducts', async (req, res) => {
  try {
    const data = await productModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error fetching products');
  }
});

app.post('/addproduct', upload.single('productImage'), async (req, res) => {
  try {
    const { productName, productPrice, productDescription, productQuantity } = req.body;
    const productImage = req.file ? req.file.path : null; // Get image path

    const newProduct = new productModel({
      productName,
      productPrice,
      productDescription,
      productQuantity,
      productImage, // Store image path
    });

    await newProduct.save();
    res.status(201).send('Product added successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error adding product');
  }
});

app.put('/editproduct/:id', upload.single('productImage'), async (req, res) => {
  try {
    const { productName, productPrice, productDescription, productQuantity } = req.body;
    const productImage = req.file ? req.file.path : req.body.productImage; // Retain old image if no new file

    const updatedProduct = await productModel.findByIdAndUpdate(
      req.params.id,
      {
        productName,
        productPrice,
        productDescription,
        productQuantity,
        productImage,
      },
      { new: true } // Return updated document
    );

    if (!updatedProduct) {
      return res.status(404).send('Product not found');
    }

    res.send('Product updated successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error updating product');
  }
});

app.delete('/deleteproduct/:id', async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.id);
    res.send('Product deleted successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error deleting product');
  }
});

// Server setup
app.listen(4000, () => {
  console.log('Server is running on PORT 4000');
});

//before upi

// const express = require('express');
// require('./connection');
// const productModel=require('./models/Product');
// const orderModel=require('./models/Order');
// const app = express();
// app.use(express.json());
// const cors=require('cors')
// app.use(cors());



// //Order Handling

// app.get('/getorders',async(req,res)=>{
//   try {
//       const data=await orderModel.find();
//       res.send(data);
//   } catch (error) {
//       console.log(error)
//   }
// })

// app.post('/addorder',async(req,res)=>{
//   try {
//       var item=req.body;
//       const data_add=new orderModel(item);
//       const data=await data_add.save();
//       res.send('Post sucessful')
//   } catch (error) {
//       console.log(error)
//   }
// })

// app.put('/editorder/:id',async(req,res)=>{
//   try {
//       const data=await orderModel.findByIdAndUpdate(req.params.id,req.body)
//       res.send('Updated Sucessfully')
//   } catch (error) {
//       console.log(error)
//   }
// })

// app.delete('/deleteorder/:id',async(req,res)=>{
//   try {
//       const data=await orderModel.findByIdAndDelete(req.params.id)
//       res.send('Deleted sucessfully')
//   } catch (error) {
//       console.log(error)
//   }
// })

// //Product Handling

// app.get('/getproducts',async(req,res)=>{
//     try {
//         const data=await productModel.find();
//         res.send(data);
//     } catch (error) {
//         console.log(error)
//     }
//   })

// // app.post('/addproduct',async(req,res)=>{
// //     try {
// //         var item=req.body;
// //         const data_add=new productModel(item);
// //         const data=await data_add.save();
// //         res.send('Post sucessful')
// //     } catch (error) {
// //         console.log(error)
// //     }
// //   })

// //add product
// // const express = require('express');
// const multer = require('multer');
// const ProductData = require('./models/Product'); // Adjust the path to your model
// // const router = express.Router();

// // Configure Multer storage
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/'); // Save files in the 'uploads' directory
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname); // Use a unique file name
//     }
// });

// const upload = multer({ storage });

// // Add product with image upload
// // router.post('/addproduct', upload.single('productImage'), async (req, res) => {
// //     try {
// //         const { productName, productPrice, productDescription, productQuantity } = req.body;

// //         if (!req.file) {
// //             return res.status(400).send('Image file is required.');
// //         }

// //         const newProduct = new ProductData({
// //             productName,
// //             productPrice,
// //             productImage: req.file.path, // Store the file path
// //             productDescription,
// //             productQuantity
// //         });

// //         await newProduct.save();
// //         res.status(201).send('Product added successfully');
// //     } catch (err) {
// //         res.status(500).send(err.message);
// //     }
// // });

// // module.exports = router;


// // const express = require('express');
// // const router = express.Router();
// // const multer = require('multer');
// // const ProductData = require('./models/product'); // Adjust path as needed

// // Configure multer for file uploads
// // const upload = multer({ dest: 'uploads/' });

// app.post('/addproduct', upload.single('productImage'), async (req, res) => {
//     try {
//         const { productName, productPrice, productDescription, productQuantity } = req.body;
//         const productImage = req.file ? req.file.path : null;

//         const newProduct = new ProductData({
//             productName,
//             productPrice,
//             productDescription,
//             productQuantity,
//             productImage
//         });

//         await newProduct.save();
//         res.status(201).send({ message: 'Product added successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({ message: 'Error adding product', error });
//     }
// });

// // module.exports = router;

// app.use('/uploads', express.static('uploads'));



// // app.put('/editproduct/:id',async(req,res)=>{
// //     try {
// //         const data=await productModel.findByIdAndUpdate(req.params.id,req.body)
// //         res.send('Updated Sucessfully')
// //     } catch (error) {
// //         console.log(error)
// //     }
// // })


// app.put('/editproduct/:id', upload.single('productImage'), async (req, res) => {
//     try {
//         const { productName, productPrice, productDescription, productQuantity } = req.body;

//         // If a new image is uploaded, update the path; otherwise, retain the old image
//         const productImage = req.file ? req.file.path : req.body.productImage;

//         const updatedProduct = await productModel.findByIdAndUpdate(
//             req.params.id,
//             {
//                 productName,
//                 productPrice,
//                 productDescription,
//                 productQuantity,
//                 productImage,
//             },
//             { new: true } // Return the updated document
//         );

//         if (!updatedProduct) {
//             return res.status(404).send({ message: 'Product not found' });
//         }

//         res.status(200).send({ message: 'Product updated successfully', updatedProduct });
//     } catch (error) {
//         console.error('Error updating product:', error);
//         res.status(500).send({ message: 'Error updating product', error });
//     }
// });

// app.delete('/deleteproduct/:id',async(req,res)=>{
//     try {
//         const data=await productModel.findByIdAndDelete(req.params.id)
//         res.send('Deleted sucessfully')
//     } catch (error) {
//         console.log(error)
//     }
// })


//   app.listen(4000, () => {
//     console.log('Server is running on PORT 4000');
//   });

