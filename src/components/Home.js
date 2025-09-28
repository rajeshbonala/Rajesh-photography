import React from 'react';
import Hero from './sections/Hero';
import FeaturedPortfolio from './sections/FeaturedPortfolio';
import Testimonials from './sections/Testimonials';
import './Home.css';

const Home = () => {
  return (
    <div className="home page-transition">
      <Hero />
      <FeaturedPortfolio />
      <Testimonials />
    </div>
  );
};

export default Home;
