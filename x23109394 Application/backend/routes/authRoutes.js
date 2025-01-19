const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

// Email and Password Validation not shown here for brevity. Assume included in middleware functions.

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    //const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.status(201).send({ user: user._id });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post('/login', async (req, res) => {
  try {
    console.log("rr",req.body)
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).send({ error: 'Please provide an email and password.' });
    }

    // Find user by email
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(401).send({ error: 'Login failed! User not found.' });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ error: 'Login failed! Incorrect password.' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

    // Optionally, update login timestamp or perform other login success operations here

    // Send success response
    res.send({ user: user._id, token });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

module.exports = router;
