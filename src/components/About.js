import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>About the Conference</h1>
      <p className="subtitle">Join us for an unforgettable experience!</p>
      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Our Mission</h2>
          <p>
            The College Conference aims to bring together students, researchers, and industry professionals to share knowledge, ideas, and innovations. Our mission is to foster collaboration and inspire the next generation of leaders.
          </p>
        </motion.div>
        <motion.div
          className="about-highlights"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>Highlights</h2>
          <ul>
            <li>Keynote speeches by industry leaders</li>
            <li>Interactive panel discussions</li>
            <li>Networking opportunities with peers and experts</li>
            <li>Workshops and hands-on sessions</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;