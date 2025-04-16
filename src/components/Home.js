import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Welcome to Poornima College of Engineering</h1>
      <p className="subtitle">Empowering Minds, Transforming Lives</p>
      <div className="college-info">
        <motion.div
          className="college-description"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>About Poornima College of Engineering</h2>
          <p>
            Poornima College of Engineering is a premier institution dedicated to academic excellence, innovation, and holistic development. With state-of-the-art facilities and a vibrant campus life, we strive to nurture future leaders and change-makers.
          </p>
        </motion.div>
        <motion.div
          className="social-media"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>Connect With Us</h2>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/xyzcollege"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="icon" />
            </a>
            <a
              href="https://www.twitter.com/xyzcollege"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="icon" />
            </a>
            <a
              href="https://www.instagram.com/xyzcollege"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/xyzcollege"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="icon" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;