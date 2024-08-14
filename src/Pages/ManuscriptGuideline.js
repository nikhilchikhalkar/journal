import React from 'react';
import { Typography, Button, Grid, Divider, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SideBar from '../Components/SideBar';
import Banner from '../Components/Banner';

const ManuscriptPreparation = () => {
  return (

<>
<Banner title="Manuscript-Preparation" />
    <Grid container justifyContent={"center"} marginX={"auto"}   sx={{overflow:"auto", gap:"10px"}} marginTop={"10px"}  height="100vh">
    {/* Left Side List */}
    <Grid item xs={12} sm={2} marginBottom={"auto"}  bgcolor="#00C1A1" color={'white'} borderRadius={"10px"} p={2}>
      <SideBar/>
    </Grid>

    {/* Right Side Content */}
    <Grid item xs={12} sm={8} overflow={"hidde"} flexGrow={1} p={2} borderRadius={"10px"} bgcolor="#f5f5f5" marginx={"auto"} >
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <Typography variant="h6" gutterBottom>
        Manuscript Preparation Guidelines & Downloads
      </Typography>
      <Divider />

      <Box sx={{ marginY: '20px' }}>
        <Typography variant="body1" align="justify">
          Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT) Journals is a self-supporting organization and does not receive funding from any institution/government. 
          Hence, the operation of the journal is solely financed by the processing fees received from authors. The processing 
          fees are required to meet operational expenses such as employees, salaries, internet services, electricity, etc. 
          Being an Open Access Journal, Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT) Journals does not receive payment for subscriptions as the journals are freely 
          accessible over the internet. It costs money to produce a peer-reviewed, edited, and formatted article that is ready 
          for online publication, and to host it on a server that is freely accessible without barriers around the clock. We ask 
          that, as a small part of the cost of doing the research, the author, institution, or funding agency pays a modest fee to 
          help cover the actual cost of the essential final step, the publication.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" color="error">
            Download Paper Template
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="doc/Paper Template.docx?contractId=3141832"
            endIcon={<DownloadIcon />}
            sx={{ marginTop: '10px' }}
          >
            Paper Template
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" color="error">
            Copyright Form
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="doc/Copy right form.doc?contractId=3141832"
            endIcon={<DownloadIcon />}
            sx={{ marginTop: '10px' }}
          >
            Copyright Form
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" color="error">
            Manuscript Preparation Guidelines
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="doc/guideline.pdf?contractId=3141832"
            target="_blank"
            endIcon={<VisibilityIcon />}
            sx={{ marginTop: '10px' }}
          >
            View Guidelines
          </Button>
        </Grid>
      </Grid>
    </Box>
    </Grid>
  </Grid>
</>
    
  );
};

export default ManuscriptPreparation;
