import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Viewprod = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://rithus-app-backend.vercel.app/getproducts')
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addPro = (val) => {
    navigate('/buyproduct', { state: { val } });
  };

  return (
    <div>
      <Box
        sx={{
          position: 'relative',
          backgroundImage: 'url(https://th.bing.com/th/id/R.8a8a522aa881c8289e5fca5951abb2c8?rik=yUDhoq829S%2bDfQ&riu=http%3a%2f%2fwww.textures.com%2fsystem%2fgallery%2fphotos%2fBuildings%2fShops%2f23096%2fShops0143_600.jpg%3fv%3d5&ehk=n%2fahRbPVYZuCzNk12uQYJlh%2boQVHXexWHehKFOG8hZk%3d&risl=&pid=ImgRaw&r=0)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        {/* Shading Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay with opacity
          }}
        ></Box>

        {/* Text Content */}
        <Box sx={{ position: 'relative' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            All Products
          </Typography>
        </Box>
      </Box>
      <br />
      <br />

      {/* Product Cards */}
      <Container>
        <Grid container spacing={3}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                {/* <CardMedia
                  sx={{ height: 450 }}
                  image={item.productImagelink} // Use item image or fallback
                /> */}
                <CardMedia
  sx={{ height: 200 }}
  image={`https://rithus-app-api.vercel.app/${item.productImage}`} // Dynamically set the image URL
  title={item.productName || "Product Image"}
  component="img" // Use CardMedia as an img component for better fallback support
  alt={item.productName || "Product Image"}
  style={{ objectFit: 'cover' }} // Ensure the image fits nicely within the card
/>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.productName}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  ₹{item.productPrice}
                  <br />
                    {item.productDescription}
                    <br />
                    Only {item.productQuantity} left
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', gap: 3 }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#FFFDD0',
                      color: '#5B3A29',
                      '&:hover': { backgroundColor: '#f5e3a1' },
                    }} // Cream color with hover effect
                    size="large"
                    onClick={() => addPro(item)}
                  >
                    Buy Now
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

export default Viewprod;


// import React from 'react';
// import { Container, Grid, Typography, Box } from '@mui/material';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';
// import {useNavigate} from 'react-router-dom'

// const Viewprod = () => {
//   const [data,setdata]=useState([])
//   const navigate=useNavigate()
//   useEffect(()=>{
//     axios.get('http://localhost:4000/getproducts').then((res)=>{
//       console.log(res)
//       setdata(res.data)
//     }).catch((err)=>{
//       console.log(err)
//     })
//   },[])
//   function addpro(val){
//     navigate('/products',{state:{val}})
//     }
//   return (
//     <div>
//       <Box
//         sx={{
//           position: 'relative',
//           backgroundImage: 'url(https://th.bing.com/th/id/R.8a8a522aa881c8289e5fca5951abb2c8?rik=yUDhoq829S%2bDfQ&riu=http%3a%2f%2fwww.textures.com%2fsystem%2fgallery%2fphotos%2fBuildings%2fShops%2f23096%2fShops0143_600.jpg%3fv%3d5&ehk=n%2fahRbPVYZuCzNk12uQYJlh%2boQVHXexWHehKFOG8hZk%3d&risl=&pid=ImgRaw&r=0)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '500px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           color: 'white',
//           textAlign: 'center',
//         }}
//       >
//         {/* Shading Overlay */}
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay with opacity
//           }}
//         ></Box>

//         {/* Text Content */}
//         <Box sx={{ position: 'relative' }}>
//           <Typography variant="h3" component="h1" gutterBottom>
//             All Products
//           </Typography>
//         </Box>
//       </Box>
//       <br />
//       <br />

//       {/* products */}
//       {data.map((item)=>(
          
//           <Grid item xs={12} sm={6} md={4} lg={3}>
//       <Card sx={{ maxWidth: 345  } } >
//       <CardMedia
//         sx={{ height: 450 }}
//         image="https://i.pinimg.com/originals/39/1d/ee/391deed7e92f0c5c818fea57cb12d934.jpg"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//         {item.productName}
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//           Details
//         </Typography>
//       </CardContent>
//       <CardActions sx={{ justifyContent: 'center' , gap: 3}}>
//       {/* <Button 
//             variant="contained" 
//             sx={{ backgroundColor: '#FFFDD0', color: '#5B3A29', '&:hover': { backgroundColor: '#f5e3a1' } }} // Cream color with hover effect
//             size="large"
//           >
//             <Link to={'/buyproduct'}>Buy Now</Link></Button> */}

// <Button 
//   variant="contained" 
//   sx={{ backgroundColor: '#FFFDD0', color: '#5B3A29', '&:hover': { backgroundColor: '#f5e3a1' } }} // Cream color with hover effect
//   size="large"
// >
// <Link to={'/buyproduct'} style={{textDecoration:"none" ,color:'#5B3A29', fontFamily: '"Arial", "Helvetica", "sans-serif"'}} onClick={()=>{
//   addpro(item)
// }}>Buy Now</Link></Button>

//         {/* <Button 
//             variant="contained" 
//             sx={{ backgroundColor: '#FFFDD0', color: '#5B3A29', '&:hover': { backgroundColor: '#f5e3a1' } }} // Cream color with hover effect
//             size="large"
//           >Learn More</Button> */}
//         {/* <Button size="small" color='#5B3A29'>Learn More</Button> */}
//       </CardActions>
//     </Card>
//     </Grid>))}
//     </div>
//   );
// };

// export default Viewprod;

// import React from 'react'
// import { Container, Grid, Typography, Button, Box } from '@mui/material';

// const Viewprod = () => {
//   return (
//     <div>
//         <Box
//         sx={{
//           backgroundImage: 'url(https://th.bing.com/th/id/R.8a8a522aa881c8289e5fca5951abb2c8?rik=yUDhoq829S%2bDfQ&riu=http%3a%2f%2fwww.textures.com%2fsystem%2fgallery%2fphotos%2fBuildings%2fShops%2f23096%2fShops0143_600.jpg%3fv%3d5&ehk=n%2fahRbPVYZuCzNk12uQYJlh%2boQVHXexWHehKFOG8hZk%3d&risl=&pid=ImgRaw&r=0)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '500px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           color: 'white',
//           textAlign: 'center',
//         }}
//       >
//         <Box>
//           <Typography variant="h3" component="h1" gutterBottom>
//             All Products
//           </Typography>
//         </Box>
//       </Box>


//     </div>
//   )
// }

// export default Viewprod
