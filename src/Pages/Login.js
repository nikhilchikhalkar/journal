import React, { useState } from 'react';
import { Container, TextField, Button, Grid, Typography } from '@mui/material';

const Login = () => {
  const [loginData, setLoginData] = useState({
    userIdOrEmail: '',
    password: '',
    otp: '',
  });
  const [otpVisible, setOtpVisible] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Handle email validation button click
  const handleValidateEmail = () => {
    // Logic to send OTP to email
    console.log('Sending OTP to:', loginData.userIdOrEmail);
    setOtpVisible(true); // Show OTP field after validation
  };

  // Handle login button click
  const handleLogin = () => {
    console.log('Login Data:', loginData);
    // Add login logic (e.g., API call)
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Login</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="User ID/Email"
            name="userIdOrEmail"
            value={loginData.userIdOrEmail}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} container spacing={1}>
          <Grid item xs={8}>
            <TextField
              label="Password"
              name="password"
              type="password"
              value={loginData.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={4}>
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth 
              onClick={handleValidateEmail} 
              sx={{ marginTop: 2 }}
            >
              Validate
            </Button>
          </Grid>
        </Grid>
        {otpVisible && (
          <Grid item xs={12}>
            <TextField
              label="OTP"
              name="otp"
              value={loginData.otp}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleLogin} 
            fullWidth 
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
