const express = require('express');
const Registration = require('../models/Registration');

const router = express.Router();

// Create a new registration
router.post('/', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    console.log('Received registration data:', { name, email, phone });
    // Check if the email is already registered
    const existingRegistration = await Registration.findOne({ email });
    if (existingRegistration) {
      console.log('Email already registered:', email);
      return res.status(400).json({ message: 'Email is already registered' });
    }

    // Create a new registration
    const newRegistration = new Registration({ name, email, phone });
    await newRegistration.save();
    console.log('Registration successful:', newRegistration);
    res.status(201).json({ message: 'Registration successful', data: newRegistration });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;