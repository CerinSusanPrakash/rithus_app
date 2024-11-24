// import React from 'react'
// import { Container, Typography, Grid, Button, Card, CardContent, Avatar } from "@mui/material";
// import { Email, Facebook, Instagram, Twitter } from '@mui/icons-material';

// const Aboutus = () => {
//   return (
//     <div><Container maxWidth="lg" style={{ marginTop: '50px' }}>
//     {/* Hero Section */}
//     <Grid container alignItems="center" style={{ backgroundImage: 'url(/path/to/banner.jpg)', padding: '50px 0', backgroundSize: 'cover', color: '#fff' }}>
//       <Grid item xs={12}>
//         <Typography variant="h2" align="center" gutterBottom>
//           Our Journey, Our Commitment
//         </Typography>
//         <Typography variant="h6" align="center">
//           Empowering you with quality products since 2020
//         </Typography>
//         <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
//           <Button variant="contained" color="primary">Shop Now</Button>
//         </Grid>
//       </Grid>
//     </Grid>

//     {/* Mission & Vision Section */}
//     <Grid container spacing={4} style={{ marginTop: '50px' }}>
//       <Grid item xs={12} md={6}>
//         <Typography variant="h4" gutterBottom>Our Mission</Typography>
//         <Typography variant="body1">
//           We aim to provide the highest quality products at the most affordable prices, ensuring sustainability and customer satisfaction in everything we do.
//         </Typography>
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <Typography variant="h4" gutterBottom>Our Vision</Typography>
//         <Typography variant="body1">
//           To be the leading global destination for eco-friendly and innovative products.
//         </Typography>
//       </Grid>
//     </Grid>

//     {/* Our Story Section */}
//     <Grid container spacing={4} style={{ marginTop: '50px' }}>
//       <Grid item xs={12} md={6}>
//         <img src="/path/to/founder.jpg" alt="Our Story" style={{ width: '100%', borderRadius: '10px' }} />
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <Typography variant="h4" gutterBottom>How We Started</Typography>
//         <Typography variant="body1">
//           Our company began in 2020 with a simple idea: to make quality products accessible to everyone. What started as a small team has grown into a global brand with thousands of customers.
//         </Typography>
//       </Grid>
//     </Grid>

//     {/* Values Section */}
//     <Grid container spacing={4} style={{ marginTop: '50px' }}>
//       <Grid item xs={12}>
//         <Typography variant="h4" align="center" gutterBottom>What We Stand For</Typography>
//       </Grid>
//       {[
//         { title: "Quality First", description: "We prioritize quality in every product we offer." },
//         { title: "Customer-Centric", description: "Your satisfaction drives everything we do." },
//         { title: "Sustainability", description: "We believe in eco-friendly and sustainable practices." },
//         { title: "Innovation", description: "Continuously improving and innovating to serve you better." }
//       ].map((value, index) => (
//         <Grid item xs={12} md={3} key={index}>
//           <Card>
//             <CardContent>
//               <Typography variant="h5" gutterBottom>{value.title}</Typography>
//               <Typography variant="body2">{value.description}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>

//     {/* Team Section */}
//     <Grid container spacing={4} style={{ marginTop: '50px' }}>
//       <Grid item xs={12}>
//         <Typography variant="h4" align="center" gutterBottom>Meet the Team</Typography>
//       </Grid>
//       {[
//         { name: "John Doe", role: "Founder & CEO", img: "/path/to/team1.jpg" },
//         { name: "Jane Smith", role: "COO", img: "/path/to/team2.jpg" },
//         { name: "Emily Johnson", role: "Marketing Head", img: "/path/to/team3.jpg" }
//       ].map((member, index) => (
//         <Grid item xs={12} md={4} key={index}>
//           <Card>
//             <CardContent style={{ textAlign: 'center' }}>
//               <Avatar src={member.img} alt={member.name} style={{ width: 100, height: 100, margin: '0 auto' }} />
//               <Typography variant="h6" style={{ marginTop: '10px' }}>{member.name}</Typography>
//               <Typography variant="body2" color="textSecondary">{member.role}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>

//     {/* Testimonials Section */}
//     <Grid container spacing={4} style={{ marginTop: '50px' }}>
//       <Grid item xs={12}>
//         <Typography variant="h4" align="center" gutterBottom>What Our Customers Say</Typography>
//       </Grid>
//       {[
//         { text: "Amazing products and fantastic customer service!", customer: "Alex T." },
//         { text: "I've never been happier with an online shopping experience.", customer: "Jessica P." },
//         { text: "High-quality items and fast delivery. Highly recommend!", customer: "Michael W." }
//       ].map((testimonial, index) => (
//         <Grid item xs={12} md={4} key={index}>
//           <Card>
//             <CardContent>
//               <Typography variant="body1" gutterBottom>"{testimonial.text}"</Typography>
//               <Typography variant="body2" color="textSecondary">- {testimonial.customer}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>

//     {/* Call to Action */}
//     <Grid container spacing={4} alignItems="center" style={{ marginTop: '50px', textAlign: 'center' }}>
//       <Grid item xs={12}>
//         <Typography variant="h4" gutterBottom>Join Us on Our Journey</Typography>
//         <Typography variant="body1">Be a part of our growing community and stay updated with our latest products and offers.</Typography>
//         <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>Subscribe</Button>
//       </Grid>
//       <Grid item xs={12}>
//         <Email style={{ marginRight: '10px' }} />
//         <Facebook style={{ marginRight: '10px' }} />
//         <Instagram style={{ marginRight: '10px' }} />
//         <Twitter />
//       </Grid>
//     </Grid>
//   </Container></div>
//   )
// }

// export default Aboutus
import React from "react";
import { Container, Typography, Grid, Button, Card, CardContent, Avatar } from "@mui/material";
import { Email, Facebook, Instagram, Twitter } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '50px' }}>
      {/* Hero Section */}
      <Grid container alignItems="center" style={{ backgroundImage: 'url(https://png.pngtree.com/background/20220724/original/pngtree-background-aesthetic-picture-image_1740961.jpg)', padding: '50px 0', backgroundSize: 'cover', color: '#fff' }}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center" gutterBottom>
            Our Journey, Our Commitment
          </Typography>
          <Typography variant="h6" align="center">
            Empowering you with quality products since 2020
          </Typography>
          <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
            {/* <Button variant="contained" color="primary">Shop Now</Button> */}
          </Grid>
        </Grid>
      </Grid>


     

      {/* Values Section */}
      {/* <Grid container spacing={4} style={{ marginTop: '50px' }}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>What We Stand For</Typography>
        </Grid>
        {[
          { title: "Quality First", description: "We prioritize quality in every product we offer." },
          { title: "Customer-Centric", description: "Your satisfaction drives everything we do." },
          { title: "Sustainability", description: "We believe in eco-friendly and sustainable practices." },
          { title: "", description: "Continuously improving and innovating to serve you better." }
        ].map((value, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>{value.title}</Typography>
                <Typography variant="body2">{value.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}
      {/* Call to Action */}
      <Grid container spacing={4} alignItems="center" style={{ marginTop: '50px', textAlign: 'center' }}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>Join Us on Our Journey</Typography>
          <Typography variant="body1" color="black">Be a part of our growing community and stay updated with our latest products and offers.</Typography>
          {/* <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>Whatsapp Channel Subscribe</Button> */}
<Button
  variant="contained"
  color="success"
  style={{ marginTop: '20px', backgroundColor: '#4CAF50' }}
  href="https://chat.whatsapp.com/E2ntqpYTTNj3U6n34XH15O" // Replace with your WhatsApp channel link
  target="_blank"
  startIcon={<WhatsAppIcon />} // Adds the WhatsApp icon to the start of the button
>
  Whatsapp Channel Subscribe
</Button>

        </Grid>
        {/* <Grid item xs={12}>
          <Email style={{ marginRight: '10px' }} />
          <Facebook style={{ marginRight: '10px' }} />
          <Instagram style={{ marginRight: '10px' }} />
          <Twitter />
        </Grid> */}
      </Grid>
      <Grid container spacing={4} style={{ marginTop: '50px' }}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          What We Stand For
        </Typography>
      </Grid>
      {[
        { 
          title: "Quality First", 
          description: "We prioritize quality in every product we offer.",
          bgImage: "url('https://cdn.wallpapersafari.com/55/76/r80zjJ.png')" // Add your image URL here
        },
        { 
          title: "Customer-Centric",
          description: "Your satisfaction drives everything we do.",
          bgImage: "url('https://cdn.wallpapersafari.com/55/76/r80zjJ.png')" // Add your image URL here
        },
        { 
          title: "Sustainability", 
          description: "We believe in eco-friendly and sustainable practices.",
          bgImage: "url('https://cdn.wallpapersafari.com/55/76/r80zjJ.png')" // Add your image URL here
        },
        { 
          title: "Innovation", 
          description: "Continuously improving and innovating to serve you better.",
          bgImage: "url('https://cdn.wallpapersafari.com/55/76/r80zjJ.png')" // Add your image URL here
        }
      ].map((value, index) => (
        <Grid item xs={12} md={3} key={index}>
          <Card
            style={{
              backgroundImage: value.bgImage, // Add background image
              backgroundSize: 'cover',        // Ensure image covers entire card
              backgroundPosition: 'center',   // Center the image
              color: 'black'                  // Optional: Make text white for better contrast
            }}
          >
            
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {value.title}
              </Typography>
              <Typography variant="body2" color="black">
                {value.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>


{/*     //new */}
      <Grid container spacing={4} alignItems="center" style={{ marginTop: '50px', textAlign: 'center' }}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>Login (Admin)</Typography>
          <Button sx={{ color: '#5B3A29', fontWeight: 'bold', fontFamily: '"Arial", "Helvetica", "sans-serif"' }}>
            <Link to={'/admin'} style={{textDecoration:"none" ,color:'#5B3A29', fontWeight: 'bold', fontFamily: '"Arial", "Helvetica", "sans-serif"'}}>
              About
            </Link>
          </Button>

        </Grid>
      </Grid>
{/* //new */}
      {/* Team Section */}
      {/* <Grid container spacing={4} style={{ marginTop: '50px' }}>
        <Grid item xs={12} >
          <Typography variant="h4" align="center" gutterBottom>Meet the Team</Typography>
        </Grid>
        {[
          { name: "", role: "Founder & CEO", img: "/path/to/team1.jpg" },
          { name: "", role: "COO", img: "/path/to/team2.jpg" },
          { name: "Emily Johnson", role: "Marketing Head", img: "/path/to/team3.jpg" }
        ].map((member, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent style={{ textAlign: 'center' }}>
                <Avatar src={member.img} alt={member.name} style={{ width: 100, height: 100, margin: '0 auto' }} />
                <Typography variant="h6" style={{ marginTop: '10px' }}>{member.name}</Typography>
                <Typography variant="body2" color="textSecondary">{member.role}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}

      {/* Testimonials Section */}
      {/* <Grid container spacing={4} style={{ marginTop: '50px' }}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>What Our Customers Say</Typography>
        </Grid>
        {[
          { text: "Amazing products and fantastic customer service!", customer: "Alex T." },
          { text: "I've never been happier with an online shopping experience.", customer: "Jessica P." },
          { text: "High-quality items and fast delivery. Highly recommend!", customer: "Michael W." }
        ].map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="body1" gutterBottom>"{testimonial.text}"</Typography>
                <Typography variant="body2" color="textSecondary">- {testimonial.customer}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}

      
    </Container>
  );
};

export default AboutUs;
