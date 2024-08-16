import React from 'react';
import { Box, Typography } from '@mui/material';
import bannerimg from "../assets/banner.avif" 
const Banner = ({title}) => {
  return (
    <Box
      id="banner"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        py: 6,
        backgroundImage: `url(${bannerimg})`,
        // backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1661411311489-46be8dfc82bd?q=80&w=1830&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '450px',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        // Optional overlay for better text visibility
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)', // Dark overlay
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Typography variant="h1" sx={{ mb: 2, fontWeight: 'bold', fontSize: '3rem', paddingX:'15px' }}>
          Journal of Innovative Tehcnologies (JIT)
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem' }}>
        Create and express an inroad towards the intelligent applications for next generations.
        </Typography>
        {/* <Button
          variant="contained"
          color="primary"
          sx={{
            px: 4,
            py: 2,
            fontSize: '1rem',
          }}
          href="#featured-list"
        >
          Find Journals
        </Button> */}
        {/* <Typography variant='h4'  sx={{display:"flex", justifyContent:"start", marginX:"auto", paddingLeft:"30px",fontWeight:"bold"}}>
          {title} 
        </Typography> */}
      </Box>
    </Box>
  );
};

export default Banner;
