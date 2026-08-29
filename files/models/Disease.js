const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  cases: { type: Number, default: 0 },
  active: { type: Number, default: 0 },
  recovered: { type: Number, default: 0 },
  deaths: { type: Number, default: 0 },
  trend: { type: String },
  reportedDate: { type: String },
  affectedRegions: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Disease', diseaseSchema);
