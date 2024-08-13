import React from 'react';
import { Container, Typography, Grid, List, ListItem, ListItemText, Link } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <article className="post">
        <Typography variant="h4" gutterBottom>
          About  (JIT-AI)
        </Typography>
        <div className="content-block">
          {/* <Typography variant="h5" gutterBottom>
            Overview
          </Typography> */}
          <Typography variant="body1" paragraph>
            The International Organization of Scientific Research (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)) is an independent private organization. The Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) provides support and services to education professionals and researchers around the world, especially those from developing countries.
          </Typography>
          <Typography variant="body1" paragraph>
            Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) is an association of scientists, researchers, professors, directors, managers, and engineers from various fields, including engineering, management, pharmacy, applied science, and mathematics.
          </Typography>
          <Typography variant="body1" paragraph>
            Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) helps researchers free of cost by providing research assistance and guidance with the help of its worldwide association members. For more details, visit:{' '}
            <Link sx={{textDecoration:'none'}} target="_blank" rel="noopener">
              www.Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI).org
            </Link>
          </Typography>
        </div>

        <div className="content-block">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" gutterBottom>
                List of Journals
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link sx={{textDecoration:'none'}} color="secondary">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Engineering (JIT-AI-JEN)
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link sx={{textDecoration:'none'}} color="secondary">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Computer Engineering (JIT-AI)-JCE
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link sx={{textDecoration:'none'}} color="secondary">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Electrical and Electronics Engineering  (JIT-AI)-JEEE
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link sx={{textDecoration:'none'}} color="secondary">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Mechanical and Civil Engineering (JIT-AI)-JMCE
                      </Link>
                    }
                  />
                </ListItem>
{/* 
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-jece.html" color="secondary">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Electronics and Communication Engineering (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JECE)
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-jvlsi.html" color="secondary">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of VLSI and Signal Processing (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JVSP)
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-jmca.html" color="secondary">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal on Mobile Computing & Application (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JMCA)
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-jpte.html" color="secondary">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Polymer and Textile Engineering (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JPTE)
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-jhss.html" color="primary">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Humanities and Social Science (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JHSS)
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-jrme.html" color="primary">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Research & Method in Education (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JRME)
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-jbm.html" color="primary">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Business and Management (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JBM)
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-jef.html" color="primary">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Economics and Finance (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JEF)
                      </Link>
                    }
                  />
                </ListItem> */}

              </List>
            </Grid>

            <Grid item xs={12} sm={6}>
              <List>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link   sx={{textDecoration:'none'}} color="success.main" >
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Pharmacy  (JIT-AI)-PHR
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link sx={{textDecoration:'none'}} color="success.main">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Pharmacy and Biological Science (JIT-AI)-JPBS
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link sx={{textDecoration:'none'}} color="success.main">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Nursing and Health Science  (JIT-AI)-JNHS
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link sx={{textDecoration:'none'}} color="success.main">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Dental and Medical Sciences  (JIT-AI)-JDMS
                      </Link>
                    }
                  />
                </ListItem>
{/* 
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-javs.html" color="success.main">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Agriculture and Veterinary Science (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JAVS)
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-jspe.html" color="info.main">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Sports and Physical Education (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JSPE)
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-jestft.html" color="info.main">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Environmental Science, Toxicology and Food Technology
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-jbb.html" color="info.main">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Biotechnology and Biochemistry (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JBB)
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-jap.html" color="error.main">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Applied Physics (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JAP)
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-jac.html" color="error.main">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Applied Chemistry (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JAC)
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-jm.html" color="error.main">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Mathematics (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JM)
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-jagg.html" color="error.main">
                        Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journal of Applied Geology and Geophysics (Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)-JAGG)
                      </Link>
                    }
                  />
                </ListItem> */}
                
              </List>
            </Grid>
          </Grid>
        </div>
      </article>
    </Container>
  );
};

export default About;
