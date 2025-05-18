import Skill from '../models/Skill.js';

export const getSkills = async (req, res) => {
  const skills = await Skill.find({ userId: req.user.id });
  res.json(skills);
};

export const createSkill = async (req, res) => {
  const skill = new Skill({ ...req.body, userId: req.user.id });
  await skill.save();
  res.json(skill);
};

export const updateSkill = async (req, res) => {
  const skill = await Skill.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    req.body,
    { new: true }
  );
  res.json(skill);
};

export const deleteSkill = async (req, res) => {
  await Skill.deleteOne({ _id: req.params.id, userId: req.user.id });
  res.sendStatus(204);
};
