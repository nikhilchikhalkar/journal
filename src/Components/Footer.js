import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, GitHub } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6, }}>
      <Container maxWidth="lg"  >
        <Grid container spacing={4}>
          

          {/* Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/cfp" color="inherit" variant="body2" display="block" sx={{ mt: 1, textDecoration:'none' }}>
              Important Dates
            </Link>
            <Link href="/why-choose" color="inherit" variant="body2" display="block" sx={{ mt: 1, textDecoration:'none' }}>
              Why Choose JIT Journal
            </Link>
            <Link href="/copyright-policy" color="inherit" variant="body2" display="block" sx={{ mt: 1, textDecoration:'none' }}>
              Copyright Policy
            </Link>
            <Link href="/contact-us" color="inherit" variant="body2" display="block" sx={{ mt: 1, textDecoration:'none' }}>
              Contact
            </Link>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              For Authors
            </Typography>
            <Link href="/how-to-submit" color="inherit" variant="body2" display="block" sx={{ mt: 1, textDecoration:'none' }}>
              How to Submit Your Paper
            </Link>
            <Link href="/manuscript-preparation" color="inherit" variant="body2" display="block" sx={{ mt: 1, textDecoration:'none' }}>
              Manuscript Preparation Guidelines
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" sx={{ mt: 1, textDecoration:'none' }}>
              Copy Right Form
            </Link>
            <Link href="/faq" color="inherit" variant="body2" display="block" sx={{ mt: 1, textDecoration:'none' }}>
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
            &copy; {new Date().getFullYear()} JIT-AI Journal. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
