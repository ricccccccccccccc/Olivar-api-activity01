const express = require('express');
const router = express.Router();
const data = require('../dishModel');

// Test Route
router.get('/', (req, res) => {
  res.json({ message: 'API is working!' });
});

module.exports = router;
