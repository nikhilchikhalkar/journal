import React from 'react'
import { Container, Typography, AccordionSummary, AccordionDetails, Link, Grid, Box } from '@mui/material';
// import Banner from '../Components/Banner';



const HowToSubmit = () => {

    const journals = [
        { name: 'JIT Journal of Computer Engineering (JIT-JCE)', link: 'http://JITjournals.org/submit-manuscript.php?id=JCE' },
        { name: 'JIT Journal of Electrical and Electronics Engineering (JIT-JEEE)', link: 'http://JITjournals.org/submit-manuscript.php?id=JEEE' },
        { name: 'JIT Journal of Mechanical and Civil Engineering (JIT-JMCE)', link: 'http://JITjournals.org/submit-manuscript.php?id=JMCE' },
        { name: 'JIT Journal of Electronics and Communication Engineering (JIT-JECE)', link: 'http://JITjournals.org/submit-manuscript.php?id=JECE' },
        { name: 'JIT journal of VLSI and Signal Processing (JIT-JVSP)', link: 'http://JITjournals.org/submit-manuscript.php?id=JVSP' },
        { name: 'JIT Journal of Environmental Science, Toxicology and Food Technology (JIT-JESTFT)', link: 'http://JITjournals.org/submit-manuscript.php?id=JESTFT' },
        { name: 'JIT Journal of Humanities and Social Science (JIT-JHSS)', link: 'http://JITjournals.org/submit-manuscript.php?id=JHSS' },
        { name: 'JIT Journal of Research & Method in Education (JIT-JRME)', link: 'http://JITjournals.org/submit-manuscript.php?id=JRME' },
        { name: 'JIT Journal of Nursing and Health Science (JIT-JNHS)', link: 'http://JITjournals.org/submit-manuscript.php?id=JNHS' },
        { name: 'JIT Journal of Applied Geology and Geophysics (JIT-JAGG)', link: 'http://JITjournals.org/submit-manuscript.php?id=JAGG' },
        { name: 'JIT Journal of Pharmacy and Biological Sciences (JIT-JPBS)', link: 'http://JITjournals.org/submit-manuscript.php?id=JPBS' },
        { name: 'JIT Journal of Business and Management (JIT-JBM)', link: 'http://JITjournals.org/submit-manuscript.php?id=JBM' },
        { name: 'JIT Journal of Dental and Medical Sciences (JIT-JDMS)', link: 'http://JITjournals.org/submit-manuscript.php?id=JDMS' },
        { name: 'JIT Journal of Agriculture and Veterinary Science (JIT-JAVS)', link: 'http://JITjournals.org/submit-manuscript.php?id=JAVS' },
        { name: 'JIT Journal of Applied Physics (JIT-JAP)', link: 'http://JITjournals.org/submit-manuscript.php?id=JAP' },
        { name: 'JIT Journal of Applied Chemistry (JIT-JAC)', link: 'http://JITjournals.org/submit-manuscript.php?id=JAC' },
        { name: 'JIT Journal of Mathematics (JIT-JM)', link: 'http://JITjournals.org/submit-manuscript.php?id=JM' },
        { name: 'JIT Journal of Economics and Finance (JIT-JEF)', link: 'http://JITjournals.org/submit-manuscript.php?id=JEF' },
        { name: 'JIT Journal of Sports and Physical Education (JIT-JSPE)', link: 'http://JITjournals.org/submit-manuscript.php?id=JSPE' },
        { name: 'JIT Journal of Polymer and Textile Engineering (JIT-JPTE)', link: 'http://JITjournals.org/submit-manuscript.php?id=JPTE' },
        { name: 'JIT Journal of BJITechnology and Biochemistry (JIT-JBB)', link: 'http://JITjournals.org/submit-manuscript.php?id=JBB' },
        { name: 'JIT Journal of Mobile Computing & Application (JIT-JMCA)', link: 'http://JITjournals.org/submit-manuscript.php?id=JMCA' },
        { name: 'JIT Journal of Engineering (JIT-JEN)', link: 'http://JITjournals.org/submit-manuscript.php?id=JEN' },
        { name: 'JIT Journal of Pharmacy (JIT-PHR)', link: 'http://JITjournals.org/submit-manuscript.php?id=PHR' }
      ];
  return (
    <>
    {/* <Banner title="How-To-Submit"/> */}
   <Container maxWidth="md" sx={{ padding: 4 }}>
      <Box>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">JIT Submit Paper</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            <strong>JIT Journals</strong> globally welcomes research scholars & scientists from different domains in its realm of Open Access Publication. Through the integration of scientific researchers & industrial practitioners, each Call for Papers by JIT Journals becomes another success story of its contribution towards the prosperity of scientific research, social infrastructure, & industrial advancement.
          </Typography>
          <Grid container spacing={2}>
            {journals.map((journal, index) => (
              <Grid item xs={12} key={index}>
                <Typography variant="body2">
                  <Link href={journal.link} sx={{textDecoration:'none'}} target="_blank" rel="noopener" color="primary">
                    {journal.name}
                  </Link>
                  <Typography component="span" sx={{ float: 'right' }} color="info.main">
                    <Link href={journal.link} sx={{textDecoration:'none'}}>
                    ( Click Here )
                    </Link>
                  </Typography>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Box>
    </Container>
   
    </>
  )
}

export default HowToSubmit