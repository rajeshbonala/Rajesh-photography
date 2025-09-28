# EmailJS Setup Guide for Photography Website

## Step-by-Step Setup Instructions

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up using your email: `varunphotography002@gmail.com`
3. Use password: `Varun@123@`

### 2. Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** as the service provider
4. Service Name: `service_photography`
5. Connect your Gmail account: `varunphotography002@gmail.com`
6. Note down the **Service ID** (it will look like `service_xxxxxxx`)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Template Name: `template_contact_form`
4. Use this template content:

```
Subject: New Contact Form Submission - {{from_name}}

Hello Varun,

You have received a new contact form submission from your photography website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Interest: {{service}}
Message: {{message}}

Please respond to this inquiry as soon as possible.

Best regards,
Your Photography Website
```

5. Save the template and note down the **Template ID** (it will look like `template_xxxxxxx`)

### 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (it will look like `xxxxxxxxxxxxxxxx`)

### 5. Update Configuration
Update the file `src/config/emailjs.js` with your actual values:

```javascript
export const EMAILJS_CONFIG = {
  USER_ID: 'varunphotography002@gmail.com',
  SERVICE_ID: 'your_actual_service_id_here', // Replace with actual Service ID
  TEMPLATE_ID: 'your_actual_template_id_here', // Replace with actual Template ID
  PUBLIC_KEY: 'your_actual_public_key_here' // Replace with actual Public Key
};
```

### 6. Test the Implementation
1. Start your development server: `npm start`
2. Navigate to the Contact page
3. Fill out the contact form
4. Submit the form
5. Check your email at `varunphotography002@gmail.com` for the form submission

## Important Notes

- **Security**: The current configuration includes your password in the code, which is not secure for production. For production, use EmailJS's built-in authentication instead.
- **Rate Limits**: EmailJS has rate limits on the free plan (200 emails/month).
- **Testing**: Always test the form before deploying to production.

## Troubleshooting

### Common Issues:
1. **"Service not found"**: Make sure the Service ID is correct
2. **"Template not found"**: Make sure the Template ID is correct
3. **"Invalid public key"**: Make sure the Public Key is correct
4. **"Email not sending"**: Check your Gmail account settings and ensure 2FA is properly configured

### Gmail Setup Requirements:
- Enable 2-Factor Authentication on your Gmail account
- Generate an App Password for EmailJS
- Use the App Password instead of your regular password

## Files Modified:
- `src/components/Contact.js` - Updated form submission logic
- `src/components/Contact.css` - Added status message styles
- `src/services/emailService.js` - EmailJS service functions
- `src/config/emailjs.js` - Configuration file

## Next Steps:
1. Complete the EmailJS dashboard setup
2. Update the configuration file with actual IDs
3. Test the contact form
4. Deploy to production

Your contact form is now ready to send emails to `varunphotography002@gmail.com`!
