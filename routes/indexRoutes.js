const express = require('express');
const router = express.Router();

// Define routes for the root endpoint '/'
router.get('/', (req, res) => {
  res.send('Welcome to the homepage');
});

router.get('/about', (req, res) => {
  res.send('About page');
});

// Add more routes as needed...

module.exports = router;
