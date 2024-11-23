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
    origin: ["https://rithusnightyworldofficial.vercel.app","https://rithusnightyworldofficial.vercel.app/products","https://rithusnightyworldofficial.vercel.app/buyproduct"], // Add all allowed origins
    methods: ["GET", "DELETE", "POST", "PUT"],
    credentials: true,
}));
app.use(express.json()); // Parse incoming JSON requests

// Default Route
app.get("/", (req, res) => {
    res.json({ message: "Backend is working" });
});
const fs = require('fs');
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}


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
