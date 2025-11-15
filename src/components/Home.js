import React from 'react';
import Hero from './sections/Hero';
import FeaturedPortfolio from './sections/FeaturedPortfolio';
import Testimonials from './sections/Testimonials';
import './Home.css';

const Home = () => {
  return (
    <div className="home page-transition">
      <Hero />
      <section className="branding-section">
        <div className="container">
          <p className="branding-text">Welcome to Varun Photography – your trusted destination for professional photoshoots including weddings, portraits, events, outdoor shoots, baby shoots and more.</p>
        </div>
      </section>
      <FeaturedPortfolio />
      <Testimonials />
    </div>
  );
};

export default Home;
