import About from '../models/About.js';

export const getAbout = async (req, res) => {
    try {
        const about = await About.findOne(); // 🟢 No userId condition
        res.status(200).json(about);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch about info', error });
    }
};

export const createOrUpdateAbout = async (req, res) => {
  const existing = await About.findOne({ userId: req.user.id });
  if (existing) {
    const updated = await About.findOneAndUpdate({ userId: req.user.id }, req.body, { new: true });
    return res.json(updated);
  }

  const newAbout = new About({ ...req.body, userId: req.user.id });
  await newAbout.save();
  res.json(newAbout);
};

// export const deleteAbout = async (req, res) => {
//   await About.deleteOne({ userId: req.user.id });
//   res.sendStatus(204);
// };
