import React from "react";
import { NavigationBarDashboard, SidebarDashboard } from "../../components/dashboard";
import { Row, Col, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function MainDashboard() {
  return (
    <div>
      <NavigationBarDashboard />
      <SidebarDashboard />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3">
        <h1>Dashboard</h1>
        <hr />
        <Row>
          <Col>
            <Card className="text-center" variant="dark" bg="dark" text="light">
              <Card.Header>Destinations</Card.Header>
              <Card.Body>
                <Card.Title>
                  <h1> 600 </h1>
                </Card.Title>
                <Card.Text>
                  <LinkContainer to="/dashboard/destinations">
                    <Button variant="light">Show data...</Button>
                  </LinkContainer>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center" variant="dark" bg="dark" text="light">
              <Card.Header>Users</Card.Header>
              <Card.Body>
                <Card.Title>
                  <h1> 200 </h1>
                </Card.Title>
                <Card.Text>
                  <LinkContainer to="/dashboard/users">
                    <Button variant="light">Show data...</Button>
                  </LinkContainer>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </main>
    </div>
  );
}
