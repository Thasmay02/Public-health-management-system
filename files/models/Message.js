const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  senderId: { type: String, required: true },
  receiverId: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: String, required: true },
  read: { type: Boolean, default: false }
});

module.exports = mongoose.model('Message', messageSchema);
