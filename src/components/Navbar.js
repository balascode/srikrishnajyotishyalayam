import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navimg from '../assets/images/nav-img.jpg';
import '../assets/css/navbar.css';

const CustomNavbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setIsNavbarFixed(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar bg="warning" variant="text-dark" expand="lg" className={`custom-navbar p-2 ${isNavbarFixed ? 'navbar-scrolled' : ''}`}>
      <Navbar.Brand href="/" className='ms-4 d-flex flex-row'>
      <img src={navimg} className='nav-img'/>
      <h1 className='head-nav d-flex flex-column justify-content-center mt-2 ml-2'>SRI KRISHNA JYOTHISHALAYAM </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link to="/" className="nav-link text-dark">Home</Link>
          <Link to="/about" className="nav-link text-dark">About</Link>
          <NavDropdown className='text-dark' title="Services" id="basic-nav-dropdown">
            <div className='dp'>
              <NavDropdown.Item as={Link} to="/services#Horoscope">Horoscope</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services#Vastu"> Vastu Shastra</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services#Numerology">Numerology</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services#Business">Business Astrology</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services#Medical">Medical Astrology</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services#Marriage">Marriage Astrology</NavDropdown.Item>
            </div>
          </NavDropdown>
          <Link to="/reviews" className="nav-link text-dark">Reviews</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
