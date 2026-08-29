require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const mongoose = require('mongoose');

// Models
const User = require('./models/User');
const Patient = require('./models/Patient');
const Appointment = require('./models/Appointment');
const Record = require('./models/Record');
const Disease = require('./models/Disease');
const Inventory = require('./models/Inventory');
const Message = require('./models/Message');

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'phms-secret-key-2024';

// Middleware
app.use(helmet({ crossOriginResourcePolicy: false, contentSecurityPolicy: false }));
app.use(cors({ origin: '*', credentials: true }));
app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }));

// Serve static frontend files
app.use(express.static(__dirname));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/phms')
  .then(() => console.log('📦 Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Route for main portal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'phms.html'));
});

// Expose the entire store sync API for frontend portals (Backward Compatibility)
app.get('/api/store', async (req, res) => {
  try {
    const users = await User.find();
    const patients = await Patient.find();
    const appointments = await Appointment.find();
    const records = await Record.find();
    const diseases = await Disease.find();
    const inventory = await Inventory.find();
    const messages = await Message.find();
    res.json({ users, patients, appointments, records, diseases, inventory, messages });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch store' });
  }
});

app.post('/api/store', async (req, res) => {
  res.status(405).json({ error: 'Store overwrite via API is disabled when using MongoDB' });
});

// ─── Auth Middleware ──────────────────────────────────────────────────────────
const auth = (roles = []) => (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (roles.length && !roles.includes(decoded.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// ─── Helper ───────────────────────────────────────────────────────────────────
const paginate = (arr, page = 1, limit = 10) => {
  const start = (page - 1) * limit;
  return { data: arr.slice(start, start + limit), total: arr.length, page: +page, pages: Math.ceil(arr.length / limit) };
};

// ─── Auth Routes ──────────────────────────────────────────────────────────────
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: new RegExp('^' + email + '$', 'i') });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id, name: user.name, email: user.email, role: user.role, department: user.department }, JWT_SECRET, { expiresIn: '8h' });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role, department: user.department } });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/auth/patient/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const patient = await Patient.findOne({ email: new RegExp('^' + email + '$', 'i') });
    if (!patient || patient.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: patient.id, name: patient.name, email: patient.email, role: 'patient' }, JWT_SECRET, { expiresIn: '8h' });
    res.json({
      token,
      user: {
        id: patient.id,
        name: patient.name,
        email: patient.email,
        role: 'patient',
        age: patient.age,
        gender: patient.gender,
        phone: patient.phone,
        bloodGroup: patient.bloodGroup,
        address: patient.address,
        conditions: patient.conditions,
        assignedDoctor: patient.assignedDoctor
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/auth/patient/register', async (req, res) => {
  try {
    const { email } = req.body;
    const exists = await Patient.findOne({ email });
    if (exists) return res.status(400).json({ error: 'Email already exists' });
    const patient = new Patient({ id: 'p' + Date.now(), ...req.body, status: 'Active' });
    await patient.save();
    res.status(201).json(patient);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/auth/reset-password', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) return res.status(400).json({ error: 'Missing fields' });

    if (role === 'staff') {
      const user = await User.findOne({ email: new RegExp('^' + email + '$', 'i') });
      if (!user) return res.status(404).json({ error: 'User not found' });
      user.password = bcrypt.hashSync(password, 10);
      await user.save();
      return res.json({ success: true });
    } else if (role === 'patient') {
      const patient = await Patient.findOne({ email: new RegExp('^' + email + '$', 'i') });
      if (!patient) return res.status(404).json({ error: 'Patient not found' });
      patient.password = password;
      await patient.save();
      return res.json({ success: true });
    }
    res.status(400).json({ error: 'Invalid role' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/auth/me', auth(), async (req, res) => {
  try {
    const user = await User.findOne({ id: req.user.id });
    if (!user) return res.status(404).json({ error: 'User not found' });
    const { password, ...safe } = user.toObject();
    res.json(safe);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/auth/reset-password', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (role === 'patient') {
      const patient = await Patient.findOne({ email });
      if (!patient) return res.status(404).json({ error: 'Patient not found' });
      patient.password = password;
      await patient.save();
      return res.json({ message: 'Password updated successfully' });
    } else {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ error: 'Staff user not found' });
      user.password = bcrypt.hashSync(password, 10);
      await user.save();
      return res.json({ message: 'Password updated successfully' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ─── Dashboard Stats ──────────────────────────────────────────────────────────
app.get('/api/dashboard/stats', auth(), async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];

    const [
      totalPatients,
      totalAppointments,
      todayAppointments,
      criticalPatients,
      activeOutbreaks,
      lowStockItems,
      totalDiseases,
      recoveredPatientsCount,
      diseases
    ] = await Promise.all([
      Patient.countDocuments(),
      Appointment.countDocuments(),
      Appointment.countDocuments({ date: today }),
      Patient.countDocuments({ status: 'Critical' }),
      Disease.countDocuments({ trend: 'increasing' }),
      Inventory.countDocuments({ status: { $in: ['Low', 'Critical'] } }),
      Disease.countDocuments(),
      Patient.countDocuments({ status: 'Recovered' }),
      Disease.find()
    ]);

    res.json({
      totalPatients,
      totalAppointments,
      todayAppointments,
      criticalPatients,
      activeOutbreaks,
      lowStockItems,
      totalDiseases,
      recoveryRate: totalPatients > 0 ? Math.round((recoveredPatientsCount / totalPatients) * 100) : 0,
      recentActivity: [
        { type: 'patient', message: 'System migrated to MongoDB', time: 'Just now' }
      ],
      diseaseStats: diseases.map(d => ({ name: d.name, cases: d.cases, active: d.active })),
      monthlyTrend: [
        { month: 'Jan', patients: 42, appointments: 87 },
        { month: 'Feb', patients: 58, appointments: 112 },
        { month: 'Mar', patients: 71, appointments: 134 },
        { month: 'Apr', patients: 65, appointments: 128 },
        { month: 'May', patients: 89, appointments: 165 },
        { month: 'Jun', patients: 54, appointments: 98 },
      ]
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ─── Patients ─────────────────────────────────────────────────────────────────
app.get('/api/patients', auth(), async (req, res) => {
  try {
    const { page = 1, limit = 10, search, status } = req.query;
    let query = {};
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } }
      ];
    }
    if (status) query.status = status;

    const patients = await Patient.find(query);
    res.json(paginate(patients, page, limit));
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/patients/:id', auth(), async (req, res) => {
  try {
    const patient = await Patient.findOne({ id: req.params.id });
    if (!patient) return res.status(404).json({ error: 'Patient not found' });
    const records = await Record.find({ patientId: patient.id });
    const appointments = await Appointment.find({ patientId: patient.id });
    res.json({ ...patient.toObject(), records, appointments });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/patients', auth(['admin', 'doctor', 'nurse']), async (req, res) => {
  try {
    const patient = new Patient({ id: 'p' + Date.now(), ...req.body, status: req.body.status || 'Active' });
    await patient.save();
    res.status(201).json(patient);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.put('/api/patients/:id', auth(['admin', 'doctor', 'patient']), async (req, res) => {
  try {
    if (req.user.role === 'patient' && req.user.id !== req.params.id) {
      return res.status(403).json({ error: 'Cannot update another patient profile' });
    }
    const patient = await Patient.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (!patient) return res.status(404).json({ error: 'Patient not found' });
    res.json(patient);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.delete('/api/patients/:id', auth(['admin']), async (req, res) => {
  try {
    const patient = await Patient.findOneAndDelete({ id: req.params.id });
    if (!patient) return res.status(404).json({ error: 'Patient not found' });
    res.json({ message: 'Patient deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ─── Appointments ─────────────────────────────────────────────────────────────
app.get('/api/appointments', auth(), async (req, res) => {
  try {
    const { page = 1, limit = 10, status, date } = req.query;
    let query = {};
    if (status) query.status = status;
    if (date) query.date = date;

    let appts = await Appointment.find(query);
    const users = await User.find();
    const patients = await Patient.find();

    appts = appts.map(a => {
      const ao = a.toObject();
      ao.patient = patients.find(p => p.id === ao.patientId);
      ao.doctor = users.find(u => u.id === ao.doctorId);
      return ao;
    });

    res.json(paginate(appts, page, limit));
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/appointments', auth(['admin', 'doctor', 'nurse', 'patient']), async (req, res) => {
  try {
    const appt = new Appointment({ id: 'a' + Date.now(), ...req.body });
    await appt.save();
    res.status(201).json(appt);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.put('/api/appointments/:id', auth(['admin', 'doctor', 'nurse']), async (req, res) => {
  try {
    const appt = await Appointment.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (!appt) return res.status(404).json({ error: 'Appointment not found' });
    res.json(appt);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.delete('/api/appointments/:id', auth(['admin', 'doctor']), async (req, res) => {
  try {
    const appt = await Appointment.findOneAndDelete({ id: req.params.id });
    if (!appt) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ─── Medical Records ──────────────────────────────────────────────────────────
app.get('/api/records', auth(), async (req, res) => {
  try {
    const { patientId, page = 1, limit = 10 } = req.query;
    let query = {};
    if (patientId) query.patientId = patientId;

    let records = await Record.find(query);
    const users = await User.find();
    const patients = await Patient.find();

    records = records.map(r => {
      const ro = r.toObject();
      ro.patient = patients.find(p => p.id === ro.patientId);
      ro.doctor = users.find(u => u.id === ro.doctorId);
      return ro;
    });

    res.json(paginate(records, page, limit));
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/records', auth(['admin', 'doctor']), async (req, res) => {
  try {
    const record = new Record({ id: 'r' + Date.now(), ...req.body, doctorId: req.user.id });
    await record.save();
    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ─── Disease Surveillance ─────────────────────────────────────────────────────
app.get('/api/diseases', auth(), async (req, res) => {
  try {
    const { category } = req.query;
    let query = {};
    if (category) query.category = category;
    const diseases = await Disease.find(query);
    res.json({ data: diseases, total: diseases.length });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/diseases', auth(['admin', 'doctor']), async (req, res) => {
  try {
    const disease = new Disease({ id: 'd' + Date.now(), ...req.body });
    await disease.save();
    res.status(201).json(disease);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.put('/api/diseases/:id', auth(['admin', 'doctor']), async (req, res) => {
  try {
    const disease = await Disease.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (!disease) return res.status(404).json({ error: 'Not found' });
    res.json(disease);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.delete('/api/diseases/:id', auth(['admin']), async (req, res) => {
  try {
    const disease = await Disease.findOneAndDelete({ id: req.params.id });
    if (!disease) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ─── Inventory ────────────────────────────────────────────────────────────────
app.get('/api/inventory', auth(), async (req, res) => {
  try {
    const { status, category } = req.query;
    let query = {};
    if (status) query.status = status;
    if (category) query.category = category;
    const items = await Inventory.find(query);
    res.json({ data: items, total: items.length });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/inventory', auth(['admin']), async (req, res) => {
  try {
    const status = req.body.quantity <= req.body.minStock ? 'Low' : 'Adequate';
    const item = new Inventory({ id: 'i' + Date.now(), ...req.body, status });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.put('/api/inventory/:id', auth(['admin', 'nurse']), async (req, res) => {
  try {
    let item = await Inventory.findOne({ id: req.params.id });
    if (!item) return res.status(404).json({ error: 'Not found' });

    Object.assign(item, req.body);
    item.status = item.quantity === 0 ? 'Critical' : item.quantity <= item.minStock ? 'Low' : 'Adequate';

    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.delete('/api/inventory/:id', auth(['admin', 'nurse']), async (req, res) => {
  try {
    const item = await Inventory.findOneAndDelete({ id: req.params.id });
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ─── Users ────────────────────────────────────────────────────────────────────
app.get('/api/users', auth(['admin']), async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/users', auth(['admin']), async (req, res) => {
  try {
    const { name, email, password, role, department } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ error: 'Email already exists' });

    const user = new User({
      id: 'u' + Date.now(),
      name,
      email,
      password: bcrypt.hashSync(password, 10),
      role,
      department
    });

    await user.save();
    const { password: _, ...safe } = user.toObject();
    res.status(201).json(safe);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.delete('/api/users/:id', auth(['admin']), async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ id: req.params.id });
    if (!user) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ─── Messages ─────────────────────────────────────────────────────────────────
app.get('/api/messages', auth(), async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/messages', auth(), async (req, res) => {
  try {
    const { senderId, receiverId, content } = req.body;
    const msg = new Message({
      id: 'm' + Date.now(),
      senderId,
      receiverId,
      content,
      timestamp: new Date().toISOString(),
      read: false
    });
    await msg.save();
    res.status(201).json(msg);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.put('/api/messages/:id/read', auth(), async (req, res) => {
  try {
    const msg = await Message.findOneAndUpdate({ id: req.params.id }, { read: true }, { new: true });
    if (!msg) return res.status(404).json({ error: 'Not found' });
    res.json(msg);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ─── Health Check ─────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));

app.listen(PORT, () => console.log(`🏥 PHMS Backend running on port ${PORT}`));

module.exports = app;
