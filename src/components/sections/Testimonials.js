import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiStar, FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      id: 1,
      name: 'Bharath & Srija',
      role: 'Wedding Couple',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      text: 'Our wedding photos are absolutely stunning! Every moment was captured beautifully, from the first look to the last dance. The photographer made us feel so comfortable and natural throughout the entire day.',
      rating: 5
    },
    {
      id: 2,
      name: 'Ramya Reddy',
      role: 'Fashion Model',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      text: 'Working with this photographer was an incredible experience. They have an amazing eye for detail and know exactly how to capture the perfect shot. My portfolio has never looked better!',
      rating: 5
    },
    {
      id: 3,
      name: 'Sai kiran',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      text: 'The professional headshots for our company exceeded all expectations. The photographer captured our team\'s personality while maintaining a professional look. Highly recommended!',
      rating: 5
    },
    {
      id: 4,
      name: 'Sowmya ',
      role: 'Travel Blogger',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
      text: 'The travel photography session was magical! The photographer has a unique ability to capture the essence of each location. The photos tell a story that words simply cannot.',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FiStar
        key={index}
        className={`star ${index < rating ? 'filled' : ''}`}
      />
    ));
  };

  return (
    <section className="testimonials-section section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Client <span className="text-gold">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            Hear what my clients have to say about their photography experience
          </p>
        </motion.div>

        <motion.div
          className="testimonials-container"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="testimonials-carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-content">
                  <FiMessageSquare className="quote-icon" />
                  <p className="testimonial-text">{testimonials[currentIndex].text}</p>
                  
                  <div className="testimonial-rating">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  
                  <div className="testimonial-author">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="author-image"
                    />
                    <div className="author-info">
                      <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                      <p className="author-role">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testimonials-controls">
            <button
              className="control-btn prev-btn"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <FiChevronLeft />
            </button>
            
            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              className="control-btn next-btn"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <FiChevronRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
