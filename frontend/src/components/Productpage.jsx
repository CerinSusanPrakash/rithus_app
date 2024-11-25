
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const ProductPage = () => {
  const location = useLocation();
  const product = location.state?.val; // Accessing the product details

  const [form, setForm] = useState({
    orderName: '',
    orderAddress: '',
    orderPhoneNumber: '',
    orderQuantity: '',
    upiTransactionId: '',
  });

  const [file, setFile] = useState(null); // State for file upload
  const [phoneError, setPhoneError] = useState('');
  const [fileError, setFileError] = useState('');

  function capValue(e) {
    const { name, value } = e.target;

    if (name === 'orderPhoneNumber') {
      const isValidPhone = /^[0-9]{0,10}$/.test(value);
      if (!isValidPhone) {
        setPhoneError('Phone number must be numeric and up to 10 digits.');
        return;
      }
      setPhoneError('');
    }

    setForm({ ...form, [name]: value });
  }

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileError('');
    } else {
      setFileError('Please upload a valid payment screenshot.');
    }
  }

  // function valueAdd(e) {
  //   e.preventDefault();

  //   const { orderName, orderAddress, orderPhoneNumber, orderQuantity, upiTransactionId } = form;

  //   if (!orderName || !orderAddress || !orderPhoneNumber || !orderQuantity || !upiTransactionId) {
  //     alert('Please fill out all fields before placing the order.');
  //     return;
  //   }

  //   if (orderPhoneNumber.length !== 10) {
  //     alert('Phone number must be exactly 10 digits.');
  //     return;
  //   }

  //   if (!file) {
  //     setFileError('Please upload a payment screenshot.');
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('orderName', orderName);
  //   formData.append('orderAddress', orderAddress);
  //   formData.append('orderPhoneNumber', orderPhoneNumber);
  //   formData.append('orderQuantity', orderQuantity);
  //   formData.append('upiTransactionId', upiTransactionId);
  //   formData.append('paymentImage', file);
  //   formData.append('productName', product?.productName); // Adding product name to the formData

  //   // Optionally, you can also pass product ID or other product details if necessary
  //   formData.append('productId', product?._id);

  //   axios
  //     .post('https://rithus-app-backend.vercel.app/addorder', formData, {
  //       headers: { 'Content-Type': 'https://rithus-app-backend.vercel.app/multipart/form-data' },
  //     })
  //     .then((res) => {
  //       alert('Order Placed Successfully');
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       alert('Error placing the order.');
  //     });
  // }

  function valueAdd(e) {
  e.preventDefault();

  const { orderName, orderAddress, orderPhoneNumber, orderQuantity, upiTransactionId } = form;

  if (!orderName || !orderAddress || !orderPhoneNumber || !orderQuantity || !upiTransactionId) {
    alert('Please fill out all fields before placing the order.');
    return;
  }

  if (orderPhoneNumber.length !== 10) {
    alert('Phone number must be exactly 10 digits.');
    return;
  }

  if (!file) {
    setFileError('Please upload a payment screenshot.');
    return;
  }

  const formData = new FormData();
  formData.append('orderName', orderName);
  formData.append('orderAddress', orderAddress);
  formData.append('orderPhoneNumber', orderPhoneNumber);
  formData.append('orderQuantity', orderQuantity);
  formData.append('upiTransactionId', upiTransactionId);
  formData.append('paymentImage', file);

  // Add product details
  if (product) {
    formData.append('productName', product.productName);
    formData.append('productId', product._id);
  }

  axios
    .post('https://rithus-app-backend.vercel.app/addorder', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => {
      alert('Order Placed Successfully');
    })
    .catch((err) => {
      console.error('Error placing order:', err.message);
      alert('Error placing the order.');
    });
}


  return (
    <Paper elevation={3} sx={{ padding: '2rem', maxWidth: '1200px', margin: 'auto' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} container justifyContent="center" alignItems="center">
          <Box
            component="img"
            src={`https://rithus-app-backend.vercel.app/${product?.productImage}` || 'https://via.placeholder.com/400'}
            alt="Product Image"
            sx={{ width: '100%', borderRadius: '10px' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {product?.productName || 'Product Name'}
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            ₹ {product?.productPrice || 'Price'}
          </Typography>
          <Typography variant="body1" paragraph>
            {product?.productDescription || 'Detailed product description.'}
          </Typography>

          <Paper elevation={3} sx={{ padding: '2rem', maxWidth: '600px', margin: 'auto', marginTop: '2rem' }}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                background: 'black',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1.5rem',
              }}
            >
              Place Your Order
            </Typography>
            <Box
              component="form"
              sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
              onSubmit={valueAdd}
            >
              <TextField
                id="name"
                label="Full Name"
                variant="outlined"
                required
                name="orderName"
                onChange={capValue}
                value={form.orderName}
              />
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                multiline
                rows={3}
                required
                name="orderAddress"
                onChange={capValue}
                value={form.orderAddress}
              />
              <TextField
                id="phone"
                label="Phone Number"
                variant="outlined"
                required
                name="orderPhoneNumber"
                onChange={capValue}
                value={form.orderPhoneNumber}
                error={Boolean(phoneError)}
                helperText={phoneError}
              />
              <TextField
                id="quantity"
                label="Quantity"
                type="number"
                variant="outlined"
                required
                name="orderQuantity"
                onChange={capValue}
                value={form.orderQuantity}
              />
              <TextField
                id="upi"
                label="UPI Transaction ID"
                variant="outlined"
                required
                name="upiTransactionId"
                onChange={capValue}
                value={form.upiTransactionId}
              />
              <Typography
                variant="body1"
                color="textPrimary"
                sx={{ fontWeight: 'bold', marginTop: '1rem' }}
              >
                Please upload payment screenshot
                (Phone number: 9645633846)
              </Typography>
              <input
                type="file"
                label="image"
                accept="image/*"
                onChange={handleFileChange}
                style={{ marginBottom: '1rem' }}
              />
              {fileError && (
                <Typography color="error" variant="body2">
                  {fileError}
                </Typography>
              )}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FFFDD0',
                  color: '#5B3A29',
                  '&:hover': { backgroundColor: '#f5e3a1' },
                }}
                size="large"
                fullWidth
                type="submit"
              >
                Place Order
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductPage;


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import TextField from '@mui/material/TextField';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// const ProductPage = () => {
//   const location = useLocation();
//   const product = location.state?.val; // Accessing the product details

//   const [form, setForm] = useState({
//     orderName: '',
//     orderAddress: '',
//     orderPhoneNumber: '',
//     orderQuantity: '',
//     upiTransactionId: '',
//   });

//   const [file, setFile] = useState(null); // State for file upload
//   const [phoneError, setPhoneError] = useState('');
//   const [fileError, setFileError] = useState('');

//   function capValue(e) {
//     const { name, value } = e.target;

//     if (name === 'orderPhoneNumber') {
//       const isValidPhone = /^[0-9]{0,10}$/.test(value);
//       if (!isValidPhone) {
//         setPhoneError('Phone number must be numeric and up to 10 digits.');
//         return;
//       }
//       setPhoneError('');
//     }

//     setForm({ ...form, [name]: value });
//   }

//   function handleFileChange(e) {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setFileError('');
//     } else {
//       setFileError('Please upload a valid payment screenshot.');
//     }
//   }

//   function valueAdd(e) {
//     e.preventDefault();

//     const { orderName, orderAddress, orderPhoneNumber, orderQuantity, upiTransactionId } = form;

//     if (!orderName || !orderAddress || !orderPhoneNumber || !orderQuantity || !upiTransactionId) {
//       alert('Please fill out all fields before placing the order.');
//       return;
//     }

//     if (orderPhoneNumber.length !== 10) {
//       alert('Phone number must be exactly 10 digits.');
//       return;
//     }

//     if (!file) {
//       setFileError('Please upload a payment screenshot.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('orderName', orderName);
//     formData.append('orderAddress', orderAddress);
//     formData.append('orderPhoneNumber', orderPhoneNumber);
//     formData.append('orderQuantity', orderQuantity);
//     formData.append('upiTransactionId', upiTransactionId);
//     // formData.append('paymentImage', paymentImage);
//     formData.append('paymentImage', file);
//     formData.append('productName', product?.productName); // Adding product name to the formData

//     // Optionally, you can also pass product ID or other product details if necessary
//     formData.append('productId', product?._id);

//     axios
//       .post('https://rithus-app-api.vercel.app/addorder', formData, 
//             {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       }
//            )
//       .then((res) => {
//         alert('Order Placed Successfully');
//       })
//       .catch((err) => {
//         console.error(err);
//         alert('Error placing the order.');
//       });
//   }

//   return (
//     <Paper elevation={3} sx={{ padding: '2rem', maxWidth: '1200px', margin: 'auto' }}>
//       <Grid container spacing={4}>
//         <Grid item xs={12} md={6} container justifyContent="center" alignItems="center">
//           <Box
//             component="img"
//             src={`https://rithus-app-api.vercel.app/${product?.productImage}` || 'https://via.placeholder.com/400'}
//             alt="Product Image"
//             sx={{ width: '100%', borderRadius: '10px' }}
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography variant="h4" fontWeight="bold" gutterBottom>
//             {product?.productName || 'Product Name'}
//           </Typography>
//           <Typography variant="h6" color="textSecondary" gutterBottom>
//             ₹ {product?.productPrice || 'Price'}
//           </Typography>
//           <Typography variant="body1" paragraph>
//             {product?.productDescription || 'Detailed product description.'}
//           </Typography>

//           <Paper elevation={3} sx={{ padding: '2rem', maxWidth: '600px', margin: 'auto', marginTop: '2rem' }}>
//             <Typography
//               variant="h4"
//               align="center"
//               gutterBottom
//               sx={{
//                 fontWeight: 'bold',
//                 background: 'black',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 marginBottom: '1.5rem',
//               }}
//             >
//               Place Your Order
//             </Typography>
//             <Box
//               component="form"
//               sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
//               onSubmit={valueAdd}
//             >
//               <TextField
//                 id="name"
//                 label="Full Name"
//                 variant="outlined"
//                 required
//                 name="orderName"
//                 onChange={capValue}
//                 value={form.orderName}
//               />
//               <TextField
//                 id="address"
//                 label="Address"
//                 variant="outlined"
//                 multiline
//                 rows={3}
//                 required
//                 name="orderAddress"
//                 onChange={capValue}
//                 value={form.orderAddress}
//               />
//               <TextField
//                 id="phone"
//                 label="Phone Number"
//                 variant="outlined"
//                 required
//                 name="orderPhoneNumber"
//                 onChange={capValue}
//                 value={form.orderPhoneNumber}
//                 error={Boolean(phoneError)}
//                 helperText={phoneError}
//               />
//               <TextField
//                 id="quantity"
//                 label="Quantity"
//                 type="number"
//                 variant="outlined"
//                 required
//                 name="orderQuantity"
//                 onChange={capValue}
//                 value={form.orderQuantity}
//               />
//               <TextField
//                 id="upi"
//                 label="UPI Transaction ID"
//                 variant="outlined"
//                 required
//                 name="upiTransactionId"
//                 onChange={capValue}
//                 value={form.upiTransactionId}
//               />
//               <Typography
//                 variant="body1"
//                 color="textPrimary"
//                 sx={{ fontWeight: 'bold', marginTop: '1rem' }}
//               >
//                 Please upload payment screenshot
//                 (Phone number: 9645633846)
//               </Typography>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 style={{ marginBottom: '1rem' }}
//               />
//               {fileError && (
//                 <Typography color="error" variant="body2">
//                   {fileError}
//                 </Typography>
//               )}
//               <Button
//                 variant="contained"
//                 sx={{
//                   backgroundColor: '#FFFDD0',
//                   color: '#5B3A29',
//                   '&:hover': { backgroundColor: '#f5e3a1' },
//                 }}
//                 size="large"
//                 fullWidth
//                 type="submit"
//               >
//                 Place Order
//               </Button>
//             </Box>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// };

// export default ProductPage;
