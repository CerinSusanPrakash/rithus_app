import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions
} from '@mui/material';
import { useLocation } from 'react-router-dom'; // Import useLocation
import axios from 'axios';
import Ordermanage from './Ordermanage';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// // Add icon inside Toolbar
// <DashboardIcon sx={{ marginRight: '8px', color: '#5B3A29' }} />
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';
// Add icon inside Toolbar
<DashboardIcon sx={{ marginRight: '8px', color: '#5B3A29' }} />

const Adminhome = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    productName: '',
    productPrice: '',
    productDescription: '',
    productQuantity: '',
    productImage: '',
  });
  const [editMode, setEditMode] = useState(false); // Track if we're editing an existing product
  const [editingProductId, setEditingProductId] = useState(null); // Track the ID of the product being edited

  const location = useLocation();

  // Handle input changes
  function capValue(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Fetch existing products on component load
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to fetch products
  const fetchProducts = () => {
    axios.get('https://rithus-app-backend-r.onrender.com/getproducts')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Handle form submission (Add or Update Product)
  // function valueAdd() {
  //   // Check if any field is empty
  //   const { productName, productPrice, productDescription, productQuantity, productImagelink } = form;

  //   if (!productName || !productPrice || !productDescription || !productQuantity || !productImagelink) {
  //     alert('Please fill in all the fields before submitting.');
  //     return; // Stop the function if any field is empty
  //   }

  //   if (editMode) {
  //     // Update existing product
  //     axios.put('http://localhost:4000/editproduct/' + editingProductId, form)
  //       .then((res) => {
  //         alert('Product Updated Successfully');
  //         fetchProducts(); // Fetch updated product list
  //         setEditMode(false);
  //         resetForm(); // Reset form
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     // Add new product
  //     axios.post('http://localhost:4000/addproduct', form)
  //       .then((res) => {
  //         alert('Product Added Successfully');
  //         fetchProducts(); // Fetch updated product list
  //         resetForm(); // Reset form
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }




  // function valueAdd() {
  //   // Check if any field is empty
  //   const { productName, productPrice, productDescription, productQuantity, productImagelink } = form;
  
  //   console.log('Form Data:', form); // Add this line for debugging
  
  //   if (!productName || !productPrice || !productDescription || !productQuantity || !productImagelink) {
  //     alert('Please fill in all the fields before submitting.');
  //     return; // Stop the function if any field is empty
  //   }
  
  //   if (editMode) {
  //     // Update existing product
  //     axios.put('http://localhost:4000/editproduct/' + editingProductId, form)
  //       .then((res) => {
  //         alert('Product Updated Successfully');
  //         console.log('Form Data:', form)
  //         fetchProducts(); // Fetch updated product list
  //         setEditMode(false);
  //         resetForm(); // Reset form
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     // Add new product
  //     axios.post('http://localhost:4000/addproduct', form)
  //       .then((res) => {
  //         alert('Product Added Successfully');
  //         console.log('Form Data:', form)
  //         fetchProducts(); // Fetch updated product list
  //         resetForm(); // Reset form
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }

  function valueAdd() {
    // Destructure form fields
    const { productName, productPrice, productDescription, productQuantity, productImage } = form;

    console.log('Form Data:', form); // Add this line for debugging

    // Check if any field is empty
    if (!productName || !productPrice || !productDescription || !productQuantity || !productImage) {
        alert('Please fill in all the fields before submitting.');
        return; // Stop the function if any field is empty
    }

    // Prepare form data for file upload
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productPrice', productPrice);
    formData.append('productDescription', productDescription);
    formData.append('productQuantity', productQuantity);

    // Append the image file if it's not already a URL
    if (productImage instanceof File) {
        formData.append('productImage', productImage);
    }

    if (editMode) {
        // Update existing product
        axios.put(`https://rithus-app-backend-r.onrender.com/editproduct/${editingProductId}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then((res) => {
                alert('Product Updated Successfully');
                console.log('Form Data:', formData);
                fetchProducts(); // Fetch updated product list
                setEditMode(false);
                resetForm(); // Reset form
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        // Add new product
        axios.post('https://rithus-app-backend-r.onrender.com/addproduct', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then((res) => {
                alert('Product Added Successfully');
                console.log('Form Data:', formData);
                fetchProducts(); // Fetch updated product list
                resetForm(); // Reset form
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

  

  // Function to delete a product
  const handleDelete = (id) => {
    axios.delete('https://rithus-app-backend-r.onrender.com/deleteproduct/' + id)
      .then((res) => {
        alert('Product Deleted');
        fetchProducts(); // Refresh product list
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Function to load a product into the form for editing
  const handleEdit = (product) => {
    setForm({
      productName: product.productName,
      productPrice: product.productPrice,
      productDescription: product.productDescription,
      productQuantity: product.productQuantity,
      productImage: product.productImage
    });
    setEditingProductId(product._id); // Set the ID of the product being edited
    setEditMode(true); // Set the form to edit mode
  };

  // Reset the form fields
  const resetForm = () => {
    setForm({ productName: '', productPrice: '', productDescription: '', productQuantity: '', productImage: '' }); // Reset form
  };

  return (
    <div>

{/* <AppBar position="static" color="primary" sx={{ backgroundColor: '#FFFDD0', color: '#5B3A29' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar> */}
      {/* <AppBar position="static" sx={{
  background: 'linear-gradient(to right, #FFFDD0, #FFFAF0)',
  color: '#5B3A29',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  borderBottomLeftRadius: '15px',
  borderBottomRightRadius: '15px',
}}> */}
  {/* <Toolbar>
    <DashboardIcon sx={{ marginRight: '8px', color: '#5B3A29' }} />
    <Typography variant="h6" style={{ flexGrow: 1, fontWeight: '600', fontFamily: 'Arial, sans-serif' }}>
      Admin Dashboard
    </Typography>
  </Toolbar>
</AppBar> */}

<Toolbar>
  <DashboardIcon sx={{ marginRight: '8px', color: '#5B3A29' }} />
  <Typography 
    variant="h4" // Use h4 for bigger text
    style={{ 
      flexGrow: 1, 
      fontWeight: '700', // Make it bolder
      fontFamily: 'Roboto, sans-serif', // Change font family for a modern look
      letterSpacing: '1px', // Add some spacing between letters
      color: '#5B3A29' // Match icon color
    }} 
  >
    Admin Dashboard
  </Typography>
  <Link to={'/admin'}><LogoutIcon sx={{ marginRight: '8px', color: '#5B3A29' }} /></Link>
</Toolbar>

      
      <AppBar position="static" color="primary" sx={{ backgroundColor: '#FFFDD0', color: '#5B3A29' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
            Order Management
          </Typography>
        </Toolbar>
      </AppBar>

      <br />
      <Ordermanage />

      <br />
      <AppBar position="static" color="primary" sx={{ backgroundColor: '#FFFDD0', color: '#5B3A29' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
            Product Management
          </Typography>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: '20px' }}>
        <Grid item xs={12} md={6} sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Paper style={{ padding: '20px', height: '500px', width: '600px' }}>
            <Typography variant="h5" gutterBottom>
              {editMode ? 'Edit Product' : 'Add New Product'}
            </Typography>
            <form onSubmit={e => { e.preventDefault(); valueAdd(); }}>
              <TextField
                label="Product Name"
                variant="outlined"
                fullWidth
                style={{ marginBottom: '15px' }}
                name="productName"
                value={form.productName}
                onChange={capValue}
              />
              <TextField
                label="Price"
                variant="outlined"
                fullWidth
                style={{ marginBottom: '15px' }}
                name="productPrice"
                value={form.productPrice}
                onChange={capValue}
              />
              {/* <TextField
                label="Image Link"
                variant="outlined"
                fullWidth
                style={{ marginBottom: '15px' }}
                name="productImagelink"
                value={form.productImagelink}
                onChange={capValue}
              /> */}




              <TextField
    label="Upload Image"
    type="file"
    fullWidth

    style={{ marginBottom: '15px' }}
    name="productImage"
    inputProps={{ accept: 'image/*' }}
    onChange={(e) => setForm({ ...form, productImage: e.target.files[0] })}
    
/>

              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                style={{ marginBottom: '15px' }}
                name="productDescription"
                value={form.productDescription}
                onChange={capValue}
              />
              <TextField
                label="Quantity"
                variant="outlined"
                type="number"
                fullWidth
                style={{ marginBottom: '15px' }}
                name="productQuantity"
                value={form.productQuantity}
                onChange={capValue}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ backgroundColor: '#FFFDD0', color: '#5B3A29', '&:hover': { backgroundColor: '#f5e3a1' } }}
              >
                {editMode ? 'Update Product' : 'Add Product'}
              </Button>
            </form>
          </Paper>
        </Grid>
      </Container>

      <br />

      <AppBar position="static" color="primary" sx={{ backgroundColor: '#FFFDD0', color: '#5B3A29' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
            All Products
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      {/* Display products */}
      <Container>
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card>
              <CardMedia
  sx={{ height: 200 }}
  image={`https://rithus-app-backend-r.onrender.com/${product.productImage}`} // Dynamically set the image URL
  title={product.productName || "Product Image"}
  component="img" // Use CardMedia as an img component for better fallback support
  alt={product.productName || "Product Image"}
  style={{ objectFit: 'cover' }} // Ensure the image fits nicely within the card
/>

                {/* <CardMedia
                  sx={{ height: 200 }}
                  image={product.productImage}
                  title={product.productName}
                /> */}
                {/* <img src={`https://rithus-app-backend.vercel.app/${product.productImage}`} alt={product.productImage} style={{ width: '200px' }} /> */}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.productName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${product.productPrice} <br />
                    Quantity: {product.productQuantity}
                    <br />
                    {product.productDescription}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', gap: 3 }}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#FFFDD0', color: '#5B3A29', '&:hover': { backgroundColor: '#f5e3a1' } }}
                    size="large"
                    onClick={() => handleEdit(product)} // Handle edit button click
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#FFFDD0', color: '#5B3A29', '&:hover': { backgroundColor: '#f5e3a1' } }}
                    size="large"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Adminhome;


