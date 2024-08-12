import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, GitHub } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6, }}>
      <Container maxWidth="lg"  >
        <Grid container spacing={4}>
          {/* About Section */}
          {/* <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a leading research journal, dedicated to publishing the latest advancements in various fields. Our mission is to foster knowledge and innovation through quality publications.
            </Typography>
          </Grid> */}

          {/* Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" variant="body2" display="block" sx={{ mt: 1 }}>
              Important Dates
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" sx={{ mt: 1 }}>
              Why Choose IOT Journal
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" sx={{ mt: 1 }}>
              Copyright Policy
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" sx={{ mt: 1 }}>
              Contact
            </Link>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              For Authors
            </Typography>
            <Link href="#" color="inherit" variant="body2" display="block" sx={{ mt: 1 }}>
              How to Submit Your Paper
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" sx={{ mt: 1 }}>
              Manuscript Preparation Guidelines
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" sx={{ mt: 1 }}>
              Copy Right Form
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" sx={{ mt: 1 }}>
              FAQ
            </Link>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton href="https://facebook.com" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="https://linkedin.com" color="inherit">
                <LinkedIn />
              </IconButton>
              <IconButton href="https://github.com" color="inherit">
                <GitHub />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Research Journal. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
