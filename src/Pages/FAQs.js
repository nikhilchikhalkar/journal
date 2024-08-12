import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Box,
  Divider,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SideBar from '../Components/SideBar';
import { Link } from 'react-router-dom';

const FAQs = () => {
  return (

    <Grid container justifyContent={"center"} marginX={"auto"}   sx={{overflow:"auto", gap:"10px"}} marginTop={"10px"}  height="100vh">
    {/* Left Side List */}
    <Grid item xs={12} sm={2} marginBottom={"auto"}  bgcolor="#00C1A1" color={'white'} borderRadius={"10px"} p={2}>
      <SideBar/>
    </Grid>

    {/* Right Side Content */}
    <Grid item xs={12} sm={8} overflow={"hidde"} flexGrow={1} p={2} borderRadius={"10px"} bgcolor="#f5f5f5" marginx={"auto"} >
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <Typography variant="h6" gutterBottom>
        FAQs About IOSR Journals
      </Typography>
      <Divider sx={{ marginBottom: '20px' }} />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography>IOSR Journals are International Journal or not?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="error">
                IOSR Journals are International Journals. You can check the editorial board and published papers. IOSR Journals are accepted globally.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography>What is the review type of IOSR Journals?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="error">
                IOSR Journals follow a blind peer review process for selecting only the best quality papers. It accepts only 10-15% quality papers.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
              <Typography>Whether IOSR Journals are indexed Journals or not?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="error">
                IOSR Journals are widely indexed. Published papers are indexed in top indexes like NASA ADS, CrossRef, ArXiv, Google Scholar, Cabell's Directory, EBSCO Host, Index Copernicus, ANED, Ulrich Web, and many more.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
              <Typography>IOSR Journals are online Journals or Print Journals?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="error">
                IOSR Journals publish papers both online and in hard copy (print version).
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
              <Typography>Whether we will get a hard copy of the certificate or not?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="error">
                IOSR Journals provide hard copies of certificates to all authors after the publication of the paper.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6a-content" id="panel6a-header">
              <Typography>When will we get the hard copy of the Journal and certificates?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="error">
                IOSR Journals dispatch hard copies of Journals and certificates within 7 days of online publication. After that, you can track your post using a tracking ID.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel7a-content" id="panel7a-header">
              <Typography>What is the additional feature with IOSR Journals?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="error">
                IOSR Journals provide DOI (Digital Object Identifier) to each article, making your paper acceptable globally.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel8a-content" id="panel8a-header">
              <Typography>What is the Impact Factor of IOSR Journals?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="error">
                All IOSR Journals have a high Impact Factor. You can check it through the following link: <a href="http://iosrjournals.org/impact-factor.html" target="_blank" rel="noopener noreferrer">Impact Factor</a>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel9a-content" id="panel9a-header">
              <Typography>How can we check Journal statistics?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="error">
                You can check all IOSR Journals statistics through the following link: <a href="http://www.iosrjournals.org/stat.html" target="_blank" rel="noopener noreferrer">Journal Statistics</a>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel10a-content" id="panel10a-header">
              <Typography>How can we check citation reports?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="error">
                Authors can check citation reports through the following link: <a href="http://www.iosrjournals.org/citation.html" target="_blank" rel="noopener noreferrer">Citation Reports</a>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>

      <Box textAlign="center" sx={{ marginTop: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          href="doc/FAQs.pdf"
          target="_blank"
          sx={{ padding: '10px 20px' }}
        >
            <Link target='_Blank' to={'https://www.iosrjournals.org/doc/FAQs.pdf'}style={{color:"white", textDecoration:"none"}} >
          FAQs About Paper Publication
            </Link>
        </Button>
      </Box>
    </Box>
    </Grid>
  </Grid>


  );
};

export default FAQs;
