import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'portraits', name: 'Portraits' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'travel', name: 'Travel' },
    { id: 'street', name: 'Street' },
    { id: 'nature', name: 'Nature' },
    { id: 'product', name: 'Product' }
  ];

  const portfolioImages = [
    // Weddings
    { id: 1, category: 'weddings', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', title: 'Wedding Ceremony' },
    { id: 2, category: 'weddings', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80', title: 'First Dance' },
    { id: 3, category: 'weddings', src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', title: 'Wedding Rings' },
    
    // Portraits
    { id: 4, category: 'portraits', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', title: 'Professional Portrait' },
    { id: 5, category: 'portraits', src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80', title: 'Studio Portrait' },
    { id: 6, category: 'portraits', src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', title: 'Natural Light Portrait' },
    
    // Fashion
    { id: 7, category: 'fashion', src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', title: 'Fashion Editorial' },
    { id: 8, category: 'fashion', src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', title: 'Street Fashion' },
    { id: 9, category: 'fashion', src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', title: 'Fashion Model' },
    
    // Travel
    { id: 10, category: 'travel', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', title: 'Mountain Landscape' },
    { id: 11, category: 'travel', src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80', title: 'Beach Sunset' },
    { id: 12, category: 'travel', src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80', title: 'Forest Path' },
    
    // Street
    { id: 13, category: 'street', src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', title: 'City Street' },
    { id: 14, category: 'street', src: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', title: 'Urban Life' },
    { id: 15, category: 'street', src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=2024&q=80', title: 'Street Art' },
    
    // Nature
    { id: 16, category: 'nature', src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80', title: 'Wildlife' },
    { id: 17, category: 'nature', src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80', title: 'Nature Close-up' },
    { id: 18, category: 'nature', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', title: 'Mountain View' },
    
    // Product
    { id: 19, category: 'product', src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', title: 'Product Photography' },
    { id: 20, category: 'product', src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', title: 'Commercial Product' },
    { id: 21, category: 'product', src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', title: 'Product Detail' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <div className="portfolio page-transition">
      <div className="portfolio-header section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">
              Photography <span className="text-gold">Portfolio</span>
            </h1>
            <p className="section-subtitle">
              Explore my work across different photography categories and styles
            </p>
          </motion.div>

          <motion.div
            className="portfolio-filters"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="portfolio-gallery section" ref={ref}>
        <div className="container">
          <motion.div
            className="portfolio-grid"
            layout
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  className="portfolio-item"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="portfolio-image-container">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="portfolio-image"
                      loading="lazy"
                    />
                    <div className="portfolio-overlay">
                      <button
                        className="zoom-btn"
                        onClick={() => openLightbox(image)}
                        aria-label="View image"
                      >
                        <FiZoomIn />
                      </button>
                      <h3 className="portfolio-image-title">{image.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="lightbox-overlay" onClick={closeLightbox}></div>
            <div className="lightbox-content">
              <button className="lightbox-close" onClick={closeLightbox}>
                <FiX />
              </button>
              <button className="lightbox-nav prev" onClick={prevImage}>
                <FiChevronLeft />
              </button>
              <button className="lightbox-nav next" onClick={nextImage}>
                <FiChevronRight />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="lightbox-image"
              />
              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
