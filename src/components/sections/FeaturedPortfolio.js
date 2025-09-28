import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight } from 'react-icons/fi';
import './FeaturedPortfolio.css';

const FeaturedPortfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const featuredCategories = [
    {
      id: 1,
      title: 'Weddings',
      description: 'Capturing love stories and magical moments',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      count: '50+'
    },
    {
      id: 2,
      title: 'Portraits',
      description: 'Professional portraits that tell your story',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      count: '200+'
    },
    {
      id: 3,
      title: 'Fashion',
      description: 'Editorial and commercial fashion photography',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      count: '75+'
    },
    {
      id: 4,
      title: 'Travel',
      description: 'Exploring the world through the lens',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      count: '100+'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="featured-section section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="text-gold">Portfolio</span>
          </h2>
          <p className="section-subtitle">
            Explore my latest work across different photography categories
          </p>
        </motion.div>

        <motion.div
          className="featured-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {featuredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="featured-item"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="featured-image-container">
                <img
                  src={category.image}
                  alt={category.title}
                  className="featured-image"
                  loading="lazy"
                />
                <div className="featured-overlay">
                  <div className="featured-content">
                    <h3 className="featured-title">{category.title}</h3>
                    <p className="featured-description">{category.description}</p>
                    <div className="featured-count">{category.count} Photos</div>
                    <Link to={`/portfolio?category=${category.title.toLowerCase()}`} className="featured-link">
                      View Gallery
                      <FiArrowRight className="featured-link-icon" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="featured-cta text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link to="/portfolio" className="btn btn-outline">
            View Full Portfolio
            <FiArrowRight className="btn-icon" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPortfolio;
