import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <>
  <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Iot Journals</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cfp">Call For Paper</Nav.Link>
            <NavDropdown title="IOT Journals" id="basic-nav-dropdown">
              <NavDropdown.Item href="/why-choose">Why Choose IOT Journals</NavDropdown.Item>
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
              <NavDropdown.Item href="#action/3.2">
                Statistics
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Citation Report
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Copyright Policy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Publishing Standards
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header