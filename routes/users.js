const express     = require('express');
const mongoose    = require('mongoose');
const router      = express.Router();

// User Login ROute
router.get('/login', (req, res) => {
  res.send('login')
});

// User Register route
router.get('/register', (req, res) => {
  res.send('register')
});

module.exports = router;