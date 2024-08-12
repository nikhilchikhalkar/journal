import React from 'react'
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Link, Grid, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FeaturedSlider from '../Components/FeaturedSlider';
import EditorsSlider from '../Components/EditorsSlider';


const HowToSubmit = () => {

    const journals = [
        { name: 'IOSR Journal of Computer Engineering (IOSR-JCE)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JCE' },
        { name: 'IOSR Journal of Electrical and Electronics Engineering (IOSR-JEEE)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JEEE' },
        { name: 'IOSR Journal of Mechanical and Civil Engineering (IOSR-JMCE)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JMCE' },
        { name: 'IOSR Journal of Electronics and Communication Engineering (IOSR-JECE)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JECE' },
        { name: 'IOSR journal of VLSI and Signal Processing (IOSR-JVSP)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JVSP' },
        { name: 'IOSR Journal of Environmental Science, Toxicology and Food Technology (IOSR-JESTFT)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JESTFT' },
        { name: 'IOSR Journal of Humanities and Social Science (IOSR-JHSS)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JHSS' },
        { name: 'IOSR Journal of Research & Method in Education (IOSR-JRME)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JRME' },
        { name: 'IOSR Journal of Nursing and Health Science (IOSR-JNHS)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JNHS' },
        { name: 'IOSR Journal of Applied Geology and Geophysics (IOSR-JAGG)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JAGG' },
        { name: 'IOSR Journal of Pharmacy and Biological Sciences (IOSR-JPBS)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JPBS' },
        { name: 'IOSR Journal of Business and Management (IOSR-JBM)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JBM' },
        { name: 'IOSR Journal of Dental and Medical Sciences (IOSR-JDMS)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JDMS' },
        { name: 'IOSR Journal of Agriculture and Veterinary Science (IOSR-JAVS)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JAVS' },
        { name: 'IOSR Journal of Applied Physics (IOSR-JAP)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JAP' },
        { name: 'IOSR Journal of Applied Chemistry (IOSR-JAC)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JAC' },
        { name: 'IOSR Journal of Mathematics (IOSR-JM)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JM' },
        { name: 'IOSR Journal of Economics and Finance (IOSR-JEF)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JEF' },
        { name: 'IOSR Journal of Sports and Physical Education (IOSR-JSPE)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JSPE' },
        { name: 'IOSR Journal of Polymer and Textile Engineering (IOSR-JPTE)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JPTE' },
        { name: 'IOSR Journal of Biotechnology and Biochemistry (IOSR-JBB)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JBB' },
        { name: 'IOSR Journal of Mobile Computing & Application (IOSR-JMCA)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JMCA' },
        { name: 'IOSR Journal of Engineering (IOSR-JEN)', link: 'http://iosrjournals.org/submit-manuscript.php?id=JEN' },
        { name: 'IOSR Journal of Pharmacy (IOSR-PHR)', link: 'http://iosrjournals.org/submit-manuscript.php?id=PHR' }
      ];
  return (
    <>
   <Container maxWidth="md" sx={{ padding: 4 }}>
      <Box>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">IOSR Submit Paper</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            <strong>IOSR Journals</strong> globally welcomes research scholars & scientists from different domains in its realm of Open Access Publication. Through the integration of scientific researchers & industrial practitioners, each Call for Papers by IOSR Journals becomes another success story of its contribution towards the prosperity of scientific research, social infrastructure, & industrial advancement.
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