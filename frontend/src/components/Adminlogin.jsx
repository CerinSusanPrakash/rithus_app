// import React from 'react';
// import { TextField, Button, Typography, Paper, Grid, Box } from '@mui/material';

// const Adminlogin = () => {
//     const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setError('');

//     // Simple validation
//     if (!email || !password) {
//       setError('Please enter your email and password');
//       return;
//     }

//     // Mock login logic (replace this with actual authentication)
//     if (email === 'admin@example.com' && password === '123') {
//       alert('Login successful!');
//       // Redirect or perform any action after successful login
//     } else {
//       setError('Invalid email or password');
//     }
//   };
//   return (
//     <Box
//       style={{
//         minHeight: '100vh',
//         backgroundImage: `url('https://img.freepik.com/premium-psd/scrapbook-vintage-collage-aesthetic-background-paper-texture-with-design-space_705652-73.jpg?w=2000')`, // Change this to your image path
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <Grid
//         container
//         style={{
//           minHeight: '100vh',
//           alignItems: 'center',
//           justifyContent: 'center',
//           backgroundColor: 'rgba(240, 242, 245, 0.8)', // Semi-transparent background for better readability
//         }}
//       >
//         <Grid item xs={10} sm={6} md={4}>
//           <Paper
//             elevation={3}
//             style={{
//               padding: '30px',
//               textAlign: 'center',
//             }}
//           >
//             <Typography variant="h5" style={{ marginBottom: '20px' }}>
//               Login
//             </Typography>
//             <form>
//               <TextField
//                 label="Email"
//                 variant="outlined"
//                 fullWidth
//                 style={{ marginBottom: '15px' }}
//               />
//               <TextField
//                 label="Password"
//                 type="password"
//                 variant="outlined"
//                 fullWidth
//                 style={{ marginBottom: '15px' }}
//               />
//               <Button
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 style={{ marginTop: '10px' }}
//               >
//                 Login
//               </Button>
//             </form>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Adminlogin;


import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Simple validation
    if (!email || !password) {
      setError('Please enter your email and password');
      return;
    }

    // Mock login logic (replace this with actual authentication)
    if (email === 'admin@example.com' && password === '123') {
      alert('Login successful!');
      navigate('/adminhome');
      // Redirect or perform any action after successful login
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Box
      style={{
        minHeight: '100vh',
        backgroundImage: `url('https://img.freepik.com/premium-psd/scrapbook-vintage-collage-aesthetic-background-paper-texture-with-design-space_705652-73.jpg?w=2000')`, // Change this to your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Grid
        container
        style={{
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(240, 242, 245, 0.8)', // Semi-transparent background for better readability
        }}
      >
        <Grid item xs={10} sm={6} md={4}>
          <Paper
            elevation={3}
            style={{
              padding: '30px',
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" style={{ marginBottom: '20px' }}>
              Login
            </Typography>
            {error && (
              <Typography color="error" style={{ marginBottom: '15px' }}>
                {error}
              </Typography>
            )}
            <form onSubmit={handleLogin}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                style={{ marginBottom: '15px' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                style={{ marginBottom: '15px' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: '10px' }}
                type="submit"
                sx={{ backgroundColor: '#FFFDD0', color: '#5B3A29', '&:hover': { backgroundColor: '#f5e3a1' } }}
              >
                Login
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Adminlogin;
