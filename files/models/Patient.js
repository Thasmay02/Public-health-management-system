const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  password: { type: String },
  bloodGroup: { type: String },
  address: { type: String },
  status: { type: String, default: 'Active' },
  createdAt: { type: Date, default: Date.now },
  assignedDoctor: { type: String },
  assignedDoctorName: { type: String },
  conditions: [{ type: String }]
});

patientSchema.pre('save', async function() {
  if (this.isModified('assignedDoctor') && this.assignedDoctor) {
    const User = require('./User');
    const doctor = await User.findOne({ id: this.assignedDoctor });
    if (doctor) {
      this.assignedDoctorName = doctor.name;
    }
  }
});

patientSchema.pre('findOneAndUpdate', async function() {
  const update = this.getUpdate();
  if (update && update.assignedDoctor) {
    const User = require('./User');
    const doctor = await User.findOne({ id: update.assignedDoctor });
    if (doctor) {
      update.assignedDoctorName = doctor.name;
    }
  }
});

module.exports = mongoose.model('Patient', patientSchema);
