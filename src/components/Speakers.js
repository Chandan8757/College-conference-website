import React from 'react';
import { motion } from 'framer-motion';

const Speakers = () => {
  const speakersData = [
    {
      name: 'Dr. Nikita Jain',
      role: 'Keynote Speaker',
      bio: 'Renowned expert in Artificial Intelligence and Machine Learning.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      name: 'Prof. Shilpi Jain',
      role: 'Panelist',
      bio: 'Leading researcher in Renewable Energy and Sustainability.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      name: 'Mr. Abisheak Sharma',
      role: 'Workshop Facilitator',
      bio: 'Experienced educator in Data Science and Big Data Analytics.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      name: 'Mr. Chandan Kumar',
      role: 'Tech Innovator',
      bio: 'Pioneer in Blockchain Technology and Cryptocurrency.',
      image: ' /images/speakers/chandan-kumar.jpg', // Replace with actual image URL
    },
  ];

  return (
    <motion.div
      className="speakers"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Featured Speakers</h1>
      <p className="subtitle">Meet our esteemed speakers who will inspire and educate.</p>
      <div className="speakers-list">
        {speakersData.map((speaker, index) => (
          <motion.div
            key={index}
            className="speaker-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="speaker-image">
              <img src={speaker.image} alt={speaker.name} />
            </div>
            <div className="speaker-details">
              <h2>{speaker.name}</h2>
              <p className="role">{speaker.role}</p>
              <p className="bio">{speaker.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Speakers;