import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../assets/css/footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faSquareFacebook , faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faUser, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

library.add(faInstagram, faSquareFacebook, faLinkedin, faEnvelope, faLocationDot, faPhone, fas, faCoffee, faHome, faUser);

const Footer = () => (
  <footer className="footer bg-dark text-white text-start mt-auto">
    <Container className='pt-4 pl-3'>
      <Row className='ms-auto me-auto'>
      <Col md={4} xs={12} className="d-flex flex-row justify-content-md-center justify-content-xs-start mt-4">
        <div className='text-start'>
        <LinkContainer to="/about">
            <Nav.Link> <h5 className='mb-2'> Sri Krishna Jyothishalayam </h5></Nav.Link>
          </LinkContainer>
          <p> Expertise in vastu and vedic astrology <br/> 25+ Years Experience with 99% of Success</p>
          <div className="d-flex flex-row mt-4">
          <FontAwesomeIcon icon={['fab', 'square-facebook']} className="mr-4 font" />
          <FontAwesomeIcon icon={['fab', 'instagram']} className="mr-4 font" />
          <FontAwesomeIcon icon={['fab', 'linkedin']} className="font" />
          </div>
        </div>
        </Col>
        <Col md={4} xs={12} className="d-flex flex-row justify-content-md-center justify-content-xs-start mt-4">
        <div className='text-start'>
          <h5 className='mb-2'>Main Links</h5>
          <LinkContainer to="/faq">
            <Nav.Link>FAQ</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/blog">
            <Nav.Link className='lnk'>Blog</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/testimonials">
            <Nav.Link>Testimonials</Nav.Link>
          </LinkContainer>
          </div>
        </Col>
        <Col md={4} xs={12} className="d-flex flex-row justify-content-md-center justify-content-xs-start mt-4">
        <div className='text-start'>
          <h5 className='mb-2'>Contact Us</h5>
          <p className='mb-2'> <FontAwesomeIcon icon={['fas', 'envelope']} className="mr-2 font1"/> Email: srikrishnajyothishalayamm@gmail.com</p>
          <p className='mb-2'><FontAwesomeIcon icon={['fas', 'phone']} className="mr-2 font1"/> Phone: +91 7702816455</p>
          <p className='mb-2'> <FontAwesomeIcon icon={['fas', 'location-dot']} className="mr-2 font1"/> 1001, B3, Vaisakhi Skyline Apartments <br/> 
          GITAM Medical College Road,<br/> Yendada, Rushikonda, Visakhapatnam, <br/> Andhra Pradesh 530045
          </p>
        </div>
        </Col>
      </Row>

      <Col md={12} xs={12} className='d-flex flex-row justify-content-center'> <hr className='hr1'/> </Col>

      <Row className="mt-3">
        <Col md={12} className="text-center">
          <p>&copy; {new Date().getFullYear()} Astrologer Consultant. All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
