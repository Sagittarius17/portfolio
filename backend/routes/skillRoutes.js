import express from 'express';
import { getPublicSkills, getSkills, createSkill, updateSkill, deleteSkill } from '../controllers/skillController.js';

const router = express.Router();

router.get('/public', getPublicSkills); // Optional: Public route to get all skills
router.get('/', getSkills);
router.post('/', createSkill);
router.put('/:id', updateSkill);
router.delete('/:id', deleteSkill);

export default router;
