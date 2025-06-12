import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  level: { type: String, required: true }, // Optional: Beginner, Intermediate, Expert
  category: { type: String, required: true }, // Optional: Frontend, Backend, etc.
});

export default mongoose.model('Skill', skillSchema);
