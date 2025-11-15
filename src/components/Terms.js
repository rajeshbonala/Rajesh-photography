import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Terms.css';

const Terms = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="terms page-transition">
      <div className="terms-hero section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">
              Terms and <span className="text-gold">Conditions</span>
            </h1>
            <p className="section-subtitle">
              Please read these terms carefully before using our photography services.
            </p>
            <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>
          </motion.div>
        </div>
      </div>

      <div className="terms-content section" ref={ref}>
        <div className="container">
          <motion.div
            className="terms-container"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="terms-sections">
              
              <motion.section
                className="terms-section"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="section-heading">1. Acceptance of Terms</h2>
                <p className="section-text">
                  By accessing and using the Varun Photography website (the "Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </motion.section>

              <motion.section
                className="terms-section"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="section-heading">2. Website Usage</h2>
                <div className="subsection">
                  <h3 className="subsection-heading">2.1 Permitted Use</h3>
                  <ul className="terms-list">
                    <li>You may use this website for lawful purposes only</li>
                    <li>You may browse and view content for personal, non-commercial purposes</li>
                    <li>You may contact us through the provided contact forms for legitimate business inquiries</li>
                  </ul>
                </div>
                <div className="subsection">
                  <h3 className="subsection-heading">2.2 Prohibited Use</h3>
                  <p className="section-text">You agree not to:</p>
                  <ul className="terms-list">
                    <li>Use the website for any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>Violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>Transmit or procure the sending of any advertising or promotional material without our prior written consent</li>
                    <li>Impersonate or attempt to impersonate Varun Photography, any employee, or any other person or entity</li>
                    <li>Engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                className="terms-section"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="section-heading">3. Copyright and Ownership of Photographs</h2>
                <div className="subsection">
                  <h3 className="subsection-heading">3.1 Copyright Protection</h3>
                  <ul className="terms-list">
                    <li>All photographs displayed on this website are the exclusive property of Varun Photography</li>
                    <li>All photographs are protected by Indian copyright laws and international copyright treaties</li>
                    <li>The photographer retains full copyright ownership of all images unless explicitly transferred in writing</li>
                  </ul>
                </div>
                <div className="subsection">
                  <h3 className="subsection-heading">3.2 Client Photographs</h3>
                  <ul className="terms-list">
                    <li>For commissioned work, clients receive usage rights as specified in individual contracts</li>
                    <li>Raw files remain the property of Varun Photography unless specifically included in the contract</li>
                    <li>Clients may not edit, alter, or modify delivered photographs without written permission</li>
                    <li>Commercial use of photographs requires additional licensing agreements</li>
                  </ul>
                </div>
                <div className="subsection">
                  <h3 className="subsection-heading">3.3 Portfolio Images</h3>
                  <ul className="terms-list">
                    <li>Images displayed in the portfolio section are for promotional purposes only</li>
                    <li>These images may not be downloaded, copied, or used without explicit written permission</li>
                    <li>Any unauthorized use constitutes copyright infringement</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                className="terms-section"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="section-heading">4. Booking and Payment Policies</h2>
                <div className="subsection">
                  <h3 className="subsection-heading">4.1 Booking Process</h3>
                  <ul className="terms-list">
                    <li>All bookings must be confirmed in writing via email or signed contract</li>
                    <li>A non-refundable booking fee may be required to secure your date</li>
                    <li>Final payment terms will be specified in individual service agreements</li>
                  </ul>
                </div>
                <div className="subsection">
                  <h3 className="subsection-heading">4.2 Payment Terms</h3>
                  <ul className="terms-list">
                    <li>Payment schedules will be outlined in individual contracts</li>
                    <li>Accepted payment methods include bank transfers, digital payments, and cash (as specified)</li>
                    <li>Late payment fees may apply as per contract terms</li>
                    <li>All prices are subject to applicable taxes</li>
                  </ul>
                </div>
                <div className="subsection">
                  <h3 className="subsection-heading">4.3 Service Modifications</h3>
                  <ul className="terms-list">
                    <li>Any changes to the original booking must be requested in writing</li>
                    <li>Additional charges may apply for significant changes to the scope of work</li>
                    <li>Changes requested less than 48 hours before the event may incur additional fees</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                className="terms-section"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="section-heading">5. Cancellation and Refund Policy</h2>
                <div className="subsection">
                  <h3 className="subsection-heading">5.1 Client Cancellation</h3>
                  <ul className="terms-list">
                    <li>Cancellations made more than 30 days before the event: Full refund minus booking fee</li>
                    <li>Cancellations made 15-30 days before the event: 50% refund minus booking fee</li>
                    <li>Cancellations made less than 15 days before the event: No refund</li>
                    <li>Booking fees are non-refundable in all cases</li>
                  </ul>
                </div>
                <div className="subsection">
                  <h3 className="subsection-heading">5.2 Photographer Cancellation</h3>
                  <p className="section-text">In the unlikely event that Varun Photography must cancel due to circumstances beyond our control, we will:</p>
                  <ul className="terms-list">
                    <li>Provide a full refund of all payments made</li>
                    <li>Assist in finding a replacement photographer (subject to availability)</li>
                    <li>Not be liable for any additional costs incurred by the client</li>
                  </ul>
                </div>
                <div className="subsection">
                  <h3 className="subsection-heading">5.3 Force Majeure</h3>
                  <p className="section-text">
                    Neither party shall be liable for delays or failures due to circumstances beyond reasonable control. This includes but is not limited to natural disasters, government restrictions, or health emergencies.
                  </p>
                </div>
              </motion.section>

              <motion.section
                className="terms-section"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="section-heading">6. Restrictions on Misuse of Content</h2>
                <div className="subsection">
                  <h3 className="subsection-heading">6.1 Unauthorized Use</h3>
                  <p className="section-text">You agree not to:</p>
                  <ul className="terms-list">
                    <li>Download, copy, or reproduce any photographs without explicit permission</li>
                    <li>Use photographs for commercial purposes without proper licensing</li>
                    <li>Edit, modify, or create derivative works from our photographs</li>
                    <li>Remove watermarks or copyright notices from images</li>
                    <li>Share photographs on social media without proper attribution</li>
                  </ul>
                </div>
                <div className="subsection">
                  <h3 className="subsection-heading">6.2 Enforcement</h3>
                  <ul className="terms-list">
                    <li>Violation of these restrictions may result in legal action</li>
                    <li>We reserve the right to pursue all available remedies under law</li>
                    <li>Damages may include but are not limited to actual damages, statutory damages, and attorney fees</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                className="terms-section"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h2 className="section-heading">7. Limitation of Liability</h2>
                <div className="subsection">
                  <h3 className="subsection-heading">7.1 General Limitations</h3>
                  <ul className="terms-list">
                    <li>Varun Photography's liability is limited to the total amount paid for services</li>
                    <li>We are not liable for any indirect, incidental, special, or consequential damages</li>
                    <li>This includes but is not limited to loss of profits, data, or business opportunities</li>
                  </ul>
                </div>
                <div className="subsection">
                  <h3 className="subsection-heading">7.2 Technical Limitations</h3>
                  <ul className="terms-list">
                    <li>We are not responsible for technical failures beyond our control</li>
                    <li>This includes equipment malfunctions, power outages, or internet connectivity issues</li>
                    <li>We maintain professional equipment and backup systems, but cannot guarantee against all technical failures</li>
                  </ul>
                </div>
                <div className="subsection">
                  <h3 className="subsection-heading">7.3 Client Responsibilities</h3>
                  <ul className="terms-list">
                    <li>Clients are responsible for obtaining necessary permits and permissions for photography locations</li>
                    <li>Clients must inform us of any restrictions or special requirements in advance</li>
                    <li>We are not liable for issues arising from client-provided information or requirements</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                className="terms-section"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h2 className="section-heading">8. Privacy and Data Protection</h2>
                <div className="subsection">
                  <h3 className="subsection-heading">8.1 Information Collection</h3>
                  <ul className="terms-list">
                    <li>We collect information through contact forms and service inquiries</li>
                    <li>Personal information is used solely for providing photography services</li>
                    <li>We do not sell or share personal information with third parties without consent</li>
                  </ul>
                </div>
                <div className="subsection">
                  <h3 className="subsection-heading">8.2 Data Security</h3>
                  <ul className="terms-list">
                    <li>We implement reasonable security measures to protect your information</li>
                    <li>However, no method of transmission over the internet is 100% secure</li>
                    <li>We cannot guarantee absolute security of your information</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                className="terms-section"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <h2 className="section-heading">9. Governing Law and Jurisdiction</h2>
                <div className="subsection">
                  <h3 className="subsection-heading">9.1 Applicable Law</h3>
                  <p className="section-text">
                    These terms and conditions are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of Indian courts.
                  </p>
                </div>
                <div className="subsection">
                  <h3 className="subsection-heading">9.2 Dispute Resolution</h3>
                  <ul className="terms-list">
                    <li>We encourage resolving disputes through direct communication first</li>
                    <li>If necessary, disputes will be resolved through appropriate legal channels in India</li>
                    <li>Both parties agree to attempt good faith negotiations before pursuing legal action</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                className="terms-section"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <h2 className="section-heading">10. Modifications to Terms</h2>
                <div className="subsection">
                  <h3 className="subsection-heading">10.1 Updates</h3>
                  <ul className="terms-list">
                    <li>We reserve the right to modify these terms at any time</li>
                    <li>Updated terms will be posted on this website with a new "Last Updated" date</li>
                    <li>Continued use of the website after changes constitutes acceptance of new terms</li>
                  </ul>
                </div>
                <div className="subsection">
                  <h3 className="subsection-heading">10.2 Notification</h3>
                  <ul className="terms-list">
                    <li>Significant changes will be communicated via email to registered users</li>
                    <li>It is your responsibility to review these terms periodically</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                className="terms-section"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <h2 className="section-heading">11. Contact Information</h2>
                <p className="section-text">For questions regarding these Terms and Conditions, please contact:</p>
                <div className="contact-info">
                  <h3 className="contact-title">Varun Photography</h3>
                  <ul className="contact-list">
                    <li>Email: varunphotography002@gmail.com</li>
                    <li>Phone: 9963562764</li>
                    <li>Address: Jubilee Hills Road no 5, Srinagar colony</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                className="terms-section"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <h2 className="section-heading">12. Severability</h2>
                <p className="section-text">
                  If any provision of these terms is found to be unenforceable or invalid, the remaining provisions will remain in full force and effect.
                </p>
              </motion.section>

              <motion.section
                className="terms-section"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <h2 className="section-heading">13. Entire Agreement</h2>
                <p className="section-text">
                  These Terms and Conditions, together with any individual service contracts, constitute the entire agreement between you and Varun Photography regarding the use of this website and services.
                </p>
              </motion.section>

              <motion.div
                className="terms-footer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <p className="agreement-text">
                  <strong>By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</strong>
                </p>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
