import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/main.css";
import "../assets/css/aboutUs.css";
import Footer from '../components/footer';

// Sample data for sections

function ContactUs() {
  return (
    <div className="about-container">
      <div className="backgroundImageContact">
        <div className="center-content">{/* Your content goes here */}</div>
      </div>
      <div className="content-container">
        <div className="row" style={{ width: "80%" }}>
          <Container className="contact-us">
            <Row>
              <Col style={{ textAlign: "center" }}>
                <h1>Contact Us</h1>
                <p>Have a question or feedback? Reach out to us!</p>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col md={6}>
                <Form>
                  <Form.Group controlId="formName" className="formGroup">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group controlId="formEmail" className="formGroup">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group controlId="formMessage" className="formGroup">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Enter your message"
                    />
                  </Form.Group>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </Col>
              <Col md={6} style={{ marginTop: "5%" }}>
                <h2
                  style={{
                    textAlign: "center",
                    color: "rgb(26, 115, 232)",
                  }}
                >
                  Our Location
                </h2>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13717.728052315852!2d76.7613495!3d30.7343643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedb930d54b39%3A0x7fb1eb2df7b11280!2sISKCON%20Temple%20Chandigarh!5e0!3m2!1sen!2sin!4v1711798383055!5m2!1sen!2sin"
                  width="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
                <p>Radha Madhav Temple, Sector- 36B</p>
                <p>Chandigarh, India</p>
                <p>Phone: 123-456-7890</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />

    </div>
  );
}

export default ContactUs;
