import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import "../../assets/css/dashboard.css";
import { LinkContainer } from "react-router-bootstrap";
export default function NavigationBarDashboard() {
  return (
    <div>
      <Navbar className="navbar sticky-top flex-md-nowrap p-0 shadow" bg="dark" variant="dark">
        <Navbar.Brand className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">
          <LinkContainer to="/">
            <Nav.Link className="text-light">Kultural</Nav.Link>
          </LinkContainer>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
        <Form.Control className="form-control form-control-dark " type="text" placeholder="Search" aria-label="Search" />
        <Nav className="text-nowrap">
          <LinkContainer to="/login">
            <Nav.Link className="px-3">Logout</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </div>
  );
}
