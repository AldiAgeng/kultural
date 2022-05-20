import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import imgBali from "../assets/images/vacation/bali.jpg";
import imgRajaAmpat from "../assets/images/vacation/rajaampat.jpg";
import imgBorobudur from "../assets/images/vacation/borobudur.jpg";

import TypeWritter from "typewriter-effect";

export default function Jumbotron() {
  return (
    <div className="intro">
      <Container className="text-white">
        <Row>
          <Col>
            <h1 className="text-intro mt-5">WORLD</h1>
            <h1 className="text-intro">
              OF <span className="paradise">PARADISE</span>
            </h1>
            <h1 className="text-intro indonesia">
              <TypeWritter
                onInit={(typewriter) => {
                  typewriter.typeString("INDONESIA").pauseFor(2000).deleteAll().typeString("INDONESIA").pauseFor(2000).start();
                }}
              />
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <p className="p-intro">Let's explore one of the third largest countries in the wolrd, namely Indonesia. </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={2} className="text-center">
            <p className="p-intro mt-3">Bali</p>
            <Image className="rounded" width={200} src={imgBali} />
          </Col>
          <Col md={2} className="text-center">
            <p className="p-intro mt-3">Raja Ampat</p>
            <Image className="rounded" width={200} src={imgRajaAmpat} />
          </Col>
          <Col md={2} className="text-center">
            <p className="p-intro mt-3">Borobudur</p>
            <Image className="rounded" width={200} src={imgBorobudur} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
