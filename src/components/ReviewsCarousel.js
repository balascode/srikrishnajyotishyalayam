import React, { useEffect, useState, useCallback, useMemo } from 'react';
import '../assets/css/ReviewCarousel.css';
import profile from '../assets/images/prfimg.jpg';

const Slider = () => {
  const [active, setActive] = useState(0); // Initial active slide index
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Memoize the pattern array
  const pattern = useMemo(() => [0, 1, 2, 1], []);

  const loadShow = useCallback(() => {
    const items = document.querySelectorAll('.slider .item');
    items.forEach((item, index) => {
      let stt = index - pattern[active];
      
      if (stt === 0) {
        // Active slide
        item.style.transform = 'translateX(-50%) scale(1)';
        item.style.zIndex = 1;
        item.style.filter = 'none';
        item.style.opacity = 1;
      } else if (stt === 1 || stt === -pattern.length + 1) {
        // Right slide
        item.style.transform = 'translateX(45%) scale(0.8)';
        item.style.zIndex = 0;
        item.style.filter = 'blur(5px)';
        item.style.opacity = 0.6;
      } else if (stt === -1 || stt === pattern.length - 1) {
        // Left slide
        item.style.transform = 'translateX(-145%) scale(0.8)';
        item.style.zIndex = 0;
        item.style.filter = 'blur(5px)';
        item.style.opacity = 0.6;
      } else {
        // Hidden slides
        item.style.transform = 'translateX(50%) scale(0)';
        item.style.zIndex = 0;
        item.style.filter = 'blur(5px)';
        item.style.opacity = 0;
      }
    });
  }, [active, pattern]);

  useEffect(() => {
    loadShow();
  }, [active, loadShow]);

  useEffect(() => {
    let intervalId;
    if (hoveredIndex !== pattern[active]) {
      intervalId = setInterval(() => {
        setActive(prevActive => (prevActive + 1) % pattern.length);
      }, 5000);
    }
    return () => clearInterval(intervalId);
  }, [active, hoveredIndex, pattern]);

  const next = () => {
    setActive(prevActive => (prevActive + 1) % pattern.length);
  };

  const prev = () => {
    setActive(prevActive => (prevActive - 1 + pattern.length) % pattern.length);
  };

  return (
    <div className="slider mt-3">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="item"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className='home-header mb-3'>
            <img src={profile} className="hr-avatar" alt="Profile" />
            <h1 className='home-author'>
              {index === 0 ? 'Neelu Y' :
               index === 1 ? 'Durga Bhavani' :
               index === 2 ? 'Poornima Chinta' : ' '}
            </h1>
          </div>
          <p className='home-comment'>
            {index === 0 ? 'Padmalatha garu is a very accurate astrologer. She has guided me so many times in my life. Her simple remedies really helped me a lot in dealing with major obstacles in my life.' :
             index === 1 ? 'I am following her astrology for more than 6yrs it helped me a lot in real life thank u so much padmalathagaru(mathaji)' :
             index === 2 ? 'Padmalatha garu has been guiding me for almost 8 years and her predictions are very accurate and her remedies give good results.' : ' '}
          </p>
          <div className="home-rating">
            {[...Array(5)].map((_, starIndex) => (
              <i key={starIndex} className="bi bi-star-fill"></i>
            ))}
          </div>
        </div>
      ))}
      {active !== 0 && <button id="prev" onClick={prev}>&lt;</button>}
      {active !== 2 && <button id="next" onClick={next}>&gt;</button>}
    </div>
  );
};

export default Slider;
