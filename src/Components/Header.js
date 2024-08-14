import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/logo.png"

function Header() {
  return (
    <>
  <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt='loto' style={{width:"60px", height:'60px', marginRight:'10px', borderRadius:'50px'}} />JIT Journals</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{marginRight:'10px'}}>
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/cfp">Call For Paper</Nav.Link>
            <NavDropdown title="JIT-AI Journals" id="basic-nav-dropdown">
              <NavDropdown.Item href="/why-choose">Why Choose JIT-AI Journals</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2">
                Call For Paper
              </NavDropdown.Item> */}
              <NavDropdown.Item href="/review-process">
              Review Process
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="For Authors" id="basic-nav-dropdown">
              <NavDropdown.Item href="/how-to-submit">How to Submit Your Paper</NavDropdown.Item>
              <NavDropdown.Item href="/manuscript-preparation">
                Manuscript Preparation Guidelines
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Copy Right Form
              </NavDropdown.Item>
              <NavDropdown.Item href="/faq">
                FAQ
              </NavDropdown.Item>
              <NavDropdown.Item href="/manuscript-Publication">
                Manuscript Publication Charges
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Quality Report" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Author Guidelines</NavDropdown.Item> */}
              <NavDropdown.Item href="/statistics">
                Statistics
              </NavDropdown.Item>
              <NavDropdown.Item href="/citation-reports">
                Citation Report
              </NavDropdown.Item>
              <NavDropdown.Item href="/copyright-policy">
                Copyright Policy
              </NavDropdown.Item>
              <NavDropdown.Item href="/PublishingStandards">
                Publishing Standards
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/registration">Registration</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header