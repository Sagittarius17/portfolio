import express from 'express';
import authenticate from '../middleware/authMiddleware.js';
import { getChats, sendChat, deleteChat } from '../controllers/chatController.js';

const router = express.Router();

router.get('/', authenticate, getChats);
router.post('/', authenticate, sendChat);
router.delete('/:id', authenticate, deleteChat);

export default router;
