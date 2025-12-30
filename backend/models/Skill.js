import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  level: { type: String, required: true }, // Optional: Beginner, Intermediate, Expert
  category: { type: String, required: true }, // Optional: Frontend, Backend, etc.
});

const Skill = mongoose.model('Skill', skillSchema);
export default Skill;
// This code defines a Mongoose schema for a Skill model in a Node.js application.