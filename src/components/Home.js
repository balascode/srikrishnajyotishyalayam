import React, { useCallback, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ReviewsCarousel from './ReviewsCarousel';
import aboutImage from '../assets/images/bgimg2.jpg';
import vedicimage from '../assets/images/vedic.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/css/home.css';

// gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const navigate = useNavigate();

  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    console.log("useEffect triggered");
  
    const aboutImage = document.querySelector(".about-image");
    const vedicImg = document.querySelector(".vedic-img");
  
    if (aboutImage && vedicImg) {
      console.log("Elements found, setting up GSAP animations");
  
      setTimeout(() => {
        gsap.from(".about-image", {
          scrollTrigger: {
            trigger: ".about-image",
            start: "top 80%",
            end: "bottom 60%",
          },
          x: -100,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out"
        });
  
        gsap.from(".vedic-img", {
          scrollTrigger: {
            trigger: ".vedic-img",
            start: "top 80%",
            end: "bottom 60%",
          },
          x: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out"
        });
  
        console.log("GSAP animations set up");
      }, 500);
    } else {
      console.log("Elements not found, skipping GSAP animations");
    }
  }, []);
  

  return (
    <div>
      <div id="main" className="home-container">
        <div id='innerbg' className='d-flex flex-column justify-content-center'>
        <Container>
          <Row className='mb-5 pb-4'>
            <Col md={12} className='d-flex flex-row justify-content-start'>
              <div className="content text-start">
                <h1 className="display-1 mb-2"> Sri Krishna Jyothishalayam</h1>
                <p className="lead mb-5">Empowering you with astrological insights.</p>
                <button className="btn btn-primary buttn" onClick={() => navigate('/form')}>
                  Consult Now
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        </div>
      </div>

      <div id="about" className="">
      <section className="about-us-home pt-5 pb-5">
      <Container>
        <Row>
         <h1 className="text-start mb-4 about-us-title"> About Us </h1>
          <Col md={6}>
            <img src={aboutImage} alt="About Sri Krishna Jyothishalayam Services" className="about-image" />
          </Col>
          <Col md={6} className='pl-4 d-flex flex-column justify-content-center'>
            <h2 className="section-title pl-2">Why Consult with Sri Krishna Jyotishalayam?</h2>
            <p className='text-start para pl-2'>
              At Sri Krishna Jyotishalayam, we combine the wisdom of Vedic Astrology with personalized attention to offer you invaluable insights and solutions. Our expert astrologers are dedicated to understanding your unique life circumstances and providing tailored advice that can lead to meaningful improvements in various aspects of your life. Whether you seek clarity in your career, relationships, health, or personal growth, our consultations are designed to empower you with actionable knowledge and a sense of direction. Experience the transformative benefits of Vedic Astrology with us and take the first step towards a brighter, more informed future.
            </p>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col md={6} className='d-flex flex-column justify-content-center'>
            <h1 className="section-title pl-2">Discover the Power and Accuracy of Vedic Astrology</h1>
            <p className='text-start para pl-2'>
              Vedic Astrology, an ancient and revered science, offers profound insights into our lives by studying the positions and movements of celestial bodies. Unlike other forms of astrology, Vedic Astrology's roots go back thousands of years, providing time-tested and accurate predictions. Its meticulous methods and deep understanding of planetary influences enable astrologers to uncover hidden truths about your past, present, and future. By consulting Vedic Astrology, you gain access to precise guidance that helps you navigate life's challenges and seize opportunities with confidence.
            </p>
          </Col>
          <Col md={6} className='pr-0'>
            <img src={vedicimage} alt="Vedic Astrology" className="vedic-img shadow-lg" />
          </Col>

        </Row>
      </Container>
    </section>
      </div>

      <div id="services" className="additional-section text-center ">

      <div className="container services-complete p-5 shadow-lg">
       <h1 className="text-center mb-4">Our Services</h1>
       <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="service-card">
           <div className="card bgh">
             <div className="card-body d-flex flex-column justify-content-center">
              <div className='highlight'>
              <h5 className="card-title">Horoscope Reading</h5>
              <p className='card-p'> This is beautiful </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="service-card">
          <div className="card bgv">
            <div className="card-body d-flex flex-column justify-content-center">
            <div className='highlight'>
              <h5 className="card-title">Vastu Shastra</h5>
              <p className='card-p'> This is beautiful </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="service-card">
          <div className="card bgn">
            <div className="card-body d-flex flex-column justify-content-center">
            <div className='highlight'>
              <h5 className="card-title"> Numerology </h5>
              <p className='card-p'> This is beautiful </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    <div className="col-md-4 mb-4">
        <div className="service-card">
          <div className="card bgbu">
            <div className="card-body d-flex flex-column justify-content-center">
            <div className='highlight'>
              <h5 className="card-title"> Business Astrology </h5>
              <p className='card-p'> This is beautiful </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="service-card">
          <div className="card bgmd">
            <div className="card-body d-flex flex-column justify-content-center">
            <div className='highlight'>
              <h5 className="card-title"> Medical Astrology </h5>
              <p className='card-p'> This is beautiful </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="service-card">
          <div className="card bgmarriage">
            <div className="card-body d-flex flex-column justify-content-center">
            <div className='highlight'>
              <h5 className="card-title">Marriage Astrology</h5>
              <p className='card-p'> This is beautiful </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

      </div>

      <div id="" className="additional-section whole-container bgreview p-0">
        <h1 className='text-center text-dark mb-5 mt-0'> REVIEWS </h1>
        <ReviewsCarousel /> 
      </div>
    </div>
  );
};

export default Home;
