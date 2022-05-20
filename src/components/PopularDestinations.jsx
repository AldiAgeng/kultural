import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import imgBali from "../assets/images/vacation/bali.jpg";
import imgRajaAmpat from "../assets/images/vacation/rajaampat.jpg";
import imgBorobudur from "../assets/images/vacation/borobudur.jpg";
export default function PopularDestinations() {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col>
            <h1 className="text-popular">
              FIND <span className="popular">POPULAR</span>
            </h1>
            <h1 className="text-popular">DESTINATIONS</h1>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center justify-align-center">
          <Col>
            <Card data-aos="fade-up" data-aos-duration="1500" className="border-0">
              <Card.Img variant="top" src={imgBali} />
              <Card.Body>
                <Card.Title>Seminyak Beach</Card.Title>
                <Card.Text>Bali, Indonesia</Card.Text>
                <Button variant="outline-danger">Book</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card data-aos="fade-down" data-aos-duration="1500" className="border-0">
              <Card.Img variant="top" src={imgRajaAmpat} />
              <Card.Body>
                <Card.Title>Raja Ampat Island</Card.Title>
                <Card.Text>Papua, Indonesia</Card.Text>
                <Button variant="outline-danger">Book</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card data-aos="fade-up" data-aos-duration="1500" className="border-0">
              <Card.Img variant="top" src={imgBorobudur} />
              <Card.Body>
                <Card.Title>Borobudur</Card.Title>
                <Card.Text>Magelang, Indonesia</Card.Text>
                <Button variant="outline-danger">Book</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
