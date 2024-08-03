import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/css/services.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bghoro from '../assets/images/bghoro3.png';
import vastu from '../assets/images/vastu.png';
import numerology from '../assets/images/numerology.png';
import business from '../assets/images/Business.png';
import medical from '../assets/images/medical.png';
import marriage from '../assets/images/marriage.png';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const location = useLocation();

  const useScrollToHash = () => {
    useEffect(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
  };

  useScrollToHash();
  
  useEffect(() => {
  
    gsap.from(".desc2", {
      scrollTrigger: {
        trigger: ".desc2",
        start: "top 80%",
        end: "bottom 60%",
      },
      x: -100,
      opacity: 0,
      duration: 2.0,
      ease: "power3.out"
    });
  
    gsap.from(".desc", {
      scrollTrigger: {
        trigger: ".desc",
        start: "top 80%",
        end: "bottom 60%",
      },
      x: 100,
      opacity: 0,
      duration: 2.0,
      ease: "power3.out"
    });
  }, []);

  return (
    <div className='service-cont'>
      <div>
        <div className="container">
          <div className="row">

            <div id="Horoscope" className="col-md-12 desc pl-2 pr-0 mb-3 shadow-lg">
            <div className='d-flex flex-row'>
            <div className='tp-container pr-0 d-flex flex-column justify-content-center'>
              <h1 className="text-dark title">HOROSCOPE</h1>
              <p className="text-dark para">
              In astrology, a horoscope is a chart or diagram representing the positions of the Sun, Moon, planets, and astrological aspects at a specific moment, typically the time of a person's birth. This chart is used to gain insight into an individual's personality traits, behaviors, and potential life events. Each sign of the zodiac, corresponding to different periods in the year, influences these interpretations. Astrologers analyze the horoscope to provide guidance on various aspects of life, such as relationships, career, and health. Believers use horoscopes for personal reflection and to navigate decisions, seeking alignment with cosmic patterns.
              </p>
            </div>
                <img src={bghoro} alt="" className='all-img text-end'/>
            </div>
            </div>

            <div id="Vastu" className="col-md-12 desc2 pl-0 pr-0 mb-3 shadow-lg">
            <div className='d-flex flex-row'>
            <img src={vastu} alt="" className='all-img-left text-end'/>
            <div className='tp-container pr-0 d-flex flex-column justify-content-center'>
              <h1 className="text-dark title">Vastu Shastra</h1>
              <p className="text-dark para">
              In astrology, a horoscope is a chart or diagram representing the positions of the Sun, Moon, planets, and astrological aspects at a specific moment, typically the time of a person's birth. This chart is used to gain insight into an individual's personality traits, behaviors, and potential life events. Each sign of the zodiac, corresponding to different periods in the year, influences these interpretations. Astrologers analyze the horoscope to provide guidance on various aspects of life, such as relationships, career, and health. Believers use horoscopes for personal reflection and to navigate decisions, seeking alignment with cosmic patterns.
              </p>
            </div>
                
            </div>
            </div>

            <div id="Numerology" className="col-md-12 desc pl-2 pr-0 mb-3 shadow-lg">
            <div className='d-flex flex-row'>
            <div className='tp-container pr-0 d-flex flex-column justify-content-center'>
              <h1 className="text-dark title">Numerology</h1>
              <p className="text-dark para">
              In astrology, a horoscope is a chart or diagram representing the positions of the Sun, Moon, planets, and astrological aspects at a specific moment, typically the time of a person's birth. This chart is used to gain insight into an individual's personality traits, behaviors, and potential life events. Each sign of the zodiac, corresponding to different periods in the year, influences these interpretations. Astrologers analyze the horoscope to provide guidance on various aspects of life, such as relationships, career, and health. Believers use horoscopes for personal reflection and to navigate decisions, seeking alignment with cosmic patterns.
              </p>
            </div>
                <img src={numerology} alt="" className='all-img text-end'/>
            </div>
            </div>

            <div id="Business" className="col-md-12 desc2 pl-0 pr-0 mb-3 shadow-lg">
            <div className='d-flex flex-row'>
            <img src={business} alt="" className='all-img-left text-end'/>
            <div className='tp-container pr-0 d-flex flex-column justify-content-center'>
              <h1 className="text-dark title">Business Astrology</h1>
              <p className="text-dark para">
              In astrology, a horoscope is a chart or diagram representing the positions of the Sun, Moon, planets, and astrological aspects at a specific moment, typically the time of a person's birth. This chart is used to gain insight into an individual's personality traits, behaviors, and potential life events. Each sign of the zodiac, corresponding to different periods in the year, influences these interpretations. Astrologers analyze the horoscope to provide guidance on various aspects of life, such as relationships, career, and health. Believers use horoscopes for personal reflection and to navigate decisions, seeking alignment with cosmic patterns.
              </p>
            </div>
                
            </div>
            </div>

            <div id="Medical" className="col-md-12 desc pl-2 pr-0 mb-3 shadow-lg">
            <div className='d-flex flex-row'>
            <div className='tp-container pr-0 d-flex flex-column justify-content-center'>
              <h1 className="text-dark title">Medical Astrology</h1>
              <p className="text-dark para">
              In astrology, a horoscope is a chart or diagram representing the positions of the Sun, Moon, planets, and astrological aspects at a specific moment, typically the time of a person's birth. This chart is used to gain insight into an individual's personality traits, behaviors, and potential life events. Each sign of the zodiac, corresponding to different periods in the year, influences these interpretations. Astrologers analyze the horoscope to provide guidance on various aspects of life, such as relationships, career, and health. Believers use horoscopes for personal reflection and to navigate decisions, seeking alignment with cosmic patterns.
              </p>
            </div>
                <img src={medical} alt="" className='all-img text-end'/>
            </div>
            </div>

            <div id="Marriage" className="col-md-12 desc2 pl-0 pr-0 mb-3 shadow-lg">
            <div className='d-flex flex-row'>
            <img src={marriage} alt="" className='all-img-left text-end'/>
            <div className='tp-container pr-0 d-flex flex-column justify-content-center'>
              <h1 className="text-dark title"> Marriage Astrology</h1>
              <p className="text-dark para">
              In astrology, a horoscope is a chart or diagram representing the positions of the Sun, Moon, planets, and astrological aspects at a specific moment, typically the time of a person's birth. This chart is used to gain insight into an individual's personality traits, behaviors, and potential life events. Each sign of the zodiac, corresponding to different periods in the year, influences these interpretations. Astrologers analyze the horoscope to provide guidance on various aspects of life, such as relationships, career, and health. Believers use horoscopes for personal reflection and to navigate decisions, seeking alignment with cosmic patterns.
              </p>
            </div>
                
            </div>
            </div>

          </div>
        </div>
      </div>
      </div>
  );
};

export default Services;
