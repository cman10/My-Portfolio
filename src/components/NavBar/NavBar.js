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
            <Nav class="navHome">
              <div>
                <Nav.Link href="/">Home</Nav.Link>
              </div>
              <div class="others">
                <Nav.Link href="/AboutMe">AboutMe</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavigationComponent;
