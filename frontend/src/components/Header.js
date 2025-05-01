import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">College Conference</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/speakers">Speakers</Link>
        <Link to="/venue">Venue</Link> {/* Add Venue link */}
        <Link to="/contact">Contact</Link>
        <Link to="/register">Register</Link>
      </nav>
    </motion.header>
  );
};

export default Header;