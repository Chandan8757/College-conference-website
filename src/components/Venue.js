import React from 'react';
import { motion } from 'framer-motion';

const Venue = () => {
  return (
    <motion.div
      className="venue"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Conference Venue</h1>
      <p>Join us at our prestigious venue for an unforgettable experience.</p>
      <div className="venue-details">
        <h2>Location</h2>
        <p>S M Seth Auditorium</p>
        <p>Sitapura Industrial Area, Jaipur, Rajasthan, 302022</p>
        <p>
          <a
            href="https://www.poornima.org/" // Replace with your college venue link
            target="_blank"
            rel="noopener noreferrer"
            className="venue-link"
          >
            Visit Venue Website
          </a>
        </p>
      </div>
      <div className="map-container">
        <iframe
          title="Conference Venue"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.869943424038!2d77.2069073150814!3d28.57208298244093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a99b6f9fa7%3A0x83a25e55f0af1c82!2sXYZ%20College!5e0!3m2!1sen!2sin!4v1632912345678!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Venue;