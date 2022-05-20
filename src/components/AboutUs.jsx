import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import imgOrangMangap from "../assets/images/orangmangap.png";
import { StarFill } from "react-bootstrap-icons";
export default function AboutUs() {
  return (
    <div id="about-us">
      <Container>
        <Row className="mt-5 pt-5 text-center">
          <Col>
            <Image data-aos="fade-up" data-aos-delay="80" data-aos-duration="2000" width={370} src={imgOrangMangap} />
          </Col>
          <Col>
            <h1 className="text-about">WHAT ADVENTURES</h1>
            <h1 className="text-about">
              SAY <span className="about">ABOUT US</span>
            </h1>
            <p>See and discover what adventurers tell us about their journey with us, we always listen to whatever experience they have to say</p>
            <br />
            <Card border="dark">
              <Card.Body>
                <Card.Text>
                  "Kultural really helped me in finding the best location for my first outdoor adventure trip. Their response was very fast and able to tell in detail about the ceita or the history of the place I was going to visit".
                </Card.Text>
                <br />
                <Card.Text>
                  <StarFill color="gold" size={20} />
                  <StarFill color="gold" size={20} />
                  <StarFill color="gold" size={20} />
                  <StarFill color="gold" size={20} />
                  <StarFill color="gold" size={20} />
                </Card.Text>
                <Card.Title>Ujang Jangjang</Card.Title>
                <Card.Text>Entepreneur</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
