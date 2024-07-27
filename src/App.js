import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Consultants from './components/Consultants';
import ConsultantProfile from './components/ConsultantProfile';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Testimonials from './components/Testimonials';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Reviews from './components/Reviews';
import HoroScope from './components/HoroScope';
import Numerology from './components/Numerology';
import ReviewsCarousel from './components/ReviewsCarousel';
import Form from './components/form';
import './App.css';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Start the scrolling animation when the component mounts
    const scrollingText = document.querySelector('.scrolling-text');
    if (scrollingText) {
      scrollingText.style.animation = 'scroll-left 15s linear infinite';
    }

    // Clean up
    return () => {
      if (scrollingText) {
        scrollingText.style.animation = '';
      }
    };
  }, []);

  const handleHover = () => {
    const scrollingText = document.querySelector('.scrolling-text');
    if (scrollingText) {
      scrollingText.style.animationPlayState = isHovered ? 'running' : 'paused';
    }
    setIsHovered(!isHovered);
  };


  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <div className="scrolling-text-container" onMouseEnter={handleHover} onMouseLeave={handleHover}>
          <div className="scrolling-text">
            Expertise in Vastu and Vedic Astrology
          </div>
        </div>
        <CustomNavbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Horoscope" element={<HoroScope />} />
            <Route path="/Numerology" element={<Numerology />} />
            <Route path="/consultants" element={<Consultants />} />
            <Route path="/consultant/:id" element={<ConsultantProfile />} />
            <Route path="/form" element={<Form />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/reviews-carousel" element={<ReviewsCarousel />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
