import React from 'react';
import { AccordionDetails, Typography, Box, List, ListItem, Grid } from '@mui/material';

import SideBar from '../Components/SideBar';
import Banner from '../Components/Banner';

const CitationReports = () => {
  return (

    <>
    <Banner title="Citation-Reports" />
    <Grid container justifyContent={"center"} marginX={"auto"}   sx={{overflow:"auto", gap:"10px"}} marginTop={"10px"}  height="100vh">
      {/* Left Side List */}
      <Grid item xs={12} sm={2} marginBottom={"auto"}  bgcolor="#00C1A1" color={'white'} borderRadius={"10px"} p={2}>
        <SideBar/>
      </Grid>

      {/* Right Side Content */}
      <Grid item xs={12} sm={9} overflow={"hidde"} flexGrow={1} p={2} borderRadius={"10px"} bgcolor="#f5f5f5" marginx={"auto"} >
      <Box sx={{ padding: 3 }}>
      <Box>
        <Box
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" component="div">
            Citation Reports
          </Typography>
        </Box>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
             (JIT-AI) Journals try its best effort for selecting good quality paper to achieve high impact factor.<br />
             (JIT-AI) Journals published paper cited highly due to open access publication era and its worldwide indexing.<br />
             (JIT-AI) Journals paper citation is increasing day by day. So it is very difficult to calculate exact citation report.<br />
            But approx citation report is as follows (it may vary because it depends on citation of papers):
          </Typography>
          <List sx={{ fontSize: '15px' }}>
            <ListItem><strong> (JIT-AI) Journal of Computer Engineering : 76.5 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of Electrical and Electronics Engineering: 61.3 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of Mechanical and Civil Engineering: 71.2 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of Electronics and Communication Engineering: 65.3 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of VLSI and Signal Processing: 61.7 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of Environmental Science, Toxicology and Food Technology: 51.1 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of Humanities and Social Science: 79.6 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of Pharmacy and Biological Science: 73.5 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of Business and Management: 75.8 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of Dental and Medical Science: 83.4 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of Agriculture and Veterinary Science: 56.2 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of Applied Physics: 57.6 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of Applied Chemistry: 61.9 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of Mathematics: 79.5 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of Nursing and Health Science: 55.3 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of Research Method in Education: 51.5 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of Economics and Finance: 56.9 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of Applied Geology and Geophysics: 42.3 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of Mobile Computing & Application: 45.2 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of Biotechnology and Biochemistry: 49.8 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of Sports and Physical Education: 56.5 %</strong></ListItem>
            <ListItem><strong> (JIT-AI) Journal of Polymer and Textile Engineering: 57.1 %</strong></ListItem>
          </List>
        </AccordionDetails>
      </Box>
    </Box>
      </Grid>
    </Grid>


    
    </>
    
  );
};

export default CitationReports;
