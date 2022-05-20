import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark" className="border-bottom">
        <Container>
          <Navbar.Brand>KULTURAL</Navbar.Brand>
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/destinations">
              <Nav.Link>Destinations</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
