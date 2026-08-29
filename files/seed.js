require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const User = require('./models/User');
const Patient = require('./models/Patient');
const Appointment = require('./models/Appointment');
const Record = require('./models/Record');
const Disease = require('./models/Disease');
const Inventory = require('./models/Inventory');

const DB_FILE = path.join(__dirname, 'db.json');

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/phms');
    console.log('Connected to MongoDB');

    if (!fs.existsSync(DB_FILE)) {
      console.log('db.json not found, skipping seed.');
      process.exit(0);
    }

    const data = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));

    if (data.users) {
      await User.deleteMany({});
      await User.insertMany(data.users);
      console.log(`Seeded ${data.users.length} users`);
    }

    if (data.patients) {
      await Patient.deleteMany({});
      await Patient.insertMany(data.patients);
      console.log(`Seeded ${data.patients.length} patients`);
    }

    if (data.appointments) {
      await Appointment.deleteMany({});
      await Appointment.insertMany(data.appointments);
      console.log(`Seeded ${data.appointments.length} appointments`);
    }

    if (data.records) {
      await Record.deleteMany({});
      await Record.insertMany(data.records);
      console.log(`Seeded ${data.records.length} records`);
    }

    if (data.diseases) {
      await Disease.deleteMany({});
      await Disease.insertMany(data.diseases);
      console.log(`Seeded ${data.diseases.length} diseases`);
    }

    if (data.inventory) {
      await Inventory.deleteMany({});
      await Inventory.insertMany(data.inventory);
      console.log(`Seeded ${data.inventory.length} inventory items`);
    }

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
}

seed();
