import React from "react";
import "../assets/css/style.css";
// components
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import { Google } from "react-bootstrap-icons";

import { LinkContainer } from "react-router-bootstrap";

export default function Login() {
  return (
    <div>
      <div className="myBg">
        <NavigationBar />
        <Container>
          <Row className="mt-5 pt-5 pb-3">
            <Col>
              <div className="register-photo">
                <div className="form-container">
                  <div className="image-holder"></div>
                  <Form>
                    <h2 className="text-center">Welcome Back</h2>
                    <Form.Group className="mb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="enter your email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="enter your password" />
                    </Form.Group>
                    <Form.Group className="mb-3 d-grid gap-2">
                      <LinkContainer to="/dashboard">
                        <Button variant="dark">Sign in</Button>
                      </LinkContainer>
                    </Form.Group>
                    <Form.Group className="mb-3 d-grid gap-2">
                      <Button variant="outline-dark">
                        <Google /> Sign in with Google
                      </Button>
                    </Form.Group>
                    <Form.Group className="mb-3 d-grid gap-2">
                      <p>
                        Don't have an account? <strong>Sign up</strong>
                      </p>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
