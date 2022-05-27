import React from "react";
import { Container, Row, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export default function SidebarDashboard() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item py-4 px-3">
                  <h6>
                    <i className="bi bi-person-circle"></i> Welcome User
                  </h6>
                </li>
                <li className="nav-item">
                  <LinkContainer to="/dashboard">
                    <Nav.Link>
                      <span className="align-text-bottom">
                        <i className="bi bi-house-door"></i> Dashboard
                      </span>
                    </Nav.Link>
                  </LinkContainer>
                </li>
                <li className="nav-item">
                  <LinkContainer to="/dashboard/destinations">
                    <Nav.Link>
                      <span className="align-text-bottom">
                        <i className="bi bi-calendar2-check"></i> Destinations
                      </span>
                    </Nav.Link>
                  </LinkContainer>
                </li>
                <li className="nav-item">
                  <LinkContainer to="/dashboard/users">
                    <Nav.Link>
                      <span className="align-text-bottom">
                        <i className="bi bi-people"></i> Users
                      </span>
                    </Nav.Link>
                  </LinkContainer>
                </li>
              </ul>
            </div>
          </Nav>
        </Row>
      </Container>
    </div>
  );
}
