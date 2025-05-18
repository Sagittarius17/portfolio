import ChatMessage from '../models/ChatMessage.js';

export const getChats = async (req, res) => {
  const { userId } = req.user;
  const chats = await ChatMessage.find({
    $or: [{ senderId: userId }, { receiverId: userId }]
  }).sort({ sentAt: -1 });

  res.json(chats);
};

export const sendChat = async (req, res) => {
  const { receiverId, message } = req.body;

  const newChat = new ChatMessage({
    senderId: req.user.id,
    receiverId,
    message
  });

  await newChat.save();
  res.status(201).json(newChat);
};

export const deleteChat = async (req, res) => {
  await ChatMessage.deleteOne({ _id: req.params.id, senderId: req.user.id });
  res.sendStatus(204);
};
