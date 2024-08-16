import React from 'react'
import {  Box, Grid,  Typography } from '@mui/material';
import {  CardContent, Link } from '@mui/material';
import SideBar from '../Components/SideBar';
// import Banner from '../Components/Banner';



function WhyChoose() {
  return (
    <>
    {/* <Banner title="Why-Choose" /> */}
    <Grid container justifyContent={"center"} marginX={"auto"}   sx={{overflow:"auto", gap:"10px"}} marginTop={"10px"}  height="100vh">
      {/* Left Side List */}
      <Grid item xs={12} sm={2} marginBottom={"auto"}  bgcolor="#00C1A1" color={'white'} borderRadius={"10px"} p={2}>
        <SideBar/>
      </Grid>

      {/* Right Side Content */}
      <Grid item xs={12} sm={8} overflow={"hidde"} flexGrow={1} p={2} borderRadius={"10px"} bgcolor="#f5f5f5" marginx={"auto"} >
      <Box
      id="headingOne"
      role="tab"
      sx={{
        backgroundColor: '#f5f5f5', // Set a background color similar to your panel heading style
        padding: '16px',
        borderBottom: '2px solid #ddd',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h6"
        component="h6"
        sx={{
          fontSize: '1.25rem', // Adjust font size as needed
          fontWeight: 'bold', // Make the text bold
          color: '#333', // Adjust text color as needed
        }}
      >
        Call for Paper
      </Typography>
    </Box>
        <Box>
        <Box sx={{
        backgroundColor: '#f5f5f5',}}>
      <CardContent>
        <Typography variant="body1" paragraph>
          <strong>1. Top Indexing:&nbsp;</strong>
           (JIT) Journals index all papers in world top indexing like: NASA ads, CrossRef, ANED (American National Engineering Database) etc, CAS (Chemical Abstract Service), Google Scholar etc.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>2. DOI:&nbsp;</strong>
           (JIT) Journals allot DOI (Digital Object Identifier) to each published article.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>3. Blind Peer Review Process:&nbsp;</strong>
          The main aim of blind peer review process is to maintain the quality of published articles under  (JIT) Journals.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>4. Rapid Publication Process:&nbsp;</strong>
          The publication process generally takes only 20-25 days for an article publication.  (JIT) Journals dispatch hard copy of Journal within 7 days of online publication by speed post.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>5. Subject Specific Journals:</strong>&nbsp;
          There are different subject specific Journals of different branches of globally accepted technologies under the umbrella of  (JIT) Journals.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>6. Online and Print publication both:&nbsp;</strong>
           (JIT) Journals publish paper online and print version both.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>7. Certificates:</strong>&nbsp;
           (JIT) Journals provide hard copy of Certificates to individual author free of Cost.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>8. Quick Reply of any query:</strong>&nbsp;
          Anybody can get answers of their queries within 24 hours by mailing at{' '}
          <Link href="mailto:support@ (JIT-AI)mail.org" style={{ color: '#007bff' }}>
            support@ (JIT)mail.org
          </Link>
        </Typography>
      </CardContent>
    </Box>
        </Box>
      </Grid>
    </Grid>
    </>
  )
}

export default WhyChoose