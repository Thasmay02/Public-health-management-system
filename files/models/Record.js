const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  patientId: { type: String, required: true },
  doctorId: { type: String, required: true },
  type: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  date: { type: String, required: true },
  medications: [{ type: String }],
  vitals: {
    bp: String,
    pulse: Number,
    temp: Number,
    weight: Number
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Record', recordSchema);
