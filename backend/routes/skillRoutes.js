import express from 'express';
import {getSkills, createSkill, updateSkill, deleteSkill} from '../controllers/skillController.js';

const router = express.Router();

router.get('/', getSkills);
router.post('/', createSkill);
router.put('/:id', updateSkill);
router.delete('/:id', deleteSkill);

export default router;
