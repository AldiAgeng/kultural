import React from "react";
import { NavigationBarDashboard, SidebarDashboard } from "../../components/dashboard";

import imgBali from "../../assets/images/vacation/bali.jpg";

import { LinkContainer } from "react-router-bootstrap";

import { Button, Row, Col, Card } from "react-bootstrap";
export default function DestinationsDashboard() {
  return (
    <div>
      <NavigationBarDashboard />
      <SidebarDashboard />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3">
        <h1>Destinations</h1>
        <hr />
        <LinkContainer to="/dashboard/destinations/create">
          <Button variant="success">
            <i class="bi bi-plus-circle"></i> Add Destination
          </Button>
        </LinkContainer>
        <Row className="mt-3">
          <Col className="col-md-3 mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imgBali} />
              <Card.Body>
                <Card.Title>Satu</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <div className="d-flex justify-content-around">
                  <LinkContainer to="/dashboard/destinations/edit">
                    <Button variant="primary">
                      <i class="bi bi-pencil"></i> Edit
                    </Button>
                  </LinkContainer>
                  <Button variant="danger">
                    <i class="bi bi-trash"></i> Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-md-3 mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imgBali} />
              <Card.Body>
                <Card.Title>Dua</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <div className="d-flex justify-content-around">
                  <LinkContainer to="/dashboard/destinations/edit">
                    <Button variant="primary">
                      <i class="bi bi-pencil"></i> Edit
                    </Button>
                  </LinkContainer>
                  <Button variant="danger">
                    <i class="bi bi-trash"></i> Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-md-3 mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imgBali} />
              <Card.Body>
                <Card.Title>Tiga</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <div className="d-flex justify-content-around">
                  <LinkContainer to="/dashboard/destinations/edit">
                    <Button variant="primary">
                      <i class="bi bi-pencil"></i> Edit
                    </Button>
                  </LinkContainer>
                  <Button variant="danger">
                    <i class="bi bi-trash"></i> Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-md-3 mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imgBali} />
              <Card.Body>
                <Card.Title>Empat</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <div className="d-flex justify-content-around">
                  <LinkContainer to="/dashboard/destinations/edit">
                    <Button variant="primary">
                      <i class="bi bi-pencil"></i> Edit
                    </Button>
                  </LinkContainer>
                  <Button variant="danger">
                    <i class="bi bi-trash"></i> Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </main>
    </div>
  );
}
