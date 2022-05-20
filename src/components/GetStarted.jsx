import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
export default function GetStarted() {
  return (
    <div>
      <Container>
        <Row className="text-center mt-5 pt-5">
          <Col>
            <div className="bg-danger get-started text-white">
              <h1>GET STARTED WITH</h1>
              <h1>KULTURAL</h1>
              <p>Subscribe and find super attactive price quotes from us, we waiting for you at the best destination</p>
              <Button variant="outline-light">Get Started</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
