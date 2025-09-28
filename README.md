# Professional Photography Portfolio Website

A modern, responsive photography portfolio website built with React.js. This website showcases professional photography work across multiple categories including weddings, portraits, fashion, travel, and commercial photography.

## 🎯 Features

### Core Features
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Portfolio Gallery**: Organized by categories with lightbox functionality
- **Contact Form**: Interactive contact form with validation
- **Services Section**: Detailed service offerings with pricing packages
- **Testimonials**: Client feedback carousel
- **About Section**: Professional biography and achievements
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

### Technical Features
- **React 18**: Latest React features and hooks
- **React Router**: Client-side routing
- **Framer Motion**: Smooth animations and transitions
- **CSS Grid & Flexbox**: Modern layout techniques
- **Intersection Observer**: Scroll-based animations
- **Responsive Images**: Optimized for different screen sizes
- **Performance Optimized**: Lazy loading and code splitting

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd photography-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections (Hero, FeaturedPortfolio, etc.)
│   ├── Navbar.js          # Navigation component
│   ├── Home.js            # Home page component
│   ├── Portfolio.js       # Portfolio page component
│   ├── About.js           # About page component
│   ├── Services.js        # Services page component
│   ├── Contact.js         # Contact page component
│   └── Footer.js          # Footer component
├── App.js                 # Main app component with routing
├── App.css                # App-specific styles
├── index.js               # Entry point
└── index.css              # Global styles
```

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy color customization. Edit the variables in `src/index.css`:

```css
:root {
  --primary-black: #0a0a0a;
  --secondary-black: #1a1a1a;
  --accent-gold: #d4af37;
  --accent-gold-light: #f4e4a6;
  --text-white: #ffffff;
  --text-gray: #a0a0a0;
  --text-light-gray: #d0d0d0;
  --border-color: #333333;
}
```

### Content
- **Images**: Replace placeholder images with your own photography work
- **Text**: Update all text content in the respective component files
- **Contact Information**: Update contact details in `Contact.js`
- **Social Links**: Update social media links in `Footer.js` and `Contact.js`

### Portfolio Images
Add your portfolio images by updating the `portfolioImages` array in `Portfolio.js`:

```javascript
const portfolioImages = [
  {
    id: 1,
    category: 'weddings',
    src: 'path/to/your/image.jpg',
    title: 'Image Title'
  },
  // Add more images...
];
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the `build` folder to an S3 bucket

## 📈 Performance Optimization

- **Image Optimization**: Use WebP format and appropriate sizes
- **Lazy Loading**: Images load as they come into view
- **Code Splitting**: React Router automatically splits code
- **Minification**: Production build includes minified assets

## 🔧 Dependencies

### Core Dependencies
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-router-dom`: ^6.3.0
- `framer-motion`: ^10.16.4
- `react-intersection-observer`: ^9.5.2
- `react-icons`: ^4.10.1

### Development Dependencies
- `react-scripts`: 5.0.1
- `@testing-library/react`: ^13.3.0
- `@testing-library/jest-dom`: ^5.16.4

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Email: hello@photographyportfolio.com
- Phone: +1 (555) 123-4567

## 🎯 Future Enhancements

- [ ] E-commerce integration for selling prints
- [ ] Client login area for private galleries
- [ ] Online booking system with calendar integration
- [ ] Newsletter subscription
- [ ] Blog functionality
- [ ] Advanced image filtering and search
- [ ] Multi-language support
- [ ] Dark/Light theme toggle

---

**Built with ❤️ using React.js**
