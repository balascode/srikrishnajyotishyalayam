import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/css/about.css'; // Ensure your CSS file path is correct
import aboutImage from '../assets/images/bgimg2.jpg';
import vedicimage from '../assets/images/vedic.jpg'; // Adjust this path based on your project structure

// gsap.registerPlugin(ScrollTrigger);

const GoogleMapComponent = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23956.923737600024!2d83.38128338987732!3d17.78123975060626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395bafa5f41a73%3A0x71fd18c7cef04600!2sSri%20Krishna%20Jyothishalayam!5e0!3m2!1sen!2sin!4v1721907686585!5m2!1sen!2sin"
      width="600"
      height="450"
      style={{ border: '0' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps Embed"
    ></iframe>
  );
};

const AboutUs = () => {
  useEffect(() => {
    console.log("useEffect triggered");
  
    gsap.from(".about-image", {
      scrollTrigger: {
        trigger: ".about-image",
        start: "top 80%",
        end: "bottom 60%",
      },
      x: -100,
      opacity: 0,
      duration: 1.8,
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
  }, []);
  

  return (
    <section className="about-us">
      <Container fluid>
        <Row>
        <Col md={6} className="pl-5 pr-0">
         <img src={aboutImage} alt="About Sri Krishna Jyothishalayam Services" className="about-image" />
        </Col>
        <Col md={6} className="mt-5 pl-4">
        <h2 className="section-title pl-2">Why Consult with Sri Krishna Jyotishalayam?</h2>
        <p className="text-start para pl-2">
          At Sri Krishna Jyotishalayam, we combine the wisdom of Vedic Astrology with personalized attention to offer you invaluable insights and solutions. Our expert astrologers are dedicated to understanding your unique life circumstances and providing tailored advice that can lead to meaningful improvements in various aspects of your life. Whether you seek clarity in your career, relationships, health, or personal growth, our consultations are designed to empower you with actionable knowledge and a sense of direction. Experience the transformative benefits of Vedic Astrology with us and take the first step towards a brighter, more informed future.
        </p>
        </Col>
        </Row>

        <Row className="mt-3 p-5">
        <Col md={6} className="mt-3 d-flex flex-column justify-content-center">
        <h1 className="section-title pl-2">Discover the Power and Accuracy of Vedic Astrology</h1>
        <p className="text-start para pl-2">
          Vedic Astrology, an ancient and revered science, offers profound insights into our lives by studying the positions and movements of celestial bodies. Unlike other forms of astrology, Vedic Astrology's roots go back thousands of years, providing time-tested and accurate predictions. Its meticulous methods and deep understanding of planetary influences enable astrologers to uncover hidden truths about your past, present, and future. By consulting Vedic Astrology, you gain access to precise guidance that helps you navigate life's challenges and seize opportunities with confidence.
        </p>
        </Col>
        <Col md={6}>
          <img src={vedicimage} alt="Vedic Astrology" className="vedic-img shadow-lg" />
        </Col>
        </Row>

        <Row>
          <Col md={12} className="mb-5">
            <hr className="mt-5 me-auto ms-auto shadow-lg" />
          </Col>
          <Col md={12} className='mb-5 d-flex flex-row justify-content-center'>
            <h1 className="success"> 99%<span className="ssp">+</span> <span className='ssp text-secondary'> Success </span> </h1>
            <div className='ms-4 me-4 vrl'></div>
            <h1 className="cmnt"> Expertise in Vastu <br/> And Vedic Astrology </h1>
            <div className='ms-4 me-4 vrl'></div>
            <h1 className="cmnt"> 20+ Years Experience <br/> in Astrology and Vastu</h1>
            <div className='ms-4 me-4 vrl'></div>
            <h1 className="cmnt"> Hundreds of Followers <br/> From Last 20+ Years</h1>
          </Col>
          <Col md={6} className='d-flex flex-column justify-content-center'>
            <div className='d-flex flex-row justify-content-center'>
              <div>
                <h1 className="section-title text-start mb-2">Visit Our Office</h1>
                <p className="para text-start">We welcome you to visit our office in <br /> Visakhapatnam for in-person consultations and guidance.</p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <GoogleMapComponent />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
