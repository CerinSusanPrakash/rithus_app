import React from 'react';
import { Grid, Typography, Link, Container, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: 'white',
        padding: '40px 0',
        marginTop: '50px'
      }}
    >
      <Container>
        <Grid container spacing={4} >
        <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Stay Connected
            </Typography>

            {/* Social Media Links */}
            <Box sx={{ marginTop: '20px' }}>
            <Link href="https://chat.whatsapp.com/E2ntqpYTTNj3U6n34XH15O" color="inherit" underline="hover">
                Whatsapp group invite
              </Link>{' '}
              |{' '}
              <Link href="https://www.facebook.com/profile.php?id=61560867301540&mibextid=ZbWKwL" color="inherit" underline="hover">
                Facebook
              </Link>{' '}
              |{' '}
              <Link href="https://www.instagram.com/rithus_nighty_world?igsh=dnJ5d2NhZ3IwOTNz" color="inherit" underline="hover">
                Instagram
              </Link>{' '}
              
              
            </Box>
          </Grid>
          
          

          {/* Customer Support */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Customer Support
            </Typography>
            Arun Prasad <br />
            9645633846
          </Grid>

          {/* Newsletter & Social Media */}
          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/products" color="inherit" underline="hover">
              Shop
            </Link><br />
            <Link href="/aboutus" color="inherit" underline="hover">
              About Us
            </Link><br />
            {/* <Link href="/contact" color="inherit" underline="hover">
              Contact Us
            </Link><br /> */}
            {/* <Link href="/faq" color="inherit" underline="hover">
              FAQ
            </Link> */}
          </Grid>

          {/* About Us */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a e-commerce store focused on delivering quality products with  customer satisfaction.
            </Typography>
          </Grid>

        </Grid>

        {/* Copyright */}
        <Box sx={{ textAlign: 'center', marginTop: '40px' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Rithu's Nighty World. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
