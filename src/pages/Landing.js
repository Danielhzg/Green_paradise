import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-background">
        <div className="landing-content">
          <h1 className="company-name">Green Paradise</h1>
          <p className="company-description">
            Welcome to Green Paradise, your one-stop shop for beautiful houseplants! 
            We offer a wide variety of indoor plants that will bring life and freshness 
            to your home. From low-maintenance succulents to elegant tropical plants, 
            we have something for every plant lover. Our carefully curated collection 
            includes plants for every skill level and lighting condition. Start your 
            green journey with us today and transform your living space into a natural oasis.
          </p>
          <Link to="/products" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;

