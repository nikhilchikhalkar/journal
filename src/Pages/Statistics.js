import React from 'react'
import {  AccordionDetails, Typography, Box, Link, Grid } from '@mui/material';
import SideBar from '../Components/SideBar';


const Statistics = () => {
  return (
    <>


<Grid container justifyContent={"center"} marginX={"auto"}   sx={{overflow:"auto", gap:"10px"}} marginTop={"10px"}  height="100vh">
      {/* Left Side List */}
      <Grid item xs={12} sm={2} marginBottom={"auto"}  bgcolor="#00C1A1" color={'white'} borderRadius={"10px"} p={2}>
        <SideBar/>
      </Grid>

      {/* Right Side Content */}
      <Grid item xs={12} sm={8} overflow={"hidde"} flexGrow={1} p={2} borderRadius={"10px"} bgcolor="#f5f5f5" marginx={"auto"} >
      <Box sx={{ padding: 3 }}>
      <Box>
        <Box sx={{padding:4}}
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" component="div">
            Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journals Statistics
          </Typography>
        </Box>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            <strong>Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journals</strong> globally welcomes research scholars & scientists from different domains in its realm of Open Access Publication. Through the integration of scientific researchers & industrial practitioners, each Call for Papers by Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journals becomes another success story of its contribution towards the prosperity of scientific research, social infrastructure & industrial advancement.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Link href="jce-stat.html" variant="body1" underline="hover">Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Computer Engineering (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JCE)</Link>
            <Link href="jeee-stat.html" variant="body1" underline="hover">Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Electrical and Electronics Engineering (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JEEE)</Link>
            <Link href="jmce-stat.html" variant="body1" underline="hover">Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Mechanical and Civil Engineering (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JMCE)</Link>
            <Link href="jece-stat.html" variant="body1" underline="hover">Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Electronics and Communication Engineering (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JECE)</Link>
            <Link href="jvsp-stat.html" variant="body1" underline="hover">Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of VLSI and Signal Processing (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JVSP)</Link>
            <Link href="jestft-stat.html" variant="body1" underline="hover">Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Environmental Science, Toxicology and Food Technology (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JESTFT)</Link>
            <Link href="jhss-stat.html" variant="body1" underline="hover">Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Humanities and Social Science (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JHSS)</Link>
            <Link href="jrme-stat.html" variant="body1" underline="hover">Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Research & Method in Education (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JRME)</Link>
            <Link href="jnhs-stat.html" variant="body1" underline="hover">Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Nursing and Health Science (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JNHS)</Link>
            <Link href="jagg-stat.html" variant="body1" underline="hover">Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Applied Geology and Geophysics (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JAGG)</Link>
            <Link href="jpbs-stat.html" variant="body1" underline="hover">Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Pharmacy and Biological Sciences (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JPBS)</Link>
            <Link href="jbm-stat.html" variant="body1" underline="hover">Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Business and Management (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JBM)</Link>
            <Link href="jdms-stat.html" variant="body1" underline="hover">Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Dental and Medical Sciences (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JDMS)</Link>
            <Link href="javs-stat.html" variant="body1" underline="hover">Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Agriculture and Veterinary Science (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JAVS)</Link>
            <Link href="jap-stat.html" variant="body1" underline="hover">Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Applied Physics (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JAP)</Link>
            <Link href="jac-stat.html" variant="body1" underline="hover">Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Applied Chemistry (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JAC)</Link>
            <Link href="jm-stat.html" variant="body1" underline="hover">Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Mathematics (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JM)</Link>
            <Link href="jef-stat.html" variant="body1" underline="hover">Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Economics and Finance (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JEF)</Link>
            <Link href="jspe-stat.html" variant="body1" underline="hover">Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Sports and Physical Education (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JSPE)</Link>
            <Link href="jpte-stat.html" variant="body1" underline="hover">Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Polymer and Textile Engineering (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JPTE)</Link>
          </Box>
        </AccordionDetails>
      </Box>
    </Box>
      </Grid>
    </Grid>


    
    </>
  )
}

export default Statistics