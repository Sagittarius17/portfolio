import express from 'express';
import { getAbout, createOrUpdateAbout } from '../controllers/aboutController.js';
import authenticate from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/:username', getProfile);

router.get('/', getAbout);
router.post('/', authenticate, createOrUpdateAbout);
router.put('/', authenticate, createOrUpdateAbout); 

export default router;
