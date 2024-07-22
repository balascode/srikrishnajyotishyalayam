import React from 'react';
import '../assets/css/services.css';

const Services = () => (
  <div className="container-fluid services-complete pt-3">
    <h1 className="text-center mb-4">Our Services</h1>
    <div className="row">
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
    </div>
    <div className="row">
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
);

export default Services;
