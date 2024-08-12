import React from 'react'
import { Box, Typography } from '@mui/material';

function FlagSection() {
  return (
    <>
     <Box
     ClassName="flagbox"
      sx={{
        p: 4,
        bgcolor: 'background.paper',
        height:'410px',
        position:"relative",
        overflow:"hidden",
        opacity:"1.5",
        // filter:"Brightness(80%)",
        backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1661411311489-46be8dfc82bd?q=80&w=1830&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      {/* <Grid container spacing={4} alignItems="center"  > */}
        {/* Flag Image */}
        {/* <Grid item xs={12} sm={6} md={4}>
          <Box
         
            component="img"
            src={flag}  // Replace with your flag image URL
            alt="Country Flag"
            sx={{
              width: {
                xs: '100px',
                sm: '150px',
                md: '200px',
                lg: '250px',
                xl: '300px',
              },
              height: 'auto',
              display: 'block',
              mx: 'auto',
              border: '2px solid white',  // Optional: Add a border around the flag for better visibility
            }}
          />
        </Grid> */}

        {/* Text Content */}
        <Box
        //  item xs={12} sm={6} md={8} 
        className='flagcontent'
        // sx={{
        //     position:'absolute',
        //     left:'0',
        //     bottom:'0',
        //     display:'block',
        //     width:"0",
        //     height:"0",
        //     borderBottom:""

        // }}
        >
          
        </Box>
        <Box>
        <Typography variant="h4" component="h2"
        //    gutterBottom color={"#013D82"}
            >
            IOT 
          </Typography>
          <Typography variant="body1" >
           
          </Typography>
        </Box>
      {/* </Grid> */}
    </Box>
    </>
  )
}

export default FlagSection