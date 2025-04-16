const express = require('express');
const ContactMessage = require('../models/ContactMessage');

const router = express.Router();

// Submit a contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new contact message
    const newContactMessage = new ContactMessage({ name, email, message });
    await newContactMessage.save();

    res.status(201).json({ message: 'Message sent successfully', data: newContactMessage });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;