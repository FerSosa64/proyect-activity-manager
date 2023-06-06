import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FooterBar.css';

function FooterBar() {
  return (
    <footer className="footer bg-dark text-light">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas
              rhoncus.
            </p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li>
                <a href="https://www.twitter.com/">Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com/">Instagram</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h5>Contact Us</h5>
            <address>
              123 Street, City, State
              <br />
              Country
              <br />
              <a href="mailto:info@example.com">info@example.com</a>
              <br />
              <a href="tel:+1234567890">+1234567890</a>
            </address>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <p className="text-center mb-0">&copy; 2023 Your Company. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}

export default FooterBar;