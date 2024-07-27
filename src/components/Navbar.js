import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../assets/css/navbar.css';

const CustomNavbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      console.log('Scroll Position:', window.scrollY);
      console.log('Is Navbar Fixed:', isScrolled);
      setIsNavbarFixed(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar bg="warning" variant="text-dark" expand="lg" className={`custom-navbar p-4 ${isNavbarFixed ? 'navbar-scrolled' : ''}`}>
      <Navbar.Brand href="/" className='ms-4'>Sri Krishna Jyothishalayam</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <LinkContainer to="/">
            <Nav.Link className='text-dark'>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link className='text-dark'>About</Nav.Link>
          </LinkContainer>
          <NavDropdown className='text-dark' title="Services" id="basic-nav-dropdown">
            <div className='dp'>
            <LinkContainer to="/Horoscope">
              <NavDropdown.Item >Horoscope</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/Numerology" >
              <NavDropdown.Item>Numerology</NavDropdown.Item>
            </LinkContainer>
            </div>
          </NavDropdown>
          <LinkContainer to="/reviews">
            <Nav.Link className='text-dark'>Reviews</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
