const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  minStock: { type: Number, required: true },
  expiryDate: { type: String },
  supplier: { type: String },
  status: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inventory', inventorySchema);
