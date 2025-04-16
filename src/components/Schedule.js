import React from 'react';
import { motion } from 'framer-motion';

const Schedule = () => {
  const scheduleData = [
    {
      time: '9:00 AM',
      event: 'Registration',
      description: 'Check-in and welcome breakfast.',
    },
    {
      time: '10:00 AM',
      event: 'Keynote Speech',
      description: 'Opening remarks by our keynote speaker.',
    },
    {
      time: '12:00 PM',
      event: 'Lunch Break',
      description: 'Enjoy a delicious meal with fellow attendees.',
    },
    {
      time: '2:00 PM',
      event: 'Panel Discussion',
      description: 'Interactive session with industry experts.',
    },
    {
      time: '4:00 PM',
      event: 'Networking Session',
      description: 'Connect with peers and speakers.',
    },
  ];

  return (
    <motion.div
      className="schedule"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Conference Schedule</h1>
      <p>Here's the timeline for the day. Don't miss out on any sessions!</p>
      <div className="schedule-list">
        {scheduleData.map((item, index) => (
          <motion.div
            key={index}
            className="schedule-item"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="time">{item.time}</div>
            <div className="event">{item.event}</div>
            <div className="description">{item.description}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Schedule;