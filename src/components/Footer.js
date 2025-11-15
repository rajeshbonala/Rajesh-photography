import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiTwitter, FiLinkedin, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Wedding Photography', path: '/services?service=wedding' },
      { name: 'Portrait Photography', path: '/services?service=portrait' },
      { name: 'Fashion Photography', path: '/services?service=fashion' },
      { name: 'Travel Photography', path: '/services?service=travel' }
    ],
    portfolio: [
      { name: 'Weddings', path: '/portfolio?category=weddings' },
      { name: 'Portraits', path: '/portfolio?category=portraits' },
      { name: 'Fashion', path: '/portfolio?category=fashion' },
      { name: 'Travel', path: '/portfolio?category=travel' }
    ],
    company: [
      { name: 'About Me', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' },
      { name: 'Terms & Conditions', path: '/terms' }
      //{ name: 'Blog', path: '/blog' }
    ]
  };

  const socialLinks = [
    { icon: <FiInstagram />, name: 'Instagram', url: 'https://www.instagram.com/varun_photography002?igsh=MXRiMTF6azRpaXV2aQ==' },
    { icon: <FiFacebook />, name: 'Facebook', url: 'https://facebook.com' },
    { icon: <FiTwitter />, name: 'Twitter', url: 'https://twitter.com' },
    { icon: <FiLinkedin />, name: 'LinkedIn', url: 'https://linkedin.com' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand-info">
                <h3 className="brand-name">
                  <span className="brand-text">Varun</span>
                  <span className="brand-accent">Photography</span>
                </h3>
                <p className="brand-description">
                  Capturing stories through every frame. Professional photography 
                  services for weddings, portraits, fashion, and travel.
                </p>
              </div>
              
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4 className="link-group-title">Services</h4>
                <ul className="link-list">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-group">
                <h4 className="link-group-title">Portfolio</h4>
                <ul className="link-list">
                  {footerLinks.portfolio.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-group">
                <h4 className="link-group-title">Company</h4>
                <ul className="link-list">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright">
                © {currentYear} Photography Portfolio. All rights reserved.
              </p>
              <div className="footer-bottom-links">
                <Link to="/terms" className="footer-bottom-link">Terms and Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="back-to-top-btn"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FiArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
