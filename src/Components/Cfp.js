import React from 'react'
import PublicationProcess from './PublicationProcess'
import { Box, Grid, Typography } from '@mui/material'
import SideBar from './SideBar'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { red, orange, green, lightBlue } from '@mui/material/colors';

const Cfp = () => {
  return (
    <div>
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
    <Box sx={{ textAlign: 'justify', my: 2 }}>
      <Typography variant="body1" component="p" sx={{ fontWeight: 'bold' }}>
        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journals
      </Typography>
      <Typography variant="body1" paragraph>
        Globally welcomes research scholars &amp; scientists from different domains in its realm of Open Access Publication. Through the integration of scientific researchers &amp; industrial practitioners, each Call for Papers by Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journals becomes another success story of its contribution towards the prosperity of scientific research, social infrastructure &amp; industrial advancement.
      </Typography>
    </Box>
    <Box sx={{ width: '100%', my: 2 }}>
      <Typography variant="h5" color="info.main" gutterBottom>
        Important Dates for Upcoming Issues:
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="important dates">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                <Typography variant="h6">Important Dates</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ backgroundColor: red[50] }}>
              <TableCell align="center"><strong>Submission last date</strong></TableCell>
              <TableCell align="center"><strong>15 August 2024</strong></TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: orange[50] }}>
              <TableCell align="center"><strong>Acknowledgement of submission</strong></TableCell>
              <TableCell align="center"><strong>Within 24 hrs</strong></TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: green[50] }}>
              <TableCell align="center"><strong>Acceptance notification</strong></TableCell>
              <TableCell align="center"><strong>After 10 Days of submission (Blind peer review process)</strong></TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: lightBlue[50] }}>
              <TableCell align="center"><strong>Publication Date</strong></TableCell>
              <TableCell align="center"><strong>25 August 2024</strong></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
        <Typography variant="body1" paragraph>
          <PublicationProcess/>
        </Typography>
      </Grid>
    </Grid>
        
      
    </div>
  )
}

export default Cfp