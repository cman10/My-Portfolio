import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NewBar.css";
const NavigationComponent = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="success" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/AboutMe">AboutMe</Nav.Link>
              <Nav.Link href="/Login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavigationComponent;
