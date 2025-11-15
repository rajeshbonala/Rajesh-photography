import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiInstagram, FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { sendContactEmail } from '../services/emailService';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Test function to log form data without sending email
  const testFormData = () => {
    console.log('🧪 Testing Form Data (No Email Sent):');
    console.log('=====================================');
    console.log('👤 Name:', formData.name || 'Not provided');
    console.log('📧 Email:', formData.email || 'Not provided');
    console.log('📞 Phone:', formData.phone || 'Not provided');
    console.log('🎯 Service Interest:', formData.service || 'Not specified');
    console.log('💬 Message:', formData.message || 'No message');
    console.log('⏰ Test Time:', new Date().toLocaleString());
    console.log('=====================================');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Log form details to console
    console.log('📝 Contact Form Submission Details:');
    console.log('=====================================');
    console.log('👤 Name:', formData.name || 'Not provided');
    console.log('📧 Email:', formData.email || 'Not provided');
    console.log('📞 Phone:', formData.phone || 'Not provided');
    console.log('🎯 Service Interest:', formData.service || 'Not specified');
    console.log('💬 Message:', formData.message || 'No message');
    console.log('⏰ Submission Time:', new Date().toLocaleString());
    console.log('=====================================');
    
    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        console.log('✅ Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('❌ Email sending failed:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('❌ Unexpected error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'varunphotography002@gmail.com',
      link: 'mailto:varunphotography002@gmail.com'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '9963562764',
      link: 'tel:9963562764'
    },
    {
      icon: <FiMapPin />,
      title: 'Studio Location',
      value: 'Jubilee Hills Road no 5, Srinagar colony',
      link: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    { icon: <FiInstagram />, name: 'Instagram', url: 'https://www.instagram.com/varun_photography002?igsh=MXRiMTF6azRpaXV2aQ==' },
    { icon: <FiFacebook />, name: 'Facebook', url: 'https://facebook.com' },
    { icon: <FiTwitter />, name: 'Twitter', url: 'https://twitter.com' },
    { icon: <FiLinkedin />, name: 'LinkedIn', url: 'https://linkedin.com' }
  ];

  return (
    <div className="contact page-transition">
      <div className="contact-hero section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">
              Get in <span className="text-gold">Touch</span>
            </h1>
            <p className="section-subtitle">
              Ready to capture your story? Let's discuss your photography needs and create something beautiful together.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="contact-content section" ref={ref}>
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="form-title">Send me a Message</h2>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="form-status success">
                  <FiMail className="status-icon" />
                  <span>Thank you for your message! I will get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="form-status error">
                  <span>Sorry, there was an error sending your message. Please try again or contact me directly.</span>
                </div>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a service</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="portrait">Portrait Photography</option>
                    <option value="fashion">Fashion Photography</option>
                    <option value="travel">Travel Photography</option>
                    <option value="commercial">Commercial Photography</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Tell me about your photography needs..."
                  ></textarea>
                </div>

                <div className="form-buttons">
                 {/* <button
                    type="button"
                    onClick={testFormData}
                    className="btn btn-secondary test-btn"
                    disabled={isSubmitting}
                  >
                    Test Console Log
                  </button>
                  */}
                  <button
                    type="submit"
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FiSend className="btn-icon" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              className="contact-info-container"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="info-title">Contact Information</h2>
              
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-info-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <div className="info-icon">
                      {info.icon}
                    </div>
                    <div className="info-content">
                      <h3 className="info-label">{info.title}</h3>
                      <a href={info.link} className="info-value">
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="social-links">
                <h3 className="social-title">Follow Me</h3>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 + 0.1 * index }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="business-hours">
                <h3 className="hours-title">Business Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday</span>
                    <span>By appointment only</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
