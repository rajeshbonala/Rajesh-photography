import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiCamera, FiGlobe, FiHeart } from 'react-icons/fi';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const achievements = [
    {
      id: 1,
      icon: <FiAward />,
      title: 'Awards Won',
      count: '15+',
      description: 'International photography awards and recognition'
    },
    {
      id: 2,
      icon: <FiCamera />,
      title: 'Photos Captured',
      count: '10,000+',
      description: 'Professional photographs across various genres'
    },
    {
      id: 3,
      icon: <FiGlobe />,
      title: 'Countries Visited',
      count: '25+',
      description: 'Travel photography across the globe'
    },
    {
      id: 4,
      icon: <FiHeart />,
      title: 'Happy Clients',
      count: '500+',
      description: 'Satisfied clients and successful projects'
    }
  ];

  const skills = [
    { name: 'Wedding Photography', percentage: 95 },
    { name: 'Portrait Photography', percentage: 90 },
    { name: 'Fashion Photography', percentage: 85 },
    { name: 'Travel Photography', percentage: 88 },
    { name: 'Commercial Photography', percentage: 82 }
  ];

  return (
    <div className="about page-transition">
      <div className="about-hero section">
        <div className="container">
          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="section-title">
                About <span className="text-gold">Me</span>
              </h1>
              <p className="about-intro">
                I'm Varun, a passionate photographer with over 8 years of experience capturing 
                life's most precious moments. My journey began with a simple love for 
                storytelling through images, and it has evolved into a lifelong pursuit 
                of artistic excellence.
              </p>
              <p className="about-description">
                Based in Jubilee Hills Road no 5, Srinagar colony, I specialize in wedding photography, 
                professional portraits, fashion editorials, and travel photography. 
                Every photograph I take is a testament to my commitment to capturing 
                authentic emotions and creating timeless memories.
              </p>
              <p className="about-philosophy">
                My philosophy is simple: every moment has a story, and every story 
                deserves to be told beautifully. I believe in creating images that 
                not only document events but also evoke emotions and preserve the 
                essence of the people and places I photograph.
              </p>
            </motion.div>

            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="image-container">
                <img
                  src={require('./varun .jpg')}
                  alt="Professional Photographer"
                  className="photographer-image"
                />
                <div className="image-overlay"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="achievements-section section" ref={ref}>
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              My <span className="text-gold">Achievements</span>
            </h2>
            <p className="section-subtitle">
              A decade of dedication to the art of photography
            </p>
          </motion.div>

          <motion.div
            className="achievements-grid"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className="achievement-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <h3 className="achievement-count">{achievement.count}</h3>
                <h4 className="achievement-title">{achievement.title}</h4>
                <p className="achievement-description">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="skills-section section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              Photography <span className="text-gold">Skills</span>
            </h2>
            <p className="section-subtitle">
              Expertise across various photography genres and techniques
            </p>
          </motion.div>

          <motion.div
            className="skills-container"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="skill-header">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.percentage}%` } : {}}
                    transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="story-section section">
        <div className="container">
          <div className="story-content">
            <motion.div
              className="story-text"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">
                My <span className="text-gold">Story</span>
              </h2>
              <p>
                Photography found me at a crossroads in life. What started as a hobby 
                quickly became my passion and then my profession. I've had the privilege 
                of documenting countless weddings, capturing the essence of individuals 
                through portraits, and exploring the world through my lens.
              </p>
              <p>
                Each project teaches me something new about people, places, and the 
                art of storytelling. I believe that the best photographs are those 
                that capture not just what something looks like, but how it feels.
              </p>
              <p>
                When I'm not behind the camera, you'll find me exploring new locations, 
                studying the work of other artists, or sharing my knowledge with 
                aspiring photographers. Photography is more than my job—it's my way 
                of seeing and understanding the world.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
