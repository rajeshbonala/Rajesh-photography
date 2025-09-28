import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

// Initialize EmailJS with your user ID
emailjs.init(EMAILJS_CONFIG.USER_ID);

/**
 * Send contact form email using EmailJS
 * @param {Object} formData - The form data to send
 * @returns {Promise} - Promise that resolves when email is sent
 */
export const sendContactEmail = async (formData) => {
  try {
    // Template parameters for EmailJS
    const templateParams = {
      Name: formData.name,
      Email: formData.email,
      phone: formData.phone || 'Not provided',
      service: formData.service || 'Not specified',
      message: formData.message,
      submission_time: new Date().toLocaleString(),
      to_email: 'varunphotography002@gmail.com'
    };

    // Log EmailJS parameters
    console.log('📤 EmailJS Parameters:');
    console.log('====================');
    console.log('Service ID:', EMAILJS_CONFIG.SERVICE_ID);
    console.log('Template ID:', EMAILJS_CONFIG.TEMPLATE_ID);
    console.log('Public Key:', EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('Template Params:', templateParams);
    console.log('====================');

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    console.log('✅ Email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Send a test email to verify EmailJS configuration
 * @returns {Promise} - Promise that resolves when test email is sent
 */
export const sendTestEmail = async () => {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '1234567890',
    service: 'Test Service',
    message: 'This is a test email from your photography website.'
  };

  return await sendContactEmail(testData);
};
