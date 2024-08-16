import React, { useState } from "react";
import {
  Container,
  TextField,
  MenuItem,
  Typography,
  Button,
  Grid,
  InputAdornment,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
// import Banner from "../Components/Banner";

const Registration = () => {
  // State to hold all the form data and email validation
  const [formData, setFormData] = useState({
    initials: "",
    firstName: "",
    middleName: "",
    surname: "",
    email: "",
    mobileNumber: "",
    countryCode: "+1", // Default country code
    userId: "",
    password: "",
    schoolOrUniversity: "",
    // industryName: '',
    areaOfResearch: "",
    areaOfInterests: "",
    registerAs: "",
    preferences: "",
    bioData: "",
    otp: "",
  });
  const [otpVisible, setOtpVisible] = useState(false);

  const [termsAccepted, setTermsAccepted] = useState(false);

  // Handle form data change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  // Handle email validation button click
  const handleValidateEmail = () => {
    // Logic to send OTP to email
    console.log("Sending OTP to:", formData.email);
    setOtpVisible(true); // Show OTP field after validation
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // Add submission logic (e.g., send to API)
  };

  return (
    <>
   {/* <Banner/> */}
    <Container maxWidth="md">
      <Typography
        variant="h4"
        sx={{ display: "flex", justifyContent: "center", paddingTop:'20px' }}
        gutterBottom
      >
        Registration Page
      </Typography>

      {/* Basic Information Section */}
      <Typography variant="h6" fontWeight="bold">
        Basic Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3} sm={2}>
          <TextField
            select
            label="Initials"
            name="initials"
            value={formData.initials}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            <MenuItem value="Mr.">Mr.</MenuItem>
            <MenuItem value="Ms.">Ms.</MenuItem>
            <MenuItem value="Dr.">Dr.</MenuItem>
            <MenuItem value="Dr.">Prof.</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={9} sm={5}>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            label="Middle Name"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            label="Surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={7} container alignItems="center" spacing={1}>
          <Grid item xs={9}>
            <TextField
              label="Email ID"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleValidateEmail}
              sx={{ marginTop: 2 }}
            >
              Validate
            </Button>
          </Grid>
        </Grid>
        {otpVisible && (
          <Grid item xs={12} sm={12}>
            <TextField
              label="Enter OTP"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
        )}
        
        <Grid item xs={3} sm={2}>
          <TextField
            select
            label="Country Code"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            <MenuItem value="+1">+1 (USA)</MenuItem>
            <MenuItem value="+91">+91 (India)</MenuItem>
            <MenuItem value="+44">+44 (UK)</MenuItem>
            <MenuItem value="+33">+33 (France)</MenuItem>
            <MenuItem value="+49">+49 (Germany)</MenuItem>
            <MenuItem value="+61">+61 (Australia)</MenuItem>
            <MenuItem value="+81">+81 (Japan)</MenuItem>
            <MenuItem value="+55">+55 (Brazil)</MenuItem>
            <MenuItem value="+86">+86 (China)</MenuItem>
            <MenuItem value="+27">+27 (South Africa)</MenuItem>
            <MenuItem value="+7">+7 (Russia)</MenuItem>
            <MenuItem value="+39">+39 (Italy)</MenuItem>
            <MenuItem value="+34">+34 (Spain)</MenuItem>
            <MenuItem value="+42">+42 (Czech Republic)</MenuItem>
            <MenuItem value="+60">+60 (Malaysia)</MenuItem>
            <MenuItem value="+52">+52 (Mexico)</MenuItem>
            <MenuItem value="+62">+62 (Indonesia)</MenuItem>
            <MenuItem value="+98">+98 (Iran)</MenuItem>
            <MenuItem value="+90">+90 (Turkey)</MenuItem>
            <MenuItem value="+41">+41 (Switzerland)</MenuItem>
            <MenuItem value="+31">+31 (Netherlands)</MenuItem>
            <MenuItem value="+46">+46 (Sweden)</MenuItem>
            <MenuItem value="+32">+32 (Belgium)</MenuItem>
            <MenuItem value="+91">+91 (India)</MenuItem>
            <MenuItem value="+48">+48 (Poland)</MenuItem>
            <MenuItem value="+45">+45 (Denmark)</MenuItem>
            <MenuItem value="+56">+56 (Chile)</MenuItem>
            <MenuItem value="+54">+54 (Argentina)</MenuItem>
            <MenuItem value="+65">+65 (Singapore)</MenuItem>
            <MenuItem value="+21">+21 (Colombia)</MenuItem>
            <MenuItem value="+96">+96 (United Arab Emirates)</MenuItem>
            <MenuItem value="+30">+30 (Greece)</MenuItem>
            <MenuItem value="+354">+354 (Iceland)</MenuItem>
            <MenuItem value="+372">+372 (Estonia)</MenuItem>
            <MenuItem value="+370">+370 (Lithuania)</MenuItem>
            <MenuItem value="+371">+371 (Latvia)</MenuItem>
            <MenuItem value="+363">+363 (Hungary)</MenuItem>
            <MenuItem value="+381">+381 (Serbia)</MenuItem>
            <MenuItem value="+382">+382 (Montenegro)</MenuItem>
            <MenuItem value="+383">+383 (Kosovo)</MenuItem>
            <MenuItem value="+420">+420 (Czech Republic)</MenuItem>
            <MenuItem value="+41">+41 (Switzerland)</MenuItem>
            <MenuItem value="+233">+233 (Ghana)</MenuItem>
            <MenuItem value="+221">+221 (Senegal)</MenuItem>
            <MenuItem value="+234">+234 (Nigeria)</MenuItem>
            <MenuItem value="+20">+20 (Egypt)</MenuItem>
            <MenuItem value="+965">+965 (Kuwait)</MenuItem>
            <MenuItem value="+966">+966 (Saudi Arabia)</MenuItem>
            <MenuItem value="+971">+971 (United Arab Emirates)</MenuItem>
            <MenuItem value="+974">+974 (Qatar)</MenuItem>
            <MenuItem value="+968">+968 (Oman)</MenuItem>
            <MenuItem value="+7">+7 (Kazakhstan)</MenuItem>
            <MenuItem value="+977">+977 (Nepal)</MenuItem>
            <MenuItem value="+994">+994 (Azerbaijan)</MenuItem>
            <MenuItem value="+375">+375 (Belarus)</MenuItem>
            <MenuItem value="+370">+370 (Lithuania)</MenuItem>
            <MenuItem value="+371">+371 (Latvia)</MenuItem>
            <MenuItem value="+372">+372 (Estonia)</MenuItem>
            <MenuItem value="+976">+976 (Mongolia)</MenuItem>
            <MenuItem value="+856">+856 (Laos)</MenuItem>
            <MenuItem value="+855">+855 (Cambodia)</MenuItem>
            <MenuItem value="+84">+84 (Vietnam)</MenuItem>
            <MenuItem value="+60">+60 (Malaysia)</MenuItem>
            <MenuItem value="+67">+67 (Palau)</MenuItem>
            <MenuItem value="+680">+680 (Palau)</MenuItem>
            <MenuItem value="+686">+686 (Kiribati)</MenuItem>
            <MenuItem value="+687">+687 (New Caledonia)</MenuItem>
            <MenuItem value="+688">+688 (Tuvalu)</MenuItem>
            <MenuItem value="+689">+689 (French Polynesia)</MenuItem>
            <MenuItem value="+690">+690 (Tokelau)</MenuItem>
            <MenuItem value="+691">+691 (Micronesia)</MenuItem>
            <MenuItem value="+692">+692 (Marshall Islands)</MenuItem>
            <MenuItem value="+699">+699 (Niue)</MenuItem>
            <MenuItem value="+670">+670 (Timor-Leste)</MenuItem>
            <MenuItem value="+671">+671 (Guam)</MenuItem>
            <MenuItem value="+673">+673 (Brunei)</MenuItem>
            <MenuItem value="+674">+674 (Nauru)</MenuItem>
            <MenuItem value="+675">+675 (Papua New Guinea)</MenuItem>
            <MenuItem value="+676">+676 (Tonga)</MenuItem>
            <MenuItem value="+677">+677 (Solomon Islands)</MenuItem>
            <MenuItem value="+678">+678 (Vanuatu)</MenuItem>
            <MenuItem value="+679">+679 (Fiji)</MenuItem>
            <MenuItem value="+680">+680 (Palau)</MenuItem>
            <MenuItem value="+685">+685 (Samoa)</MenuItem>
            <MenuItem value="+686">+686 (Kiribati)</MenuItem>
            <MenuItem value="+688">+688 (Tuvalu)</MenuItem>
            <MenuItem value="+689">+689 (French Polynesia)</MenuItem>
            <MenuItem value="+690">+690 (Tokelau)</MenuItem>
            <MenuItem value="+691">+691 (Micronesia)</MenuItem>
            <MenuItem value="+692">+692 (Marshall Islands)</MenuItem>
            <MenuItem value="+695">+695 (Nauru)</MenuItem>
            <MenuItem value="+700">+700 (Svalbard and Jan Mayen)</MenuItem>
            <MenuItem value="+701">+701 (Jan Mayen)</MenuItem>
            <MenuItem value="+702">+702 (Norway)</MenuItem>
            <MenuItem value="+703">+703 (Greenland)</MenuItem>
            <MenuItem value="+704">+704 (Faroe Islands)</MenuItem>
            <MenuItem value="+705">+705 (Iceland)</MenuItem>
            <MenuItem value="+706">+706 (Sweden)</MenuItem>
            <MenuItem value="+707">+707 (Finland)</MenuItem>
            <MenuItem value="+708">+708 (Estonia)</MenuItem>
            <MenuItem value="+709">+709 (Latvia)</MenuItem>
            <MenuItem value="+710">+710 (Lithuania)</MenuItem>
            <MenuItem value="+711">+711 (Poland)</MenuItem>
            <MenuItem value="+712">+712 (Czech Republic)</MenuItem>
            <MenuItem value="+713">+713 (Slovakia)</MenuItem>
            <MenuItem value="+714">+714 (Hungary)</MenuItem>
            <MenuItem value="+715">+715 (Romania)</MenuItem>
            <MenuItem value="+716">+716 (Serbia)</MenuItem>
            <MenuItem value="+717">+717 (Croatia)</MenuItem>
            <MenuItem value="+718">+718 (Slovenia)</MenuItem>
            <MenuItem value="+719">+719 (Bosnia and Herzegovina)</MenuItem>
            <MenuItem value="+720">+720 (Montenegro)</MenuItem>
            <MenuItem value="+721">+721 (Kosovo)</MenuItem>
            <MenuItem value="+722">+722 (North Macedonia)</MenuItem>
            <MenuItem value="+723">+723 (Albania)</MenuItem>
            <MenuItem value="+724">+724 (Bulgaria)</MenuItem>
            <MenuItem value="+725">+725 (Greece)</MenuItem>
            <MenuItem value="+726">+726 (Turkey)</MenuItem>
            <MenuItem value="+727">+727 (Cyprus)</MenuItem>
            <MenuItem value="+728">+728 (Malta)</MenuItem>
            <MenuItem value="+729">+729 (Israel)</MenuItem>
            <MenuItem value="+730">+730 (Lebanon)</MenuItem>
            <MenuItem value="+731">+731 (Jordan)</MenuItem>
            <MenuItem value="+732">+732 (Syria)</MenuItem>
            <MenuItem value="+733">+733 (Iraq)</MenuItem>
            <MenuItem value="+734">+734 (Iran)</MenuItem>
            <MenuItem value="+735">+735 (Saudi Arabia)</MenuItem>
            <MenuItem value="+736">+736 (Kuwait)</MenuItem>
            <MenuItem value="+737">+737 (Bahrain)</MenuItem>
            <MenuItem value="+738">+738 (Qatar)</MenuItem>

            {/* Add more country codes as needed */}
          </TextField>
        </Grid>
        <Grid item xs={9} sm={10}>
          <TextField
          type="tel"
            label="Mobile Number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {formData.countryCode}
                </InputAdornment>
              ),
            }}
          />
        </Grid>
       


       


        <Grid item xs={12} sm={6}>
          <TextField
            label="User ID"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            fullWidth
            margin="normal"
            // Implement User ID existence check here
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            // Implement password validation here
          />
        </Grid>
      </Grid>

      {/* Association Section */}
      <Typography variant="h6" fontWeight="bold" mt={4}>
        Association
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="School/University/Industry Name"
            name="schoolOrUniversity"
            value={formData.schoolOrUniversity}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>

        {/* 
        <Grid item xs={12} sm={6}>
          <TextField
            label="Industry Name"
            name="industryName"
            value={formData.industryName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid> */}

        <Grid item xs={12} sm={6}>
          <TextField
            select
            label="Area of Research"
            name="areaOfResearch"
            value={formData.areaOfResearch}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            <MenuItem value="ECE">Computer Sciences (CS)</MenuItem>
            <MenuItem value="ECE">Electrical & Electronics (EE)</MenuItem>
            <MenuItem value="CE">Electronics and Communications (EC)</MenuItem>
            <MenuItem value="AI">Artificial Intelligence(AI)</MenuItem>
            <MenuItem value="ECE">Bio-Technology (BT)</MenuItem>
            <MenuItem value="ECE">Mechnical Engineering (ME)</MenuItem>
            <MenuItem value="ECE">Civil Engineering (CE)</MenuItem>
            <MenuItem value="ECE">Internet of Things (IoT)</MenuItem>
            {/* Add the other branches here */}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Area of Interests"
            name="areaOfInterests"
            value={formData.areaOfInterests}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            label="Register as"
            name="registerAs"
            value={formData.registerAs}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            <MenuItem value="Author">Author</MenuItem>
            <MenuItem value="Reviewer">Reviewer</MenuItem>
            <MenuItem value="Board Member">Board Member</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Preferences"
            name="preferences"
            value={formData.preferences}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
      </Grid>

      {/* Bio-Data Section */}
      <Typography variant="h6" fontWeight="bold" mt={4}>
        Bio-Data
      </Typography>
      <TextField
        label="Tell me about yourself briefly"
        name="bioData"
        multiline
        rows={4}
        fullWidth
        margin="normal"
        value={formData.bioData}
        onChange={handleChange}
      />

      {/* Terms and Conditions Checkbox */}
      <FormControlLabel
        control={
          <Checkbox
            checked={termsAccepted}
            onChange={handleCheckboxChange}
            name="termsAccepted"
            color="primary"
          />
        }
        label="I agree with the terms and conditions of the JIT and abide by the international standards of research and scientific community while participating in any of the activities with JIT."
        sx={{ mt: 3 }}
      />

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={!termsAccepted}
        fullWidth
        sx={{ mt: 3 }}
      >
        Submit
      </Button>
    </Container> 
    </>
  );
};

export default Registration;
