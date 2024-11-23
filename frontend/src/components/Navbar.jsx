import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }} padding={'15px'}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <img 
              src="https://ih1.redbubble.net/image.2797274136.5909/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
              style={{ width: '40px', height: '40px', marginRight: '8px' }} // Adjust size and margin
            />

          <Typography variant="h6"
            component="div"
            sx={{ 
              flexGrow: 1, 
              textAlign: 'left', 
              color: '#5B3A29', // Darker brown color
              fontWeight: 'bold', 
              fontFamily: '"Arial", "Helvetica", "sans-serif"' 
            }}>
            Rithus's Nighty World
          </Typography>
          <Button sx={{ color: '#5B3A29', fontWeight: 'bold', fontFamily: '"Arial", "Helvetica", "sans-serif"',mr: 3 }}><Link to={'/'} style={{textDecoration:"none" ,color:'#5B3A29', fontWeight: 'bold', fontFamily: '"Arial", "Helvetica", "sans-serif"'}}>Home</Link></Button>
          <Button sx={{ color: '#5B3A29', fontWeight: 'bold', fontFamily: '"Arial", "Helvetica", "sans-serif"',mr: 3 }}><Link to={'/products'} style={{textDecoration:"none" ,color:'#5B3A29', fontWeight: 'bold', fontFamily: '"Arial", "Helvetica", "sans-serif"'}}>Shop</Link></Button>
          <Button sx={{ color: '#5B3A29', fontWeight: 'bold', fontFamily: '"Arial", "Helvetica", "sans-serif"' }}><Link to={'/aboutus'} style={{textDecoration:"none" ,color:'#5B3A29', fontWeight: 'bold', fontFamily: '"Arial", "Helvetica", "sans-serif"'}}>About</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar