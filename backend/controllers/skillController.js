import Skill from '../models/Skill.js';

// Public route (optional): GET /api/skills/public
export const getPublicSkills = async (req, res) => {
  try {
    const skills = await Skill.find(); // Optionally filter for public user or featured user
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch public skills' });
  }
};

export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find({ userId: req.userId });
    res.json(skills);
  } catch (err) {
    console.error('Error getting skills:', err);
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
};

export const createSkill = async (req, res) => {
  try {
    const { name, level, category } = req.body;
    const newSkill = new Skill({ name, level, category, userId: req.user.id, });
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    console.error('Error creating skill:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const updateSkill = async (req, res) => {
  try {
    const updated = await Skill.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    console.error('Error updating skill:', err);
    res.status(500).json({ error: 'Failed to update skill' });
  }
};

export const deleteSkill = async (req, res) => {
  try {
    await Skill.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    res.json({ message: 'Skill deleted' });
  } catch (err) {
    console.error('Error deleting skill:', err);
    res.status(500).json({ error: 'Failed to delete skill' });
  }
};
