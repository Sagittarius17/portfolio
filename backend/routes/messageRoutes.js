const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Create a new message via contact form
router.post('/', messageController.createMessage);

// Optional: Get all messages (for admin dashboard)
router.get('/', messageController.getMessages);

module.exports = router;
