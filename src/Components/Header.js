import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/logo.png";
import './Header.css'; // Import a custom CSS file for additional styles

function Header() {
  const [navbarBackground, setNavbarBackground] = useState(false);

  // Change navbar background on scroll
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const logoStyle = {
    width: "60px",
    height: "60px",
    marginRight: "10px",
    borderRadius: "50px"
  };

  return (
    <Navbar
      expand="lg"
      className={`navbar-custom ${navbarBackground ? 'navbar-scroll' : ''}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="JIT Journals Logo" style={logoStyle} />
          JIT Journals
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cfp">Call For Paper</Nav.Link>
            <NavDropdown title="JIT Journals" id="jit-journals-dropdown">
              <NavDropdown.Item href="/why-choose">Why Choose JIT Journals</NavDropdown.Item>
              <NavDropdown.Item href="/review-process">Review Process</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="For Authors" id="for-authors-dropdown">
              <NavDropdown.Item href="/how-to-submit">How to Submit Your Paper</NavDropdown.Item>
              <NavDropdown.Item href="/manuscript-preparation">Manuscript Preparation Guidelines</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Copy Right Form</NavDropdown.Item>
              <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="/manuscript-publication">Manuscript Publication Charges</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Quality Report" id="quality-report-dropdown">
              <NavDropdown.Item href="/statistics">Statistics</NavDropdown.Item>
              <NavDropdown.Item href="/citation-reports">Citation Report</NavDropdown.Item>
              <NavDropdown.Item href="/copyright-policy">Copyright Policy</NavDropdown.Item>
              <NavDropdown.Item href="/publishing-standards">Publishing Standards</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/registration">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
