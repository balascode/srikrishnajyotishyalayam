import React, { useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import About from './About';
import Services from './Services';
import ReviewsCarousel from './ReviewsCarousel';
import '../assets/css/home.css';

const Home = () => {
  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div>
      <div id="main" className="home-container">
        <Container fluid className='d-flex flex-column justify-content-center'>
          <Row className='space'></Row>
          <Row>
            <Col md={12} className='d-flex flex-row justify-content-md-end'>
              <div className="content text-center text-white">
                <h1 className="display-1">Reach Out to Sri Krishna Jyothishalayam</h1>
                <p className="lead">Empowering you with astrological insights.</p>
                <button className="btn btn-primary" onClick={() => scrollToSection('about')}>
                  Explore Our Services
                </button>
              </div>
            </Col>

            <Col md={12} className='space2'></Col>

            <Col md={4} className='d-flex flex-row justify-content-center'>
              <div className="contentblw text-center text-white">
                <h1 className="text-white blw"> Horoscope </h1>
              </div>
            </Col>

            <Col md={4}>
              <div className="contentblw text-center text-white">
                <h1 className="text-white blw"> Numerology </h1>
              </div>
            </Col>

            <Col md={4}>
              <div className="contentblw text-center text-white">
                <h1 className="text-white blw"> Astrologer Guidance </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="about" className="additional-section bg-light text-center">
        <About />
      </div>

      <div id="services" className="additional-section bg-light text-center">
        <Services />
      </div>

      <div id="" className="additional-section whole-container bgreview p-0">
        <h1 className='text-center text-white mb-5 mt-0'> REVIEWS </h1>
        <ReviewsCarousel /> 
      </div>
    </div>
  );
};

export default Home;
