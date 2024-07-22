import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/about.css'; // Ensure your CSS file path is correct
import aboutImage from '../assets/images/bgimg2.jpg'; // Adjust this path based on your project structure

const AboutUs = () => {
  const sectionRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has already occurred

  useEffect(() => {
    // Apply animation on component mount (initial load)
    const image = sectionRef.current.querySelector('.about-image');
    if (isHovered && !hasAnimated) {
      image.style.animation = 'slideIn 2s ease-in-out';
      setHasAnimated(true); // Set to true after first animation
    }

    // Clean up animation on component unmount or when isHovered becomes false
    return () => {
      image.style.animation = 'none';
    };
  }, [isHovered, hasAnimated]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="about-us" ref={sectionRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Container>
        <Row>
          <Col md={6}>
            <img src={aboutImage} alt="About Sri Krishna Jyothishalayam Services" className="about-image" />
          </Col>
          <Col md={6}>
            <h2 className="section-title text-dark">Why Consult with Sri Krishna Jyotishalayam?</h2>
            <p className='text-start para'>
              At Sri Krishna Jyotishalayam, we combine the wisdom of Vedic Astrology with personalized attention to offer you invaluable insights and solutions. Our expert astrologers are dedicated to understanding your unique life circumstances and providing tailored advice that can lead to meaningful improvements in various aspects of your life. Whether you seek clarity in your career, relationships, health, or personal growth, our consultations are designed to empower you with actionable knowledge and a sense of direction. Experience the transformative benefits of Vedic Astrology with us and take the first step towards a brighter, more informed future.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
