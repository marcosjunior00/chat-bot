const express = require('express');
const ChatController = require('../controllers/chat.controller');

const router = express.Router();

router.post('/send', ChatController.sendMessage);
router.get('/memory/:name', ChatController.getHistory);
router.post('/memory', ChatController.insertMessage);
router.delete('/memory/clear/:name', ChatController.clearChat);

module.exports = router;