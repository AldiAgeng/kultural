import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
export default function Destinations() {
  const [destination, setDestination] = useState([]);

  const getData = async () => {
    const response = await fetch(`https://api.unsplash.com/search/photos/?query=Indonesia&client_id=${process.env.REACT_APP_TOKEN}`);
    const data = await response.json();
    console.log(data.results);
    setDestination(data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="myBgAuto">
        <NavigationBar />
        <Container>
          <Row>
            <Col>
              <h1 className="text-center mt-3 text-light">Destinations</h1>
            </Col>
          </Row>
          <Row>
            {destination.length > 0 &&
              destination.map((item) => (
                <Col className="mb-3" md={4}>
                  <Card className="mt-3" data-aos="fade-up">
                    <Card.Img className="img-card" variant="top" src={item.urls.regular} />
                    <Card.Body className="cardBody">
                      <Card.Text>{item.alt_description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
