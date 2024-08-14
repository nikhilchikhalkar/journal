import React from "react";
import {
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Link,
  ListItemIcon,
} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';


const About = () => {
  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <article className="post">
        <Typography variant="h4" gutterBottom>
          About  JIT
        </Typography>
        <div className="content-block">
          {/* <Typography variant="h5" gutterBottom>
            Overview
          </Typography> */}
          <Typography variant="body1" paragraph>
            Journal of Innovative Technologies (JIT) is an international journal
            that allows the scientific fraternity to involve themselves to
            carryout their research related to any of the engineering field or
            services of any sector to be operated using different AI
            technologies. This platform allows them to explore AI technologies
            extensively and make it more suitable for real-time applications.
          </Typography>
          <Typography variant="body1" paragraph>
            JIT-AI is included with wide range of scientists, researchers,
            professors, and engineers from various fields, including
            engineering, management, pharmacy, applied science, and mathematics.
          </Typography>
          <Typography variant="body1" paragraph>
            We allow the researchers to express their real-time work to be
            presented without any bias and glitches that generally observed in
            most of the scientific research activities. This allows exploring
            new ideas from different researchers from across the globe.
          </Typography>
        </div>

        <div className="content-block">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                List of Journals
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <List>
                <ListItem>

                <ListItemIcon sx={{ color:'black', marginBottom:'25px'}}>
                <CircleIcon fontSize="10px" />
                </ListItemIcon>

                  <ListItemText
                    primary={
                      <Link
                        sx={{ textDecoration: "none", color: "black" }}
                        color="secondary"
                      >
                        Journal of Innovative Tehcnologies based on Artificial
                        Intelligence (JIT-AI) Journal of Engineering
                        (JIT-AI-JEN)
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>

                <ListItemIcon sx={{ color:'black'}}>
                <CircleIcon fontSize="10px" />
                </ListItemIcon>

                  <ListItemText
                    primary={
                      <Link
                        sx={{ textDecoration: "none", color: "black" }}
                        color="secondary"
                      >
                        Journal of Innovative Tehcnologies based on Electrical &
                        Electronics (JIT-EE)
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>

                <ListItemIcon sx={{ color:'black'}}>
                <CircleIcon fontSize="10px" />
                </ListItemIcon>

                  <ListItemText
                    primary={
                      <Link
                        sx={{ textDecoration: "none", color: "black" }}
                        // color="secondary"
                      >
                        Journal of Innovative Tehcnologies based on Electronics
                        and Communications (JIT-EC)
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>

                <ListItemIcon sx={{ color:'black'}}>
                <CircleIcon fontSize="10px" />
                </ListItemIcon>

                  <ListItemText
                    primary={
                      <Link
                        sx={{ textDecoration: "none", color: "black" }}
                        //  color="secondary"
                      >
                        Journal of Innovative Tehcnologies based on Computer
                        Sciences (JIT-CS)
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
                <ListItemIcon sx={{ color:'black'}}>
                <CircleIcon fontSize="10px" />
                </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link
                        sx={{ textDecoration: "none", color: "black" }}
                        // color="success.main"
                      >
                        Journal of Innovative Tehcnologies based on
                        Bio-Technology  (JIT-BT)
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem sx={{marginTop:'22px'}}>

                <ListItemIcon sx={{ color:'black'}}>
                <CircleIcon fontSize="10px" />
                </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link
                        sx={{ textDecoration: "none", color: "black" }}
                        //  color="success.main"
                      >
                        Journal of Innovative Tehcnologies based on Mechnical
                        Engineering (JIT-ME)
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>

                <ListItemIcon sx={{ color:'black'}}>
                <CircleIcon fontSize="10px" />
                </ListItemIcon>

                  <ListItemText
                    primary={
                      <Link
                        sx={{ textDecoration: "none", color: "black" }}
                        // color="success.main"
                      >
                        Journal of Innovative Tehcnologies based on Civil
                        Engineering (JIT-CE)
                      </Link>
                    }
                  />
                </ListItem>

                <ListItem>

                <ListItemIcon sx={{ color:'black'}}>
                <CircleIcon fontSize="10px" />
                </ListItemIcon>

                  <ListItemText
                    primary={
                      <Link
                        sx={{ textDecoration: "none", color: "black" }}
                        //  color="success.main"
                      >
                        Journal of Innovative Tehcnologies based on Internet of
                        Things (JIT-IoT)
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
