import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../assets/css/navbar.css';

const CustomNavbar = ({ onFormClick }) => {
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
    <Navbar bg="dark" variant="dark" expand="lg" className={`custom-navbar p-4 ${isNavbarFixed ? 'navbar-scrolled' : ''}`}>
      <Navbar.Brand href="/">
        <img src='' alt='' className=''/>
        Sri Krishna Jyothishalayam
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <LinkContainer to="/Horoscope">
              <NavDropdown.Item>Horoscope</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/Numerology">
              <NavDropdown.Item>Numerology</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <LinkContainer to="/form">
            <Nav.Link> Form </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/reviews">
            <Nav.Link>Reviews</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
