import React from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <Container>
      <Grid
        container
        bgcolor="#f5f5f5"
        spacing={4}
        sx={{ py: 4, marginTop: "10px", borderRadius: "10px" }}
      >
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" color="primary" gutterBottom>
            Fill contact form for any enquiry
          </Typography>
          <form>
            <input
              type="hidden"
              name="_token"
              value="wRNJnQA7MD2SX3oNaOccGHNzh3Gh1lU34aPz9qtm"
            />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="full_name"
                  id="full_name"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  id="email"
                  type="email"
                  required
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ marginTop: "10px" }}>
                <TextField
                  fullWidth
                  label="Mobile"
                  name="mobile"
                  id="mobile"
                  type="number"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  id="message"
                  multiline
                  rows={3}
                  required
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Send Message
            </Button>
          </form>
        </Grid>

        {/* Address Information */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" color="primary" gutterBottom>
            Our Address
          </Typography>
          <Box>
            {/* <Box display="flex" alignItems="center" mb={2}>
              <LocationOnIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="body1">
                <strong>HBIC Solutions</strong>
                <br />
                H. No.: 1-8-32/39 , Bapu Bagh, Ram Gopalpet Police Station,
                Secunderabad - 500 003, Telangana, India.
              </Typography>
            </Box> */}
            {/* <Box display="flex" alignItems="center" mb={2}>
              <PhoneIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="body1">
                <strong>Phone:</strong> +91-40-2939 7263
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <PhoneIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="body1">
                <strong>Mobile:</strong> +91-80191 92444
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <LocationOnIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="body1">
                <strong>Branch Office</strong>
                <br />
                117/H2/354, House Number: 139, Adjacent to Dwivedi Hospital, Pandu Nagar, Kakadeo, Kanpur - 208 025, Uttar Pradesh, India.
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <PhoneIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="body1">
                <strong>Phone:</strong> +91-512-3169459
              </Typography>
            </Box> */}
            <Box display="flex" alignItems="center" mb={2}>
              <LocationOnIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="body1">
                <strong>Correspondence Address:</strong>
                <br />
                27 Long Bridge Road, Barking, Essex, IG11 8TN.
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <EmailIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="body1">
                <strong>Email:</strong>{" "}
                <a href="mailto:editor@jitjournals.com">
                  editor@jitjournals.com
                </a>
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <PhoneIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="body1">
                <strong>Mobile:</strong> +44-7123456789
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
