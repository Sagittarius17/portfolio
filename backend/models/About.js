import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  startYear: String,
  endYear: String,
});

const experienceSchema = new mongoose.Schema({
  company: String,
  position: String,
  startYear: String, // format: MM/YYYY
  endYear: String,   // format: MM/YYYY or 'Present'
});

const aboutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  age: Number,
  address: String,
  education: [educationSchema],
  experience: [experienceSchema],
  languages: [String],
  hobbies: [String],
  summary: String,
});

const About = mongoose.model('About', aboutSchema);
export default About;
