import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../assets/css/footer.css';

const Footer = () => (
  <footer className="footer bg-dark text-white text-start mt-auto">
    <Container fluid>
      <Row>
        <Col md={2} className="pl-md-5">
          <h5>Main Links</h5>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/faq">
            <Nav.Link>FAQ</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/blog">
            <Nav.Link>Blog</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/testimonials">
            <Nav.Link>Testimonials</Nav.Link>
          </LinkContainer>
        </Col>
        <Col md={3}>
          <h5>Contact Us</h5>
          <p>Email: info@astroconsultant.com</p>
          <p>Phone: 99999999999</p>
          <p>Address: Rajahmundry, Godavari, Uppalavai</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={12} className="text-center">
          <p>&copy; {new Date().getFullYear()} Astrologer Consultant. All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
