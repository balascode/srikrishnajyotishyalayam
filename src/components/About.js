import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/css/about.css'; // Ensure your CSS file path is correct
import aboutImage from '../assets/images/bgimg2.jpg';
import vedicimage from '../assets/images/vedic.jpg'; // Adjust this path based on your project structure

//  gsap.registerPlugin(ScrollTrigger);

const GoogleMapComponent = () => {
  return (
    <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23956.923737600024!2d83.38128338987732!3d17.78123975060626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395bafa5f41a73%3A0x71fd18c7cef04600!2sSri%20Krishna%20Jyothishalayam!5e0!3m2!1sen!2sin!4v1721907686585!5m2!1sen!2sin"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps Embed"
    ></iframe>
  </div>
  );
};

const AboutUs = () => {
  // useEffect(() => {
  //   console.log("useEffect triggered");
  
  //   // Check if elements exist
  //   const aboutImageElement = document.querySelector(".about-image");
  //   const vedicImageElement = document.querySelector(".vedic-img");
  
  //   if (aboutImageElement && vedicImageElement) {
  //     gsap.from(aboutImageElement, {
  //       scrollTrigger: {
  //         trigger: aboutImageElement,
  //         start: "top 80%",
  //         end: "bottom 60%",
  //       },
  //       x: -100,
  //       opacity: 0,
  //       duration: 1.5,
  //       ease: "power3.out"
  //     });
  
  //     gsap.from(vedicImageElement, {
  //       scrollTrigger: {
  //         trigger: vedicImageElement,
  //         start: "top 80%",
  //         end: "bottom 60%",
  //       },
  //       x: 100,
  //       opacity: 0,
  //       duration: 1.5,
  //       ease: "power3.out"
  //     });
  
  //     console.log("GSAP animations set up");
  //   } else {
  //     console.error("Elements not found for animation");
  //   }
  // }, []);
  

  return (
    <section className="about-us">
      <Container>
        <Row>
        <Col md={6} className="order-1 order-md-1">
         <img src={aboutImage} alt="About Sri Krishna Jyothishalayam Services" className="about-image" />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center order-2 order-md-2">
        <h2 className="section-title">Why Consult with Sri Krishna Jyotishalayam?</h2>
        <p className="text-start para">
          At Sri Krishna Jyotishalayam, we combine the wisdom of Vedic Astrology with personalized attention to offer you invaluable insights and solutions. Our expert astrologers are dedicated to understanding your unique life circumstances and providing tailored advice that can lead to meaningful improvements in various aspects of your life. Whether you seek clarity in your career, relationships, health, or personal growth, our consultations are designed to empower you with actionable knowledge and a sense of direction. Experience the transformative benefits of Vedic Astrology with us and take the first step towards a brighter, more informed future.
        </p>
        </Col>
        </Row>

        <Row className="mt-3">
        <Col md={6} className="d-flex flex-column justify-content-center order-2 order-md-1">
        <h1 className="section-title">Discover the Power and Accuracy of Vedic Astrology</h1>
        <p className="text-start para">
          Vedic Astrology, an ancient and revered science, offers profound insights into our lives by studying the positions and movements of celestial bodies. Unlike other forms of astrology, Vedic Astrology's roots go back thousands of years, providing time-tested and accurate predictions. Its meticulous methods and deep understanding of planetary influences enable astrologers to uncover hidden truths about your past, present, and future. By consulting Vedic Astrology, you gain access to precise guidance that helps you navigate life's challenges and seize opportunities with confidence.
        </p>
        </Col>
        <Col md={6} className='order-1 order-md-2'>
          <img src={vedicimage} alt="Vedic Astrology" className="vedic-img shadow-lg" />
        </Col>
        </Row>

        <Row>
          <Col md={12}>
            <hr className="me-auto ms-auto shadow-lg" />
          </Col>
        </Row>
        </Container>
        <Container className='mb-4'>
        <Row className='text-center'>
          <Col xs={12} md={3} className='mb-2 d-flex flex-row justify-content-md-center justify-content-start'>
            <h1 className="success text-start"> 99%<span className="ssp">+</span> <span className='ssp text-secondary'> Success </span> </h1>  
          </Col>
          <Col xs={12} md={3} className='mb-2 d-flex flex-row justify-content-md-center justify-content-start'>
          <div className='vrl me-4 d-none d-md-block'></div>
            <h1 className="cmnt text-start"> Expertise in Vastu <br className='d-none d-md-block'/> And Vedic Astrology </h1>
            </Col>
            <Col xs={12} md={3} className='mb-2 d-flex flex-row justify-content-md-center justify-content-start'>
            <div className='vrl me-4 d-none d-md-block'></div>
            <h1 className="cmnt text-start"> 20+ Years Experience <br className='d-none d-md-block'/> in Astrology and Vastu</h1>
            </Col>
            <Col xs={12} md={3} className='mb-2 d-flex flex-row justify-content-md-center justify-content-start'>
            <div className='vrl me-4 d-none d-md-block'></div>
            <h1 className="cmnt text-start"> Hundreds of Followers <br className='d-none d-md-block'/> From Last 20+ Years</h1>
            </Col>
          </Row>

          <Row>
          <Col md={12}>
            <hr className="me-auto ms-auto shadow-lg" />
          </Col>
        </Row>

          </Container>
          <Container>
          <Row>
          <Col xs={12} md={6} className='d-flex flex-column justify-content-center'>
            <div className='d-flex flex-row justify-content-center'>
              <div>
                <h1 className="section-title text-start mb-2">Visit Our Office</h1>
                <p className="para text-start">We welcome you to visit our office in <br /> Visakhapatnam for in-person consultations and guidance.</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <GoogleMapComponent className='w-50'/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
