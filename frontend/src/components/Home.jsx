
import React from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const categories = ['Kurthas','Night dress', 'Nighty', 'Skirt', 'Baniyan'];

const Home = () => {
  return (
    <Container maxWidth="lg">
      {/* Hero Banner */}
      <Box
        sx={{
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
        <Box>
          <Typography variant="h3" component="h1" gutterBottom>
            Discover Your Next Favorite Product
          </Typography>
          {/* <Button variant="contained" color="primary" size="large">
            Shop Now
          </Button> */}
          {/* <Button 
            variant="contained" 
            sx={{ backgroundColor: '#FF5722', '&:hover': { backgroundColor: '#E64A19' } }} // Custom orange color
            size="large"
          >
            Shop Now
          </Button> */}
          <Button 
            variant="contained" 
            sx={{ backgroundColor: '#FFFDD0', color: '#5B3A29', '&:hover': { backgroundColor: '#f5e3a1' } }} // Cream color with hover effect
            size="large"
          ><Link to={'/products'} style={{textDecoration:"none" ,color:'#5B3A29', fontWeight: 'bold', fontFamily: '"Arial", "Helvetica", "sans-serif"'}}>
            Shop Now</Link>
          </Button>
        </Box>
      </Box>

      {/* Categories Section */}
      <Box my={6}>
        <Typography variant="h4" align="center" gutterBottom>
          Explore Our Categories
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  height: '200px',
                  backgroundImage: 'url(https://i.pinimg.com/originals/50/f3/97/50f3973620f86f36f7a264952d729cfb.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  textAlign: 'center',
                  color: 'white',
                  boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                }}
              >
                <Typography variant="h5" component="h2" sx={{ backgroundColor: 'rgba(0,0,0,0.5)', px: 2, py: 1 }}>
                  {category}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call-to-Action Section */}
      <Box
        sx={{
          backgroundImage: 'url(https://i.pinimg.com/736x/8a/75/8a/8a758a1c2db3e67933b67b4fb6b07d2c.jpg)',
          py: 6,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: '#FFFDD0'}}>
          Ready to Start Shopping?
        </Typography>
        {/* <Button variant="contained" color="primary" size="large">
          Browse Our Collection
        </Button> */}
        <Button 
          variant="contained" 
          sx={{ backgroundColor: '#FFFDD0', color: '#5B3A29', '&:hover': { backgroundColor: '#f5e3a1' } }} // Cream color with hover effect
          size="large"
        ><Link to={'/products'} style={{textDecoration:"none" ,color:'#5B3A29', fontWeight: 'bold', fontFamily: '"Arial", "Helvetica", "sans-serif"'}}>
          Browse Our Collection</Link>
        </Button>
      </Box>
    </Container>
    
  );
};

export default Home;
