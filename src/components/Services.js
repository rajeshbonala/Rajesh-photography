import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';
import { FiCamera, FiHeart, FiMapPin, FiUsers, FiShoppingBag, FiGlobe } from 'react-icons/fi';
import './Services.css';

const Services = () => {
  const [selectedPackage, setSelectedPackage] = useState('premium');
  const location = useLocation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Handle service-specific navigation from query parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const serviceType = urlParams.get('service');
    
    if (serviceType) {
      // Scroll to services section after a short delay to ensure page is loaded
      setTimeout(() => {
        const servicesSection = document.querySelector('.services-grid');
        if (servicesSection) {
          servicesSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location.search]);

  const services = [
    {
      id: 1,
      icon: <FiHeart />,
      title: 'Weddings & Events',
      description: 'Capturing your special day with elegance and style. From engagement shoots to the big day, every moment is preserved beautifully.',
      features: ['Full day coverage', 'Engagement session', 'Online gallery', 'Print rights', 'Wedding album'],
      price: 'Starting from $2,500'
    },
    {
      id: 2,
      icon: <FiUsers />,
      title: 'Portraits & Family',
      description: 'Professional portraits that capture your personality and family bonds. Perfect for personal branding and family memories.',
      features: ['1-2 hour session', 'Multiple locations', 'Professional editing', 'Online gallery', 'Print rights'],
      price: 'Starting from $350'
    },
    {
      id: 3,
      icon: <FiShoppingBag />,
      title: 'Fashion & Lifestyle',
      description: 'Editorial and commercial fashion photography for models, brands, and lifestyle content creators.',
      features: ['Studio or location', 'Professional styling', 'High-end editing', 'Commercial rights', 'Portfolio building'],
      price: 'Starting from $500'
    },
    {
      id: 4,
      icon: <FiGlobe />,
      title: 'Travel & Street',
      description: 'Documentary-style photography capturing the essence of places and cultures around the world.',
      features: ['Location scouting', 'Cultural immersion', 'Storytelling approach', 'High-resolution images', 'Travel blog content'],
      price: 'Starting from $800'
    },
    {
      id: 5,
      icon: <FiCamera />,
      title: 'Commercial & Product',
      description: 'Professional product photography and commercial shoots for businesses and e-commerce.',
      features: ['Studio setup', 'Product styling', 'Multiple angles', 'Commercial rights', 'E-commerce ready'],
      price: 'Starting from $400'
    },
    {
      id: 6,
      icon: <FiMapPin />,
      title: 'Real Estate',
      description: 'High-quality real estate photography that showcases properties in their best light.',
      features: ['Interior & exterior', 'Aerial photography', 'Virtual tours', 'Quick turnaround', 'Marketing materials'],
      price: 'Starting from $300'
    }
  ];

  const packages = [
    {
      id: 'basic',
      name: 'Basic',
      price: '$350',
      duration: '1-2 hours',
      features: [
        'Professional photography session',
        'Basic editing (10-15 images)',
        'Online gallery',
        'Print rights',
        '1 week delivery'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$650',
      duration: '3-4 hours',
      features: [
        'Extended photography session',
        'Advanced editing (25-30 images)',
        'Online gallery',
        'Print rights',
        'Professional retouching',
        '3-5 day delivery',
        'Location scouting'
      ],
      popular: true
    },
    {
      id: 'custom',
      name: 'Custom',
      price: 'Contact',
      duration: 'Flexible',
      features: [
        'Full day coverage',
        'Unlimited images',
        'Premium editing',
        'Online gallery',
        'Print rights',
        'Custom album design',
        'Priority scheduling',
        'Consultation included'
      ],
      popular: false
    }
  ];

  return (
    <div className="services page-transition">
      <div className="services-hero section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">
              Photography <span className="text-gold">Services</span>
            </h1>
            <p className="section-subtitle">
              Professional photography services tailored to your needs. From intimate portraits 
              to grand celebrations, I'm here to capture your story.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="services-grid section" ref={ref}>
        <div className="container">
          <motion.div
            className="services-list"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="service-price">{service.price}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="pricing-section section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              Pricing <span className="text-gold">Packages</span>
            </h2>
            <p className="section-subtitle">
              Choose the perfect package for your photography needs
            </p>
          </motion.div>

          <motion.div
            className="pricing-grid"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                className={`pricing-card ${pkg.popular ? 'popular' : ''} ${selectedPackage === pkg.id ? 'selected' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {pkg.popular && <div className="popular-badge">Most Popular</div>}
                <div className="pricing-header">
                  <h3 className="package-name">{pkg.name}</h3>
                  <div className="package-price">
                    <span className="price">{pkg.price}</span>
                    <span className="duration">/{pkg.duration}</span>
                  </div>
                </div>
                <ul className="package-features">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="btn btn-primary package-btn">
                  {pkg.id === 'custom' ? 'Contact Me' : 'Choose Package'}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="cta-section section">
        <div className="container">
          <motion.div
            className="cta-content text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              Ready to <span className="text-gold">Get Started?</span>
            </h2>
            <p className="section-subtitle">
              Let's discuss your photography needs and create something beautiful together
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Request a Quote</button>
              <button className="btn btn-outline">View Portfolio</button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
