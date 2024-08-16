import React from 'react';
import { Grid, Typography, Box, Link, Avatar, Container } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import prof1 from "../assets/prof1.jpg"

const AuthorProfile = () => {
  return (
    <Container sx={{backgroundColor:'#f5f5f5'}} >
        <Grid container spacing={2} p={2}>
      {/* Author Image and Follow Button */}
      <Grid item xs={12} sm={4} md={3}>
      <Avatar 
  alt="Baiqing Sun"
  src={prof1}
  sx={{
    width: 200,
    height: "auto",  // Maintain aspect ratio
    borderRadius: "14%",
    marginX: "auto",
    marginBottom: 2,
    objectFit: "cover",  // Ensure the image fits without distortion
  }}
/>

        {/* <Button variant="outlined" fullWidth>Follow</Button> */}
      </Grid>

      {/* Author Bio and Details */}
      <Grid item xs={12} sm={8} md={9}>
        <Typography variant="h4">Baiqing Sun <HelpIcon sx={{ marginLeft: 1, cursor: 'pointer' }} /> </Typography>

        {/* <Box display="flex" alignItems="center">
          <Link href="" target="_blank">
            <i className="icon icon-orcid" />
          </Link>
          <HelpIcon sx={{ marginLeft: 1, cursor: 'pointer' }} />
        </Box> */}

        <Box mt={2}>
          <Typography variant="h6">Affiliation</Typography>
          <Typography variant="body1">School of Management</Typography>
          <Typography variant="body1">Harbin Institute of Technology</Typography>
          <Typography variant="body1">Harbin, China</Typography>
        </Box>
      </Grid>

      {/* Research Areas */}
      <Grid item xs={12}>
        <Typography variant="h6">Publication Topics</Typography>
        <Box maxHeight="90px" overflow="auto">
          <Typography variant="body2">
            <Link href="#">Aggregate Demand</Link>, <Link href="#">Annual Reports</Link>, <Link href="#">Carrier Frequency</Link>,{' '}
            <Link href="#">Chinese Firms</Link>, <Link href="#">Compressed Air</Link>, <Link href="#">Core Explanatory Variable</Link>,{' '}
            <Link href="#">Corporate Innovation</Link>, <Link href="#">Cultural Events</Link>, <Link href="#">Cultural Values</Link>
          </Typography>
        </Box>
        {/* <Button variant="text">Show More</Button> */}
      </Grid>

      {/* Biography */}
      <Grid item xs={12}>
        <Typography variant="h6">Biography</Typography>
        <Typography variant="body2">
          Baiqing Sun received the Ph.D. degree in management science and engineering from the Harbin Institute of Technology, Harbin, China, in 2005.
          He is currently a Professor with the Department of Finance, Harbin Institute of Technology. He has authored or coauthored several articles 
          in top-tier international journals, and three books on emergency management and quantitative finance. His research interests include 
          financial system engineering, financial risk control, and emergency management of critical infrastructure.
        </Typography>
      </Grid>

      {/* Publications */}
      {/* <Grid item xs={12}> */}
        {/* <Box display="flex" alignItems="center"> */}
          {/* <BarChartIcon sx={{ marginRight: 1 }} /> */}
          {/* <Typography variant="h6">Publications by Year</Typography> */}
        {/* </Box> */}
        {/* Placeholder for Bar Chart */}
        {/* <Box height="100px" bgcolor="#e0e0e0" /> */}
      {/* </Grid> */}

      {/* Co-Authors */}
      <Grid item xs={12}>
        <Typography variant="h6">Co-Authors:</Typography>
        <Box display="flex" flexWrap="wrap">
          <Typography variant="body2"><Link href="#">Xin Bao</Link>, </Typography>
          <Typography variant="body2"><Link href="#">Fei Chen</Link>, </Typography>
          <Typography variant="body2"><Link href="#">Toshio Fukuda</Link>, </Typography>
          <Typography variant="body2"><Link href="#">Meini Han</Link>, </Typography>
          <Typography variant="body2"><Link href="#">Jinhu Shen</Link></Typography>
          <Typography variant="body2"><Link href="#">Show All Co-Authors (16)</Link></Typography>
        </Box>
      </Grid>
    </Grid>
    </Container>
    
  );
};

export default AuthorProfile;
