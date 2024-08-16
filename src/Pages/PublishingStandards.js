import React from 'react';
import {
  Typography,
  Divider,
  Grid,
  Box,
} from '@mui/material';
import SideBar from '../Components/SideBar';
// import Banner from '../Components/Banner';

const PublishingStandards = () => {
  return (
    <>
    {/* <Banner/> */}

<Grid container justifyContent={"center"} marginX={"auto"}   sx={{overflow:"auto", gap:"10px"}} marginTop={"10px"}  height="100vh">
      {/* Left Side List */}
      <Grid item xs={12} sm={2} marginBottom={"auto"}  bgcolor="#00C1A1" color={'white'} borderRadius={"10px"} p={2}>
        <SideBar/>
      </Grid>

      {/* Right Side Content */}
      <Grid item xs={12} sm={8} overflow={"hidde"} flexGrow={1} p={2} borderRadius={"10px"} bgcolor="#f5f5f5" marginx={"auto"} >
      <Box>
      <Box mb={2}>
        <Typography variant="h6" color="info.main">
          Publishing Standards:
        </Typography>
        <Divider />
      </Box>

      <Box mb={2}>
        <Typography>
          Ethical standards for publication exist to ensure high-quality
          scientific publications, public trust in scientific findings, and that
          people receive credit for their ideas.
        </Typography>
      </Box>

      <Box mb={2}>
        <Typography variant="h6" color="info.main">
          Plagiarism:
        </Typography>
        <Divider />
        <Typography align="justify" mt={2}>
          All journals published by Asian Publication Corporation are committed
          to publishing only original material, i.e., material that has neither
          been published elsewhere, nor is under review elsewhere. Asian
          Publication Corporation uses plagiarism detection software to check
          plagiarism in submitted manuscripts. Manuscripts that are found to
          have been plagiarized from a manuscript by other authors, whether
          published or unpublished will be rejected from publication in any of
          the Asian Publication Corporation Journals.
        </Typography>
      </Box>

      <Box mb={2}>
        <Typography variant="h6" color="info.main">
          Duplicate Submission:
        </Typography>
        <Divider />
        <Typography mt={2}>
          Manuscripts that are found to have been published elsewhere, or to be
          under review elsewhere, will incur duplicate submission. If authors
          have used their own previously published work, or work that is
          currently under review, as the basis for a submitted manuscript, they
          are required to cite the previous work and indicate how their
          submitted manuscript offers novel contributions beyond those of the
          previous work.
        </Typography>
      </Box>

      <Box mb={2}>
        <Typography variant="h6" color="info.main">
          Citation Manipulation:
        </Typography>
        <Divider />
        <Typography mt={2}>
          Submitted manuscripts that are found to include citations whose
          primary purpose is to increase the number of citations to a given
          author’s work, or to articles published in a particular journal will
          be rejected from publication in any of the Asian Publication
          Corporation Journals.
        </Typography>
      </Box>

      <Box mb={2}>
        <Typography variant="h6" color="info.main">
          Data Fabrication and Falsification:
        </Typography>
        <Divider />
        <Typography mt={2}>
          Submitted manuscripts that are found to have either fabricated or
          falsified experimental results, including the manipulation of images
          will be rejected from publication in any of the Asian Publication
          Corporation Journals.
        </Typography>
      </Box>
    </Box>
      </Grid>
    </Grid>
    
   
    </>
  );
};

export default PublishingStandards;
