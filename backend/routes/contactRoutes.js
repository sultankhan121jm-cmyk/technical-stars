const express = require('express');
const router = express.Router();

// Import the function we made in the controller
const { submitContact } = require('../controllers/contactController');

// When React sends a POST request to this URL, run submitContact
router.post('/', submitContact);

module.exports = router;