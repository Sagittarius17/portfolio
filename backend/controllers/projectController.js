import Project from '../models/Project.js';

// GET all projects (sorted by newest first)
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Server error while fetching projects.' });
  }
};

// POST create a new project
export const createProject = async (req, res) => {
  try {
    const { title, description, imageUrl, githubLink, demoLink } = req.body;

    if (!title || !description || !imageUrl) {
      return res.status(400).json({ message: 'Title, description, and image URL are required.' });
    }

    const newProject = new Project({ title, description, imageUrl, githubLink, demoLink });
    await newProject.save();

    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create project.', error: err.message });
  }
};

// PUT update project
export const updateProject = async (req, res) => {
  try {
    const { title, description, imageUrl, githubLink, demoLink } = req.body;

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { title, description, imageUrl, githubLink, demoLink },
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found.' });
    }

    res.status(200).json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update project.', error: err.message });
  }
};

// DELETE a project
export const deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);

    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found.' });
    }

    res.status(200).json({ message: 'Project deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete project.' });
  }
};
