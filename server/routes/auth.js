const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

// Register a user
router.post('/register', register);

// Login a user
router.post('/login', login);

module.exports = router;
