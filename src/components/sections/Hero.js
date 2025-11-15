import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-title"
            >
              Capturing Stories
              <span className="text-gold"> Through Every Frame</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-subtitle"
            >
              Varun Photography specializes in weddings, portraits, events, outdoor shoots, baby shoots, 
              and cinematic photography. Every moment tells a story, and I'm here to capture yours.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link to="/portfolio" className="btn btn-primary">
                View Portfolio
                <FiArrowRight className="btn-icon" />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Book a Shoot
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator 
      <motion.button
        className="scroll-indicator"
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{ y: 5 }}
      >
        <span className="scroll-text">Scroll to explore</span>
        <FiChevronDown className="scroll-icon" />
      </motion.button> */}

      {/* Floating Elements */}
      <div className="hero-floating-elements">
        <motion.div
          className="floating-element element-1"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="floating-element element-2"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="floating-element element-3"
          animate={{ y: [-5, 15, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;
