const express = require('express');
const { addProperty, getProperties, updateProperty, deleteProperty } = require('../controllers/propertyController');
const auth = require('../middleware/auth');
const router = express.Router();

// Add a property
router.post('/', auth, addProperty);

// Get all properties
router.get('/', getProperties);

// Update a property
router.put('/:id', auth, updateProperty);

// Delete a property
router.delete('/:id', auth, deleteProperty);

module.exports = router;
