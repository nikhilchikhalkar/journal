import React from 'react'
import { Container, Typography, AccordionSummary, AccordionDetails, Link, Grid, Box } from '@mui/material';
import Banner from '../Components/Banner';



const HowToSubmit = () => {

    const journals = [
        { name: 'IOT Journal of Computer Engineering (IOT-JCE)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JCE' },
        { name: 'IOT Journal of Electrical and Electronics Engineering (IOT-JEEE)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JEEE' },
        { name: 'IOT Journal of Mechanical and Civil Engineering (IOT-JMCE)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JMCE' },
        { name: 'IOT Journal of Electronics and Communication Engineering (IOT-JECE)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JECE' },
        { name: 'IOT journal of VLSI and Signal Processing (IOT-JVSP)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JVSP' },
        { name: 'IOT Journal of Environmental Science, Toxicology and Food Technology (IOT-JESTFT)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JESTFT' },
        { name: 'IOT Journal of Humanities and Social Science (IOT-JHSS)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JHSS' },
        { name: 'IOT Journal of Research & Method in Education (IOT-JRME)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JRME' },
        { name: 'IOT Journal of Nursing and Health Science (IOT-JNHS)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JNHS' },
        { name: 'IOT Journal of Applied Geology and Geophysics (IOT-JAGG)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JAGG' },
        { name: 'IOT Journal of Pharmacy and Biological Sciences (IOT-JPBS)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JPBS' },
        { name: 'IOT Journal of Business and Management (IOT-JBM)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JBM' },
        { name: 'IOT Journal of Dental and Medical Sciences (IOT-JDMS)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JDMS' },
        { name: 'IOT Journal of Agriculture and Veterinary Science (IOT-JAVS)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JAVS' },
        { name: 'IOT Journal of Applied Physics (IOT-JAP)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JAP' },
        { name: 'IOT Journal of Applied Chemistry (IOT-JAC)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JAC' },
        { name: 'IOT Journal of Mathematics (IOT-JM)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JM' },
        { name: 'IOT Journal of Economics and Finance (IOT-JEF)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JEF' },
        { name: 'IOT Journal of Sports and Physical Education (IOT-JSPE)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JSPE' },
        { name: 'IOT Journal of Polymer and Textile Engineering (IOT-JPTE)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JPTE' },
        { name: 'IOT Journal of Biotechnology and Biochemistry (IOT-JBB)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JBB' },
        { name: 'IOT Journal of Mobile Computing & Application (IOT-JMCA)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JMCA' },
        { name: 'IOT Journal of Engineering (IOT-JEN)', link: 'http://IOTjournals.org/submit-manuscript.php?id=JEN' },
        { name: 'IOT Journal of Pharmacy (IOT-PHR)', link: 'http://IOTjournals.org/submit-manuscript.php?id=PHR' }
      ];
  return (
    <>
    <Banner title="How-To-Submit"/>
   <Container maxWidth="md" sx={{ padding: 4 }}>
      <Box>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">IOT Submit Paper</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            <strong>IOT Journals</strong> globally welcomes research scholars & scientists from different domains in its realm of Open Access Publication. Through the integration of scientific researchers & industrial practitioners, each Call for Papers by IOT Journals becomes another success story of its contribution towards the prosperity of scientific research, social infrastructure, & industrial advancement.
          </Typography>
          <Grid container spacing={2}>
            {journals.map((journal, index) => (
              <Grid item xs={12} key={index}>
                <Typography variant="body2">
                  <Link href={journal.link} target="_blank" rel="noopener" color="primary">
                    {journal.name}
                  </Link>
                  <Typography component="span" sx={{ float: 'right' }} color="info.main">
                    ( Click Here )
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