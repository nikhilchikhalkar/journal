import React from 'react';
import { Container, Typography, Grid, List, ListItem, ListItemText, Link } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <article className="post">
        <Typography variant="h4" gutterBottom>
          About IOSR
        </Typography>
        <div className="content-block">
          <Typography variant="h5" gutterBottom>
            Overview
          </Typography>
          <Typography variant="body1" paragraph>
            The International Organization of Scientific Research (IOSR) is an independent private organization. The IOSR provides support and services to education professionals and researchers around the world, especially those from developing countries.
          </Typography>
          <Typography variant="body1" paragraph>
            IOSR is an association of scientists, researchers, professors, directors, managers, and engineers from various fields, including engineering, management, pharmacy, applied science, and mathematics.
          </Typography>
          <Typography variant="body1" paragraph>
            IOSR helps researchers free of cost by providing research assistance and guidance with the help of its worldwide association members. For more details, visit:{' '}
            <Link href="http://www.iosr.org" target="_blank" rel="noopener">
              www.iosr.org
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
                      <Link href="IOSR-JEN.html" color="secondary">
                        IOSR Journal of Engineering (IOSR-JEN)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="IOSR-JCE.html" color="secondary">
                        IOSR Journal of Computer Engineering (IOSR-JCE)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-jeee.html" color="secondary">
                        IOSR Journal of Electrical and Electronics Engineering (IOSR-JEEE)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-jmce.html" color="secondary">
                        IOSR Journal of Mechanical and Civil Engineering (IOSR-JMCE)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-jece.html" color="secondary">
                        IOSR Journal of Electronics and Communication Engineering (IOSR-JECE)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-jvlsi.html" color="secondary">
                        IOSR Journal of VLSI and Signal Processing (IOSR-JVSP)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-jmca.html" color="secondary">
                        IOSR Journal on Mobile Computing & Application (IOSR-JMCA)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-jpte.html" color="secondary">
                        IOSR Journal of Polymer and Textile Engineering (IOSR-JPTE)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-jhss.html" color="primary">
                        IOSR Journal of Humanities and Social Science (IOSR-JHSS)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-jrme.html" color="primary">
                        IOSR Journal of Research & Method in Education (IOSR-JRME)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-jbm.html" color="primary">
                        IOSR Journal of Business and Management (IOSR-JBM)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-jef.html" color="primary">
                        IOSR Journal of Economics and Finance (IOSR-JEF)
                      </Link>
                    }
                  />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} sm={6}>
              <List>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="IOSR-PHR.html" color="success.main">
                        IOSR Journal of Pharmacy (IOSR-PHR)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-jpbs.html" color="success.main">
                        IOSR Journal of Pharmacy and Biological Science (IOSR-JPBS)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-jnhs.html" color="success.main">
                        IOSR Journal of Nursing and Health Science (IOSR-JNHS)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-jdms.html" color="success.main">
                        IOSR Journal of Dental and Medical Sciences (IOSR-JDMS)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-javs.html" color="success.main">
                        IOSR Journal of Agriculture and Veterinary Science (IOSR-JAVS)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-jspe.html" color="info.main">
                        IOSR Journal of Sports and Physical Education (IOSR-JSPE)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-jestft.html" color="info.main">
                        IOSR Journal of Environmental Science, Toxicology and Food Technology
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-jbb.html" color="info.main">
                        IOSR Journal of Biotechnology and Biochemistry (IOSR-JBB)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-jap.html" color="error.main">
                        IOSR Journal of Applied Physics (IOSR-JAP)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-jac.html" color="error.main">
                        IOSR Journal of Applied Chemistry (IOSR-JAC)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-jm.html" color="error.main">
                        IOSR Journal of Mathematics (IOSR-JM)
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Link href="iosr-jagg.html" color="error.main">
                        IOSR Journal of Applied Geology and Geophysics (IOSR-JAGG)
                      </Link>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </div>
      </article>
    </Container>
  );
};

export default About;
