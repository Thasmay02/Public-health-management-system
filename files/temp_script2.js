
    // ── DATA STORE ───────────────────────────────────────────────────────────────
    const store = {
      currentUser: null,
      currentPage: 'dashboard',
      patients: [
        { id: 'p1', name: 'Ravi Kumar', age: 45, gender: 'Male', phone: '9876543210', email: 'ravi@example.com', bloodGroup: 'O+', address: 'Mysuru, Karnataka', status: 'Active', createdAt: '2024-03-01', conditions: ['Hypertension', 'Diabetes Type 2'] },
        { id: 'p2', name: 'Sunita Patel', age: 32, gender: 'Female', phone: '9845678901', email: 'sunita@example.com', bloodGroup: 'A+', address: 'Bengaluru, Karnataka', status: 'Active', createdAt: '2024-03-05', conditions: ['Asthma'] },
        { id: 'p3', name: 'Mohammed Ismail', age: 60, gender: 'Male', phone: '9123456789', email: 'ismail@example.com', bloodGroup: 'B-', address: 'Hubballi, Karnataka', status: 'Critical', createdAt: '2024-03-10', conditions: ['Heart Disease', 'COPD'] },
        { id: 'p4', name: 'Lakshmi Devi', age: 28, gender: 'Female', phone: '9786543210', email: 'lakshmi@example.com', bloodGroup: 'AB+', address: 'Mangaluru, Karnataka', status: 'Recovered', createdAt: '2024-02-20', conditions: ['COVID-19'] },
        { id: 'p5', name: 'Arjun Hegde', age: 52, gender: 'Male', phone: '9654321098', email: 'arjun@example.com', bloodGroup: 'O-', address: 'Mysuru, Karnataka', status: 'Active', createdAt: '2024-04-01', conditions: ['Tuberculosis'] },
      ],
      appointments: [
        { id: 'a1', patientId: 'p1', doctorId: 'u2', date: '2025-06-10', time: '09:00', type: 'Follow-up', status: 'Scheduled', notes: 'Blood pressure check' },
        { id: 'a2', patientId: 'p2', doctorId: 'u2', date: '2025-06-11', time: '10:30', type: 'Consultation', status: 'Scheduled', notes: 'Asthma management review' },
        { id: 'a3', patientId: 'p3', doctorId: 'u2', date: '2025-06-09', time: '08:00', type: 'Emergency', status: 'Completed', notes: 'Chest pain evaluation' },
        { id: 'a4', patientId: 'p4', doctorId: 'u2', date: '2025-06-12', time: '14:00', type: 'Discharge', status: 'Scheduled', notes: 'Final COVID check' },
        { id: 'a5', patientId: 'p5', doctorId: 'u2', date: '2025-06-08', time: '11:00', type: 'Follow-up', status: 'Completed', notes: 'TB medication review' },
      ],
      records: [
        { id: 'r1', patientId: 'p1', doctorId: 'u2', type: 'Diagnosis', title: 'Hypertension Management', description: 'BP: 160/100 mmHg. Prescribed Amlodipine 5mg daily. Lifestyle modifications advised.', date: '2024-05-01', medications: ['Amlodipine 5mg', 'Metoprolol 25mg'] },
        { id: 'r2', patientId: 'p2', doctorId: 'u2', type: 'Lab Result', title: 'Spirometry Test', description: 'FEV1/FVC ratio: 0.65. Moderate obstruction. Inhaler therapy continued.', date: '2024-05-10', medications: ['Salbutamol Inhaler', 'Fluticasone 100mcg'] },
        { id: 'r3', patientId: 'p3', doctorId: 'u2', type: 'Emergency', title: 'Cardiac Event', description: 'Acute chest pain, ECG showed ST elevation. Immediate cardiac care initiated.', date: '2024-05-15', medications: ['Aspirin 325mg', 'Nitroglycerin'] },
      ],
      diseases: [
        { id: 'd1', name: 'COVID-19', category: 'Viral', cases: 1240, active: 45, recovered: 1180, deaths: 15, trend: 'decreasing', affectedRegions: ['Bengaluru', 'Mysuru', 'Mangaluru'] },
        { id: 'd2', name: 'Dengue Fever', category: 'Vector-Borne', cases: 580, active: 120, recovered: 455, deaths: 5, trend: 'increasing', affectedRegions: ['Mysuru', 'Hassan', 'Kodagu'] },
        { id: 'd3', name: 'Tuberculosis', category: 'Bacterial', cases: 340, active: 210, recovered: 125, deaths: 5, trend: 'stable', affectedRegions: ['Hubballi', 'Belagavi', 'Kalaburagi'] },
        { id: 'd4', name: 'Malaria', category: 'Parasitic', cases: 890, active: 340, recovered: 542, deaths: 8, trend: 'increasing', affectedRegions: ['Dakshina Kannada', 'Uttara Kannada', 'Shivamogga'] },
        { id: 'd5', name: 'Cholera', category: 'Bacterial', cases: 78, active: 12, recovered: 64, deaths: 2, trend: 'decreasing', affectedRegions: ['Mysuru'] },
      ],
      inventory: [
        { id: 'i1', name: 'Paracetamol 500mg', category: 'Analgesic', quantity: 5000, unit: 'tablets', minStock: 500, expiryDate: '2026-12-31', supplier: 'Sun Pharma', status: 'Adequate' },
        { id: 'i2', name: 'Amoxicillin 250mg', category: 'Antibiotic', quantity: 120, unit: 'capsules', minStock: 200, expiryDate: '2025-08-31', supplier: 'Cipla', status: 'Low' },
        { id: 'i3', name: 'Insulin Glargine', category: 'Hormone', quantity: 80, unit: 'vials', minStock: 50, expiryDate: '2025-07-15', supplier: 'Novo Nordisk', status: 'Adequate' },
        { id: 'i4', name: 'N95 Masks', category: 'PPE', quantity: 45, unit: 'pieces', minStock: 100, expiryDate: '2026-06-30', supplier: 'Local Supplier', status: 'Critical' },
        { id: 'i5', name: 'Surgical Gloves (M)', category: 'PPE', quantity: 2400, unit: 'pairs', minStock: 500, expiryDate: '2027-01-01', supplier: 'Ansell', status: 'Adequate' },
        { id: 'i6', name: 'Amlodipine 5mg', category: 'Cardiovascular', quantity: 350, unit: 'tablets', minStock: 400, expiryDate: '2026-03-31', supplier: 'Torrent', status: 'Low' },
      ],
      users: [
        { id: 'u1', name: 'Dr. Admin', email: 'admin@phms.gov', password: 'admin123', role: 'admin', department: 'Administration', createdAt: '2024-01-01' },
        { id: 'u2', name: 'Dr. Priya Sharma', email: 'doctor@phms.gov', password: 'doctor123', role: 'doctor', department: 'General Medicine', createdAt: '2024-01-15' },
        { id: 'u3', name: 'Nurse Kavitha', email: 'nurse@phms.gov', password: 'nurse123', role: 'nurse', department: 'Emergency', createdAt: '2024-02-01' },
      ],
      // Patient portal accounts — email+password keyed, linked to patient records
      patientAccounts: [
        { patientId: 'p1', email: 'ravi@example.com', password: 'ravi123' },
        { patientId: 'p2', email: 'sunita@example.com', password: 'sunita123' },
        { patientId: 'p3', email: 'ismail@example.com', password: 'ismail123' },
      ]
    };

    async function apiFetch(url, options = {}) {
      const headers = { 'Content-Type': 'application/json', ...options.headers };
      const token = sessionStorage.getItem('phms_token');
      if (token) headers['Authorization'] = `Bearer ${token}`;
      return fetch(url, { ...options, headers });
    }

    // ── SYNC SYSTEM ──
    function loadStore() {
      // Legacy loadStore function. LocalStorage is no longer used.
    }

    function syncFromServer() {
      apiFetch('/api/store')
        .then(res => res.json())
        .then(parsed => {
          if (parsed) {
            if (parsed.patients) store.patients = parsed.patients;
            if (parsed.appointments) store.appointments = parsed.appointments;
            if (parsed.records) store.records = parsed.records;
            if (parsed.users) store.users = parsed.users;
            if (parsed.diseases) store.diseases = parsed.diseases;
            if (parsed.inventory) store.inventory = parsed.inventory;

            if (store.currentUser) {
              renderPage(store.currentPage || 'dashboard');
            } else {
              const savedPatient = sessionStorage.getItem('phms_current_patient_user');
              if (savedPatient && document.getElementById('patientPortal').style.display !== 'none') {
                try {
                  renderPatientPortal(JSON.parse(savedPatient));
                } catch (e) {}
              }
            }
          }
        })
        .catch(err => console.warn('Server database offline.', err));
    }

    function saveStore() {
      // Monolithic save deprecated. Data is saved granularly via API.
    }

    // Initial Load & Sync
    loadStore();
    syncFromServer();

    function setView(viewName) {
      const landing = document.getElementById('landingPage');
      const login = document.getElementById('loginPage');
      const app = document.getElementById('appShell');
      const patient = document.getElementById('patientPortal');
      
      if (landing) landing.style.display = 'none';
      if (login) {
        login.style.display = 'none';
        login.classList.remove('show');
      }
      if (app) app.style.display = 'none';
      if (patient) patient.style.display = 'none';
      
      if (viewName === 'landing') {
        if (landing) landing.style.display = 'flex';
        updateLandingStats();
      } else if (viewName === 'login') {
        if (login) {
          login.style.display = 'flex';
          setTimeout(() => login.classList.add('show'), 10);
        }
      } else if (viewName === 'app') {
        if (app) app.style.display = 'flex';
      } else if (viewName === 'patient') {
        if (patient) patient.style.display = 'flex';
      }
    }

    function openLoginModal(portalType) {
      setView('login');
      if (portalType) {
        switchPortal(portalType);
      }
    }

    function closeLoginModal() {
      setView('landing');
    }

    function updateLandingStats() {
      loadStore();
      const outbreaksCount = store.diseases.length;
      const patientsCount = store.patients.length;
      const staffCount = store.users.filter(u => u.role === 'doctor' || u.role === 'nurse').length;
      
      const recoveredCount = store.patients.filter(p => p.status === 'Recovered').length;
      const recoveryRate = patientsCount ? Math.round((recoveredCount / patientsCount) * 100) : 94;
      
      const statOutbreaks = document.getElementById('statOutbreaks');
      const statPatients = document.getElementById('statPatients');
      const statStaff = document.getElementById('statStaff');
      const statRecovery = document.getElementById('statRecovery');
      
      if (statOutbreaks) statOutbreaks.textContent = outbreaksCount;
      if (statPatients) statPatients.textContent = patientsCount.toLocaleString();
      if (statStaff) statStaff.textContent = staffCount;
      if (statRecovery) statRecovery.textContent = recoveryRate + '%';
    }

    // Auto Session recovery
    window.addEventListener('load', function () {
      // Setup Back to Top scroll listener
      const landing = document.getElementById('landingPage');
      const backToTopBtn = document.getElementById('backToTop');
      if (landing && backToTopBtn) {
        landing.addEventListener('scroll', function() {
          if (landing.scrollTop > 300) {
            backToTopBtn.classList.add('show');
          } else {
            backToTopBtn.classList.remove('show');
          }
        });
      }

      const savedUser = sessionStorage.getItem('phms_current_user');
      const savedPatient = sessionStorage.getItem('phms_current_patient_user');
      if (savedUser) {
        try {
          const user = JSON.parse(savedUser);
          store.currentUser = user;
          setView('app');
          document.getElementById('sidebarName').textContent = user.name;
          document.getElementById('sidebarRole').textContent = user.role.charAt(0).toUpperCase() + user.role.slice(1);
          document.getElementById('sidebarAvatar').textContent = user.name[0];
          if (user.role !== 'admin') document.getElementById('adminNav').style.display = 'none';
          navigate('dashboard');
        } catch (e) {
          setView('landing');
        }
      } else if (savedPatient) {
        try {
          const patient = JSON.parse(savedPatient);
          showPatientDashboard(patient);
        } catch (e) {
          setView('landing');
        }
      } else {
        setView('landing');
      }
    });

    // ── PORTAL SWITCHING ─────────────────────────────────────────────────────────
    function switchPortal(portal) {
      document.querySelectorAll('.portal-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.login-panel').forEach(p => p.classList.remove('active'));
      if (portal === 'staff') {
        document.getElementById('staffTabBtn').classList.add('active');
        document.getElementById('staffPanel').classList.add('active');
      } else {
        document.getElementById('patientTabBtn').classList.add('active');
        document.getElementById('patientPanel').classList.add('active');
      }
    }

    function switchPatientTab(tab) {
      document.querySelectorAll('.auth-subtab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.patient-form').forEach(f => f.classList.remove('active'));
      if (tab === 'login') {
        document.getElementById('patLoginTab').classList.add('active');
        document.getElementById('patLoginForm').classList.add('active');
        document.getElementById('patLoginError').style.display = 'none';
      } else {
        document.getElementById('patRegisterTab').classList.add('active');
        document.getElementById('patRegisterForm').classList.add('active');
        document.getElementById('patRegError').style.display = 'none';
        document.getElementById('patRegSuccess').style.display = 'none';
      }
    }

    // ── PATIENT AUTH ──────────────────────────────────────────────────────────────
    function patientLogin() {
      const email = document.getElementById('patEmail').value.trim();
      const password = document.getElementById('patPassword').value;
      const errEl = document.getElementById('patLoginError');
      
      apiFetch('/api/auth/patient/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      })
      .then(res => {
        if (!res.ok) throw new Error('Invalid credentials');
        return res.json();
      })
      .then(data => {
        errEl.style.display = 'none';
        sessionStorage.setItem('phms_token', data.token);
        sessionStorage.setItem('phms_current_patient_user', JSON.stringify(data.user));
        showPatientDashboard(data.user);
      })
      .catch(err => {
        errEl.textContent = '❌ Invalid email or password.';
        errEl.style.display = 'flex';
      });
    }

    function patientRegister() {
      const name = document.getElementById('reg_name').value.trim();
      const age = +document.getElementById('reg_age').value;
      const gender = document.getElementById('reg_gender').value;
      const blood = document.getElementById('reg_blood').value;
      const email = document.getElementById('reg_email').value.trim();
      const phone = document.getElementById('reg_phone').value.trim();
      const addr = document.getElementById('reg_addr').value.trim();
      const pwd = document.getElementById('reg_pwd').value;
      const pwd2 = document.getElementById('reg_pwd2').value;
      const errEl = document.getElementById('patRegError');
      const okEl = document.getElementById('patRegSuccess');

      errEl.style.display = 'none'; okEl.style.display = 'none';

      if (!name || !age || !gender || !blood || !email || !phone || !pwd) {
        errEl.textContent = '❌ Please fill in all required fields.';
        errEl.style.display = 'flex'; return;
      }
      if (pwd !== pwd2) {
        errEl.textContent = '❌ Passwords do not match.';
        errEl.style.display = 'flex'; return;
      }
      if (pwd.length < 6) {
        errEl.textContent = '❌ Password must be at least 6 characters.';
        errEl.style.display = 'flex'; return;
      }

      apiFetch('/api/auth/patient/register', {
        method: 'POST',
        body: JSON.stringify({ name, age, gender, bloodGroup: blood, phone, email, address: addr, password: pwd })
      })
      .then(res => {
        if (!res.ok) throw new Error('Registration failed');
        return res.json();
      })
      .then(data => {
        okEl.textContent = '✅ Registration successful! You can now sign in.';
        okEl.style.display = 'flex';
        ['reg_name', 'reg_age', 'reg_email', 'reg_phone', 'reg_addr', 'reg_pwd', 'reg_pwd2'].forEach(id => document.getElementById(id).value = '');
        document.getElementById('reg_gender').value = '';
        document.getElementById('reg_blood').value = '';
        syncFromServer();
        setTimeout(() => switchPatientTab('login'), 1800);
      })
      .catch(err => {
        errEl.textContent = '❌ Registration failed or email already exists.';
        errEl.style.display = 'flex';
      });
    }

    // ── PATIENT DASHBOARD ─────────────────────────────────────────────────────────
    function showPatientDashboard(patient) {
      document.getElementById('loginPage').style.display = 'none';
      document.getElementById('patientPortal').style.display = 'flex';
      renderPatientPortal(patient);
    }

    function renderPatientPortal(patient) {
      loadStore();
      const freshPatient = store.patients.find(p => p.id === patient.id) || patient;
      const myAppts = store.appointments.filter(a => a.patientId === freshPatient.id);
      const myRecords = store.records.filter(r => r.patientId === freshPatient.id);
      const doctor = store.users.find(u => u.id === freshPatient.assignedDoctor);
      const meds = getPatientMedications(freshPatient.id);

      document.getElementById('patPortalName').textContent = freshPatient.name;
      document.getElementById('patPortalAvatar').textContent = freshPatient.name[0];
      document.getElementById('patPortalRole').textContent = 'Patient';

      document.getElementById('patientPortalContent').innerHTML = `
        <div style="display:grid; grid-template-columns: 320px 1fr; gap:20px; max-width: 1200px; margin: 0 auto; text-align: left;">
          <!-- Left Column: Personal info & conditions -->
          <div>
            <div class="section-card" style="padding: 24px; margin-bottom: 20px;">
              <div style="display:flex; flex-direction:column; align-items:center; text-align:center; gap:12px; margin-bottom:20px;">
                <div style="width:72px; height:72px; font-size:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; color:white; background:${avatarColor(freshPatient.name)};" id="pdAvatar">${freshPatient.name[0]}</div>
                <div>
                  <h3 style="font-family:'Syne', sans-serif; font-size:18px; font-weight:700;" id="pdName">${freshPatient.name}</h3>
                  <p style="font-size:12px; color:var(--text2);" id="pdContact">${freshPatient.phone || 'No phone'} · ${freshPatient.email}</p>
                </div>
              </div>
              <hr style="border:none; border-top:1px solid var(--border); margin-bottom:16px;" />
              <div class="detail-grid">
                <div class="detail-item"><label for="apptDoctor">Age / Gender</label><span>${freshPatient.age || '—'} yrs / ${freshPatient.gender}</span></div>
                <div class="detail-item" style="margin-top: 8px;"><label for="my_name">Blood Group</label><span class="badge badge-blue" style="width:fit-content; margin-top:2px;">${freshPatient.bloodGroup || '—'}</span></div>
                <div class="detail-item" style="margin-top: 8px;"><label>Address</label><span>${freshPatient.address || 'Not Provided'}</span></div>
                <div class="detail-item" style="grid-column: span 2; margin-top: 12px;"><label>Assigned Doctor</label><span style="color:var(--accent); font-weight:600;">${doctor ? `👨‍⚕️ ${doctor.name} (${doctor.department})` : 'Not Assigned'}</span></div>
              </div>
              <button class="btn btn-secondary" style="width:100%; margin-top: 16px; border-radius: 8px;" onclick="editPatientProfile()">✏️ Edit Profile</button>
            </div>
            
            <div class="section-card" style="padding: 20px;">
              <div class="section-header" style="padding: 0 0 12px 0; margin-bottom: 12px; border-bottom: 1px solid var(--border);">
                <h3 style="font-size: 14px;">Active Conditions</h3>
              </div>
              <div id="pdConditions" style="display:flex; flex-wrap:wrap; gap:6px;">
                ${freshPatient.conditions && freshPatient.conditions.length 
                  ? freshPatient.conditions.map(c => `<span class="badge badge-yellow">${c}</span>`).join('') 
                  : '<span style="color:var(--text3); font-size:13px;">No diagnosed conditions.</span>'}
              </div>
            </div>
          </div>

          <!-- Right Column: Medical History & Tablets -->
          <div style="display:flex; flex-direction:column; gap:20px;">
            <!-- Tablets & Medications -->
            <div class="section-card" style="border: 1px solid var(--accent); background: linear-gradient(180deg, rgba(0, 212, 160, 0.04) 0%, rgba(0, 0, 0, 0) 100%);">
              <div class="section-header" style="border-bottom: 1px solid rgba(0, 212, 160, 0.2); display:flex; justify-content:space-between; align-items:center;">
                <h3 style="color: var(--accent); display: flex; align-items: center; gap: 8px; font-family:'Syne',sans-serif; margin: 0;">💊 Necessity Tablets & Medications</h3>
                <span class="badge badge-green" id="tabletCountBadge">${meds.length} Prescribed</span>
              </div>
              <div style="padding: 20px;" id="pdMedsContainer">
                ${meds.length ? `
                  <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:12px;">
                    ${meds.map(m => `
                      <div style="background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:10px; padding:16px; display:flex; flex-direction:column; gap:8px;">
                        <div style="display:flex; justify-content:space-between; align-items:start;">
                          <span style="font-weight:600; font-size:15px; color:var(--text);">${m.name}</span>
                          <span class="badge badge-green" style="font-size:10px;">Tablet</span>
                        </div>
                        <div style="font-size:12px; color:var(--text2);">Prescribed for: <strong>${m.sourceRecord}</strong></div>
                        <div style="font-size:11px; color:var(--text3); margin-top:auto; display:flex; justify-content:space-between;">
                          <span>Type: ${m.type}</span>
                          <span>Date: ${m.prescribedOn}</span>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                ` : `
                  <div class="empty-state" style="text-align:center; padding:30px;">
                    <div class="icon" style="font-size:32px; margin-bottom:8px;">💊</div>
                    <h3>No Prescribed Tablets</h3>
                    <p style="font-size:12px; color:var(--text2);">No active medications prescribed by doctors were found in your records.</p>
                  </div>
                `}
              </div>
            </div>
            
            <!-- Appointments -->
            <div class="section-card">
              <div class="section-header" style="display:flex; justify-content:space-between; align-items:center;">
                <h3 style="font-family:'Syne',sans-serif; margin: 0;">Upcoming Appointments</h3>
                <button class="btn btn-primary btn-sm" onclick="showApplyAppointmentModal()">Apply for Appointment</button>
              </div>
              <table style="width:100%; border-collapse:collapse;">
                <thead>
                  <tr>
                    <th style="padding:12px 16px; font-size:11px; text-transform:uppercase; color:var(--text2); text-align:left; border-bottom:1px solid var(--border); background:var(--bg3);">Doctor</th>
                    <th style="padding:12px 16px; font-size:11px; text-transform:uppercase; color:var(--text2); text-align:left; border-bottom:1px solid var(--border); background:var(--bg3);">Date & Time</th>
                    <th style="padding:12px 16px; font-size:11px; text-transform:uppercase; color:var(--text2); text-align:left; border-bottom:1px solid var(--border); background:var(--bg3);">Type</th>
                    <th style="padding:12px 16px; font-size:11px; text-transform:uppercase; color:var(--text2); text-align:left; border-bottom:1px solid var(--border); background:var(--bg3);">Notes</th>
                    <th style="padding:12px 16px; font-size:11px; text-transform:uppercase; color:var(--text2); text-align:left; border-bottom:1px solid var(--border); background:var(--bg3);">Status</th>
                  </tr>
                </thead>
                <tbody id="pdAppointmentsTable">
                  ${myAppts.length ? myAppts.map(a => {
                    const doc = store.users.find(u => u.id === a.doctorId);
                    return `<tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
                      <td style="padding:14px 16px;"><strong>${doc?.name || 'Unknown Doctor'}</strong></td>
                      <td style="padding:14px 16px;"><strong>${a.date}</strong> at ${a.time}</td>
                      <td style="padding:14px 16px;"><span class="badge badge-blue">${a.type}</span></td>
                      <td style="padding:14px 16px; font-size:12px; color:var(--text2);">${a.notes || '—'}</td>
                      <td style="padding:14px 16px;">${statusBadge(a.status)}</td>
                    </tr>`;
                  }).join('') : `<tr><td colspan="5"><div class="empty-state" style="padding: 20px; text-align:center;"><h3>No appointments scheduled</h3></div></td></tr>`}
                </tbody>
              </table>
            </div>

            <!-- Timeline history -->
            <div class="section-card" style="padding:20px;">
              <div class="section-header" style="padding:0 0 12px 0; margin-bottom:16px; border-bottom:1px solid var(--border);">
                <h3 style="font-family:'Syne',sans-serif; margin: 0;">My Medical History</h3>
              </div>
              <div id="pdHistoryTimeline" style="display:flex; flex-direction:column; gap:12px;">
                ${myRecords.length ? myRecords.map(r => {
                  const typeColors = { Diagnosis: 'purple', 'Lab Result': 'blue', Emergency: 'red', Prescription: 'green' };
                  const colorMap = { Diagnosis: 'var(--purple)', 'Lab Result': 'var(--blue)', Emergency: 'var(--red)', Prescription: 'var(--accent)' };
                  const borderCol = colorMap[r.type] || 'var(--border)';
                  return `
                  <div class="med-history-card" style="background: rgba(255,255,255,0.01); border: 1px solid var(--border); border-left: 4px solid ${borderCol}; border-radius: 12px; padding: 16px; position:relative; display:flex; flex-direction:column; gap:8px;">
                    <div style="display:flex; justify-content:space-between; align-items:start;">
                      <div>
                        <h4 style="font-size:14px; font-weight:700; color:var(--text); display:flex; align-items:center; gap:6px; margin:0;">
                          <span>🩺</span> ${r.title}
                        </h4>
                        <div style="font-size:11px; color:var(--text3); margin-top:2px; display:flex; align-items:center; gap:4px;">
                          <span>📅</span> Date: ${r.date}
                        </div>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span class="badge badge-${typeColors[r.type] || 'gray'}">${r.type}</span>
                        <button class="btn btn-secondary btn-sm" onclick="downloadSingleMedicalRecord('${r.id}')" style="padding: 4px 8px; font-size: 11px; display:flex; align-items:center; gap:4px; height:auto; border-radius:6px; font-weight:500;" id="btn-download-${r.id}">
                          <span>📥</span> Download
                        </button>
                      </div>
                    </div>
                    <p style="font-size:13px; color:var(--text2); line-height:1.5; margin:0; background:rgba(0,0,0,0.15); padding:8px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.02);">${r.description}</p>
                    ${r.medications && r.medications.length ? `
                      <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; margin-top:4px;">
                        <span style="font-size:11px; color:var(--text3); text-transform:uppercase; letter-spacing:0.04em;">Medications: </span>
                        ${r.medications.map(med => `<span class="badge badge-gray" style="margin-right:2px; display:flex; align-items:center; gap:3px;">💊 ${med}</span>`).join('')}
                      </div>
                    ` : ''}
                  </div>
                  `;
                }).join('') : '<span style="color:var(--text3); font-size:13px;">No medical records found.</span>'}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function patientLogout() {
      sessionStorage.removeItem('phms_current_patient_user');
      sessionStorage.removeItem('phms_token');
      document.getElementById('patientPortal').style.display = 'none';
      document.getElementById('loginPage').style.display = 'flex';
      document.getElementById('patEmail').value = '';
      document.getElementById('patPassword').value = '';
      document.getElementById('patLoginError').style.display = 'none';
      switchPortal('patient');
      switchPatientTab('login');
    }

    // ── HELPERS & APPLICATION LOGIC FOR PATIENTS ──
    function editPatientProfile() {
      const patient = JSON.parse(sessionStorage.getItem('phms_current_patient_user'));
      if (!patient) return;
      openModal('Edit My Profile', `
        <div class="form-row">
          <div class="form-group"><label for="my_name">Full Name</label><span class="badge badge-blue" style="width:fit-content; margin-top:2px;">${freshPatient.bloodGroup || '—'}</span></div>
                <div class="detail-item" style="margin-top: 8px;"><label>Address</label><span>${freshPatient.address || 'Not Provided'}</span></div>
                <div class="detail-item" style="grid-column: span 2; margin-top: 12px;"><label>Assigned Doctor</label><span style="color:var(--accent); font-weight:600;">${doctor ? `👨‍⚕️ ${doctor.name} (${doctor.department})` : 'Not Assigned'}</span></div>
              </div>
              <button class="btn btn-secondary" style="width:100%; margin-top: 16px; border-radius: 8px;" onclick="editPatientProfile()">✏️ Edit Profile</button>
            </div>
            
            <div class="section-card" style="padding: 20px;">
              <div class="section-header" style="padding: 0 0 12px 0; margin-bottom: 12px; border-bottom: 1px solid var(--border);">
                <h3 style="font-size: 14px;">Active Conditions</h3>
              </div>
              <div id="pdConditions" style="display:flex; flex-wrap:wrap; gap:6px;">
                ${freshPatient.conditions && freshPatient.conditions.length 
                  ? freshPatient.conditions.map(c => `<span class="badge badge-yellow">${c}</span>`).join('') 
                  : '<span style="color:var(--text3); font-size:13px;">No diagnosed conditions.</span>'}
              </div>
            </div>
          </div>

          <!-- Right Column: Medical History & Tablets -->
          <div style="display:flex; flex-direction:column; gap:20px;">
            <!-- Tablets & Medications -->
            <div class="section-card" style="border: 1px solid var(--accent); background: linear-gradient(180deg, rgba(0, 212, 160, 0.04) 0%, rgba(0, 0, 0, 0) 100%);">
              <div class="section-header" style="border-bottom: 1px solid rgba(0, 212, 160, 0.2); display:flex; justify-content:space-between; align-items:center;">
                <h3 style="color: var(--accent); display: flex; align-items: center; gap: 8px; font-family:'Syne',sans-serif; margin: 0;">💊 Necessity Tablets & Medications</h3>
                <span class="badge badge-green" id="tabletCountBadge">${meds.length} Prescribed</span>
              </div>
              <div style="padding: 20px;" id="pdMedsContainer">
                ${meds.length ? `
                  <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:12px;">
                    ${meds.map(m => `
                      <div style="background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:10px; padding:16px; display:flex; flex-direction:column; gap:8px;">
                        <div style="display:flex; justify-content:space-between; align-items:start;">
                          <span style="font-weight:600; font-size:15px; color:var(--text);">${m.name}</span>
                          <span class="badge badge-green" style="font-size:10px;">Tablet</span>
                        </div>
                        <div style="font-size:12px; color:var(--text2);">Prescribed for: <strong>${m.sourceRecord}</strong></div>
                        <div style="font-size:11px; color:var(--text3); margin-top:auto; display:flex; justify-content:space-between;">
                          <span>Type: ${m.type}</span>
                          <span>Date: ${m.prescribedOn}</span>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                ` : `
                  <div class="empty-state" style="text-align:center; padding:30px;">
                    <div class="icon" style="font-size:32px; margin-bottom:8px;">💊</div>
                    <h3>No Prescribed Tablets</h3>
                    <p style="font-size:12px; color:var(--text2);">No active medications prescribed by doctors were found in your records.</p>
                  </div>
                `}
              </div>
            </div>
            
            <!-- Appointments -->
            <div class="section-card">
              <div class="section-header" style="display:flex; justify-content:space-between; align-items:center;">
                <h3 style="font-family:'Syne',sans-serif; margin: 0;">Upcoming Appointments</h3>
                <button class="btn btn-primary btn-sm" onclick="showApplyAppointmentModal()">Apply for Appointment</button>
              </div>
              <table style="width:100%; border-collapse:collapse;">
                <thead>
                  <tr>
                    <th style="padding:12px 16px; font-size:11px; text-transform:uppercase; color:var(--text2); text-align:left; border-bottom:1px solid var(--border); background:var(--bg3);">Doctor</th>
                    <th style="padding:12px 16px; font-size:11px; text-transform:uppercase; color:var(--text2); text-align:left; border-bottom:1px solid var(--border); background:var(--bg3);">Date & Time</th>
                    <th style="padding:12px 16px; font-size:11px; text-transform:uppercase; color:var(--text2); text-align:left; border-bottom:1px solid var(--border); background:var(--bg3);">Type</th>
                    <th style="padding:12px 16px; font-size:11px; text-transform:uppercase; color:var(--text2); text-align:left; border-bottom:1px solid var(--border); background:var(--bg3);">Notes</th>
                    <th style="padding:12px 16px; font-size:11px; text-transform:uppercase; color:var(--text2); text-align:left; border-bottom:1px solid var(--border); background:var(--bg3);">Status</th>
                  </tr>
                </thead>
                <tbody id="pdAppointmentsTable">
                  ${myAppts.length ? myAppts.map(a => {
                    const doc = store.users.find(u => u.id === a.doctorId);
                    return `<tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
                      <td style="padding:14px 16px;"><strong>${doc?.name || 'Unknown Doctor'}</strong></td>
                      <td style="padding:14px 16px;"><strong>${a.date}</strong> at ${a.time}</td>
                      <td style="padding:14px 16px;"><span class="badge badge-blue">${a.type}</span></td>
                      <td style="padding:14px 16px; font-size:12px; color:var(--text2);">${a.notes || '—'}</td>
                      <td style="padding:14px 16px;">${statusBadge(a.status)}</td>
                    </tr>`;
                  }).join('') : `<tr><td colspan="5"><div class="empty-state" style="padding: 20px; text-align:center;"><h3>No appointments scheduled</h3></div></td></tr>`}
                </tbody>
              </table>
            </div>

            <!-- Timeline history -->
            <div class="section-card" style="padding:20px;">
              <div class="section-header" style="padding:0 0 12px 0; margin-bottom:16px; border-bottom:1px solid var(--border);">
                <h3 style="font-family:'Syne',sans-serif; margin: 0;">My Medical History</h3>
              </div>
              <div id="pdHistoryTimeline" style="display:flex; flex-direction:column; gap:12px;">
                ${myRecords.length ? myRecords.map(r => {
                  const typeColors = { Diagnosis: 'purple', 'Lab Result': 'blue', Emergency: 'red', Prescription: 'green' };
                  const colorMap = { Diagnosis: 'var(--purple)', 'Lab Result': 'var(--blue)', Emergency: 'var(--red)', Prescription: 'var(--accent)' };
                  const borderCol = colorMap[r.type] || 'var(--border)';
                  return `
                  <div class="med-history-card" style="background: rgba(255,255,255,0.01); border: 1px solid var(--border); border-left: 4px solid ${borderCol}; border-radius: 12px; padding: 16px; position:relative; display:flex; flex-direction:column; gap:8px;">
                    <div style="display:flex; justify-content:space-between; align-items:start;">
                      <div>
                        <h4 style="font-size:14px; font-weight:700; color:var(--text); display:flex; align-items:center; gap:6px; margin:0;">
                          <span>🩺</span> ${r.title}
                        </h4>
                        <div style="font-size:11px; color:var(--text3); margin-top:2px; display:flex; align-items:center; gap:4px;">
                          <span>📅</span> Date: ${r.date}
                        </div>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span class="badge badge-${typeColors[r.type] || 'gray'}">${r.type}</span>
                        <button class="btn btn-secondary btn-sm" onclick="downloadSingleMedicalRecord('${r.id}')" style="padding: 4px 8px; font-size: 11px; display:flex; align-items:center; gap:4px; height:auto; border-radius:6px; font-weight:500;" id="btn-download-${r.id}">
                          <span>📥</span> Download
                        </button>
                      </div>
                    </div>
                    <p style="font-size:13px; color:var(--text2); line-height:1.5; margin:0; background:rgba(0,0,0,0.15); padding:8px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.02);">${r.description}</p>
                    ${r.medications && r.medications.length ? `
                      <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; margin-top:4px;">
                        <span style="font-size:11px; color:var(--text3); text-transform:uppercase; letter-spacing:0.04em;">Medications: </span>
                        ${r.medications.map(med => `<span class="badge badge-gray" style="margin-right:2px; display:flex; align-items:center; gap:3px;">💊 ${med}</span>`).join('')}
                      </div>
                    ` : ''}
                  </div>
                  `;
                }).join('') : '<span style="color:var(--text3); font-size:13px;">No medical records found.</span>'}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function patientLogout() {
      sessionStorage.removeItem('phms_current_patient_user');
      sessionStorage.removeItem('phms_token');
      document.getElementById('patientPortal').style.display = 'none';
      document.getElementById('loginPage').style.display = 'flex';
      document.getElementById('patEmail').value = '';
      document.getElementById('patPassword').value = '';
      document.getElementById('patLoginError').style.display = 'none';
      switchPortal('patient');
      switchPatientTab('login');
    }

    // ── HELPERS & APPLICATION LOGIC FOR PATIENTS ──
    function editPatientProfile() {
      const patient = JSON.parse(sessionStorage.getItem('phms_current_patient_user'));
      if (!patient) return;
      openModal('Edit My Profile', `
        <div class="form-row">
          <div class="form-group"><label for="my_name">Full Name</label><input id="my_name" value="${patient.name}"></div>
          <div class="form-group"><label for="my_phone">Phone Number</label><input id="my_phone" value="${patient.phone || ''}"></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label for="my_age">Age</label><input id="my_age" type="number" value="${patient.age || ''}"></div>
          <div class="form-group"><label for="my_gender">Gender</label>
            <select id="my_gender">
              <option ${patient.gender === 'Male' ? 'selected' : ''}>Male</option>
              <option ${patient.gender === 'Female' ? 'selected' : ''}>Female</option>
              <option ${patient.gender === 'Other' ? 'selected' : ''}>Other</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group"><label for="my_blood">Blood Group</label>
            <select id="my_blood">
              <option value="">Select</option>
              ${['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(b => `<option ${patient.bloodGroup === b ? 'selected' : ''}>${b}</option>`).join('')}
            </select>
          </div>
          <div class="form-group"><label for="my_addr">Address</label><input id="my_addr" value="${patient.address || ''}"></div>
        </div>
        <div class="modal-actions" style="margin-top: 16px;">
          <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button class="btn btn-primary" onclick="savePatientProfile('${patient.id}')">Save Changes</button>
        </div>
      `);
    }

    async function savePatientProfile(id) {
      loadStore();
      const pIndex = store.patients.findIndex(p => p.id === id);
      if (pIndex === -1) {
         showToast('❌ Patient record not found locally.', 'error');
         return;
      }
      
      const p = store.patients[pIndex];
      p.name = document.getElementById('my_name').value;
      p.phone = document.getElementById('my_phone').value;
      p.age = document.getElementById('my_age').value;
      p.gender = document.getElementById('my_gender').value;
      p.bloodGroup = document.getElementById('my_blood').value;
      p.address = document.getElementById('my_addr').value;
      
      // Send to backend
      try {
        const response = await fetch('/api/patients/' + id, { 
           method: 'PUT', 
           headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + sessionStorage.getItem('phms_token')
           },
           body: JSON.stringify(p) 
        });
        
        if (!response.ok) {
           throw new Error('Server returned ' + response.status);
        }
        
        // Update store
        store.patients[pIndex] = p;
        
        // Update session storage
        sessionStorage.setItem('phms_current_patient_user', JSON.stringify(p));
        
        showToast('✅ Profile updated successfully!', 'success');
        closeModal();
        renderPatientPortal(p);
      } catch (err) {
        console.error(err);
        showToast('❌ Failed to update profile.', 'error');
      }
    }
    async function downloadMedicalHistory() {
      loadStore();
      const currentPatient = JSON.parse(sessionStorage.getItem('phms_current_patient_user'));
      if (!currentPatient) {
        showToast('❌ Session expired. Please log in again.', 'error');
        return;
      }
      
      const records = store.records.filter(r => r.patientId === currentPatient.id);
      if (!records || records.length === 0) {
        showToast('❌ No medical records available to download.', 'error');
        return;
      }
      
      const btn = document.getElementById('downloadPdfBtn');
      const originalText = btn.textContent;
      btn.textContent = 'Generating...';
      btn.disabled = true;
      
      try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // ── 1. HEADER (Dark Branding) ──
        doc.setFillColor(15, 23, 42); // Deep slate-blue
        doc.rect(0, 0, 210, 40, 'F');
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(26);
        doc.setFont('helvetica', 'bold');
        doc.text('HealthSync', 14, 22);
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(148, 163, 184); // light gray-blue
        doc.text('PUBLIC HEALTH MANAGEMENT SYSTEM', 14, 30);
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('MEDICAL HISTORY REPORT', 196, 26, { align: 'right' });
        
        // ── 2. WATERMARK ──
        doc.setTextColor(245, 247, 250); // Very light gray
        doc.setFontSize(65);
        doc.setFont('helvetica', 'bold');
        doc.text('CONFIDENTIAL', 105, 150, { align: 'center', angle: 45 });
        
        // ── 3. PATIENT PROFILE CARD ──
        const doctor = store.users.find(u => u.id === currentPatient.assignedDoctor);
        const doctorName = doctor ? doctor.name + ' (' + doctor.department + ')' : 'Not Assigned';
        
        doc.setFillColor(248, 250, 252); // slate-50 background
        doc.setDrawColor(226, 232, 240); // slate-200 border
        doc.roundedRect(14, 48, 182, 38, 3, 3, 'FD'); // Fill and Draw
        
        doc.setFontSize(14);
        doc.setTextColor(15, 23, 42);
        doc.setFont('helvetica', 'bold');
        doc.text('Patient Information', 20, 58);
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(71, 85, 105);
        doc.text('Name:', 20, 68);
        doc.text('Age / Gender:', 20, 75);
        doc.text('Blood Group:', 20, 82);
        
        doc.setTextColor(15, 23, 42);
        doc.setFont('helvetica', 'bold');
        doc.text(currentPatient.name, 45, 68);
        doc.text(`${currentPatient.age} / ${currentPatient.gender}`, 45, 75);
        doc.text(currentPatient.bloodGroup || 'N/A', 45, 82);
        
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(71, 85, 105);
        doc.text('Primary Doctor:', 100, 68);
        doc.text('Contact:', 100, 75);
        doc.text('Report Date:', 100, 82);
        
        doc.setTextColor(15, 23, 42);
        doc.setFont('helvetica', 'bold');
        doc.text(doctorName, 130, 68);
        doc.text(`${currentPatient.phone || 'N/A'}`, 130, 75);
        doc.text(new Date().toLocaleDateString(), 130, 82);
        
        let currentY = 96;
        
        // ── 4. ACTIVE CONDITIONS (if any) ──
        if (currentPatient.conditions && currentPatient.conditions.length > 0) {
          doc.setFontSize(11);
          doc.setTextColor(220, 38, 38); // Red
          doc.setFont('helvetica', 'bold');
          doc.text('⚠ Active Conditions:', 14, currentY);
          
          doc.setTextColor(15, 23, 42);
          doc.setFont('helvetica', 'normal');
          doc.text(currentPatient.conditions.join(', '), 58, currentY);
          currentY += 10;
        }
        
        // ── 5. MEDICATIONS (Summary) ──
        const meds = getPatientMedications(currentPatient.id);
        if (meds && meds.length > 0) {
          doc.setFontSize(14);
          doc.setTextColor(15, 23, 42);
          doc.setFont('helvetica', 'bold');
          doc.text('Current Medications', 14, currentY);
          currentY += 6;
          
          const medsData = meds.map(m => [m.name, m.type, m.sourceRecord, m.prescribedOn]);
          doc.autoTable({
            startY: currentY,
            head: [['Medication', 'Type', 'Prescribed For', 'Date']],
            body: medsData,
            theme: 'grid',
            headStyles: { fillColor: [0, 212, 160], textColor: [255, 255, 255], fontStyle: 'bold' },
            alternateRowStyles: { fillColor: [248, 250, 252] },
            styles: { fontSize: 9, cellPadding: 5, textColor: [71, 85, 105], lineColor: [226, 232, 240] }
          });
          currentY = doc.lastAutoTable.finalY + 12;
        }
        
        // ── 6. TIMELINE RECORDS ──
        doc.setFontSize(14);
        doc.setTextColor(15, 23, 42);
        doc.setFont('helvetica', 'bold');
        doc.text('Medical History (Chronological)', 14, currentY);
        currentY += 6;
        
        const sortedRecords = [...records].sort((a, b) => new Date(b.date) - new Date(a.date));
        const recordsData = sortedRecords.map(r => {
          const vitals = r.vitals ? `BP: ${r.vitals.bp}\nHR: ${r.vitals.heartRate}\nTemp: ${r.vitals.temp}` : 'N/A';
          return [
            r.date,
            r.type,
            r.title,
            r.description,
            vitals,
            (r.medications || []).join(', ') || 'None'
          ];
        });
        
        doc.autoTable({
          startY: currentY,
          head: [['Date', 'Type', 'Title / Diagnosis', 'Description & Notes', 'Vitals', 'Medications']],
          body: recordsData,
          theme: 'grid',
          headStyles: { fillColor: [15, 33, 58], textColor: [255, 255, 255], fontStyle: 'bold' },
          alternateRowStyles: { fillColor: [248, 250, 252] },
          styles: { fontSize: 9, cellPadding: 5, textColor: [71, 85, 105], lineColor: [226, 232, 240] },
          columnStyles: { 3: { cellWidth: 50 } } // Give description more space
        });
        
        // ── 7. FOOTER ──
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
          doc.setPage(i);
          doc.setFillColor(15, 23, 42);
          doc.rect(0, 285, 210, 15, 'F');
          
          doc.setFontSize(8);
          doc.setTextColor(255, 255, 255);
          doc.setFont('helvetica', 'normal');
          doc.text(`HealthSync - Confidential Medical Record`, 14, 294);
          doc.text(`Page ${i} of ${pageCount}`, 196, 294, { align: 'right' });
        }
        
        // Save PDF
        const filename = `Medical_History_${currentPatient.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(filename);
        
        showToast('✅ Medical history PDF downloaded!', 'success');
      } catch (error) {
        console.error('PDF Generation Error:', error);
        showToast('❌ Error generating PDF. Check console.', 'error');
      } finally {
        btn.textContent = originalText;
        btn.disabled = false;
      }
    }
    async function downloadSingleMedicalRecord(recordId) {
      loadStore();
      let currentPatient;
      if (sessionStorage.getItem('phms_current_patient')) {
        currentPatient = JSON.parse(sessionStorage.getItem('phms_current_patient'));
      } else if (sessionStorage.getItem('phms_current_patient_user')) {
        currentPatient = JSON.parse(sessionStorage.getItem('phms_current_patient_user'));
      }
      
      if (!currentPatient) {
        showToast('❌ Session expired.', 'error');
        return;
      }
      const record = store.records.find(r => r.id === recordId);
      if (!record) return;
      
      const btn = document.getElementById('btn-download-' + recordId);
      const originalText = btn.innerHTML;
      btn.innerHTML = '<span>⏳</span>...';
      btn.disabled = true;
      
      try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // ── 1. HEADER ──
        doc.setFillColor(15, 23, 42); 
        doc.rect(0, 0, 210, 40, 'F'); 
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(26);
        doc.setFont('helvetica', 'bold');
        doc.text('HealthSync', 14, 22);
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(148, 163, 184); 
        doc.text('PUBLIC HEALTH MANAGEMENT SYSTEM', 14, 30);
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('CLINICAL RECORD', 196, 26, { align: 'right' });
        
        // ── 2. WATERMARK ──
        doc.setTextColor(245, 247, 250);
        doc.setFontSize(65);
        doc.setFont('helvetica', 'bold');
        doc.text('CONFIDENTIAL', 105, 150, { align: 'center', angle: 45 });
        
        // ── 3. PATIENT INFO BOX ──
        doc.setFillColor(248, 250, 252);
        doc.setDrawColor(226, 232, 240);
        doc.roundedRect(14, 48, 182, 25, 3, 3, 'FD');
        
        doc.setFontSize(10);
        doc.setTextColor(71, 85, 105);
        doc.setFont('helvetica', 'normal');
        doc.text('Patient Name:', 20, 58);
        doc.text('Patient ID:', 110, 58);
        doc.text('Age / Gender:', 20, 66);
        doc.text('Date of Record:', 110, 66);
        
        doc.setTextColor(15, 23, 42);
        doc.setFont('helvetica', 'bold');
        doc.text(currentPatient.name, 48, 58);
        doc.text(currentPatient.id, 140, 58);
        doc.text(`${currentPatient.age} / ${currentPatient.gender}`, 48, 66);
        doc.text(new Date(record.date).toLocaleDateString(), 140, 66);

        // ── 4. RECORD DETAILS ──
        let currentY = 85;
        doc.setFontSize(16);
        doc.setTextColor(15, 23, 42);
        doc.setFont('helvetica', 'bold');
        doc.text('Clinical Assessment Details', 14, currentY);
        
        currentY += 6;
        
        doc.autoTable({
          startY: currentY,
          theme: 'grid',
          headStyles: { fillColor: [0, 119, 204], textColor: [255, 255, 255], fontStyle: 'bold' },
          styles: { fontSize: 10, cellPadding: 6, textColor: [15, 23, 42], lineColor: [226, 232, 240] },
          columnStyles: { 0: { fontStyle: 'bold', cellWidth: 50, fillColor: [248, 250, 252] } },
          body: [
            ['Record Type', record.type],
            ['Diagnosis / Title', record.title],
            ['Clinical Description', record.description],
            ['Vital Signs', record.vitals ? `BP: ${record.vitals.bp} | HR: ${record.vitals.heartRate} bpm | Temp: ${record.vitals.temp}°C` : 'Not recorded'],
            ['Prescribed Medications', (record.medications || []).join(', ') || 'None prescribed']
          ]
        });

        // ── 5. FOOTER ──
        doc.setFillColor(15, 23, 42);
        doc.rect(0, 285, 210, 15, 'F');
        doc.setFontSize(8);
        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'normal');
        doc.text(`HealthSync - Confidential Medical Record`, 14, 292);
        doc.text(`Authorized by Attending Physician`, 196, 292, { align: 'right' });

        doc.save(`Record_${currentPatient.name.replace(/\s+/g, '_')}_${record.date}.pdf`);
        showToast('✅ Record PDF downloaded!', 'success');
      } catch (e) {
        console.error(e);
        showToast('❌ Error generating PDF.', 'error');
      } finally {
        btn.innerHTML = originalText; btn.disabled = false;
      }
    }

    function getPatientMedications(patientId) {
      const records = store.records.filter(r => r.patientId === patientId);
      const meds = [];
      records.forEach(r => {
        if (r.medications && r.medications.length) {
          r.medications.forEach(m => {
            meds.push({ name: m, prescribedOn: r.date, sourceRecord: r.title, type: r.type });
          });
        }
      });
      return meds;
    }

    function showApplyAppointmentModal() {
      loadStore();
      const savedPatient = sessionStorage.getItem('phms_current_patient_user');
      if (!savedPatient) {
        showToast('❌ Session expired. Please log in again.', 'error');
        return;
      }
      const currentPatient = JSON.parse(savedPatient);
      const doctors = store.users.filter(u => u.role === 'doctor');
      
      if (doctors.length === 0) {
        showToast('⚠️ No doctors available in the system currently.', 'warning');
        return;
      }
      
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowStr = tomorrow.toISOString().split('T')[0];
      
      const modalBody = document.getElementById('modalBody');
      document.getElementById('modalTitle').textContent = 'Apply for Doctor Appointment';
      
      modalBody.innerHTML = `
        <div id="apptFormView" style="animation: slideUp 0.3s ease forwards;">
          <p style="font-size: 13px; color: var(--text2); margin-bottom: 20px;">
            Fill in the details below. The system will automatically compile this request into a formal appointment request letter for your doctor.
          </p>
          
          <div class="form-group">
            <label for="apptDoctor">Consulting Physician (Doctor)</label><span>${freshPatient.age || '—'} yrs / ${freshPatient.gender}</span></div>
                <div class="detail-item" style="margin-top: 8px;"><label>Blood Group</label><span class="badge badge-blue" style="width:fit-content; margin-top:2px;">${freshPatient.bloodGroup || '—'}</span></div>
                <div class="detail-item" style="margin-top: 8px;"><label>Address</label><span>${freshPatient.address || 'Not Provided'}</span></div>
                <div class="detail-item" style="grid-column: span 2; margin-top: 12px;"><label>Assigned Doctor</label><span style="color:var(--accent); font-weight:600;">${doctor ? `👨‍⚕️ ${doctor.name} (${doctor.department})` : 'Not Assigned'}</span></div>
              </div>
            </div>
            
            <div class="section-card" style="padding: 20px;">
              <div class="section-header" style="padding: 0 0 12px 0; margin-bottom: 12px; border-bottom: 1px solid var(--border);">
                <h3 style="font-size: 14px;">Active Conditions</h3>
              </div>
              <div id="pdConditions" style="display:flex; flex-wrap:wrap; gap:6px;">
                ${freshPatient.conditions && freshPatient.conditions.length 
                  ? freshPatient.conditions.map(c => `<span class="badge badge-yellow">${c}</span>`).join('') 
                  : '<span style="color:var(--text3); font-size:13px;">No diagnosed conditions.</span>'}
              </div>
            </div>
          </div>

          <!-- Right Column: Medical History & Tablets -->
          <div style="display:flex; flex-direction:column; gap:20px;">
            <!-- Tablets & Medications -->
            <div class="section-card" style="border: 1px solid var(--accent); background: linear-gradient(180deg, rgba(0, 212, 160, 0.04) 0%, rgba(0, 0, 0, 0) 100%);">
              <div class="section-header" style="border-bottom: 1px solid rgba(0, 212, 160, 0.2); display:flex; justify-content:space-between; align-items:center;">
                <h3 style="color: var(--accent); display: flex; align-items: center; gap: 8px; font-family:'Syne',sans-serif; margin: 0;">💊 Necessity Tablets & Medications</h3>
                <span class="badge badge-green" id="tabletCountBadge">${meds.length} Prescribed</span>
              </div>
              <div style="padding: 20px;" id="pdMedsContainer">
                ${meds.length ? `
                  <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:12px;">
                    ${meds.map(m => `
                      <div style="background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:10px; padding:16px; display:flex; flex-direction:column; gap:8px;">
                        <div style="display:flex; justify-content:space-between; align-items:start;">
                          <span style="font-weight:600; font-size:15px; color:var(--text);">${m.name}</span>
                          <span class="badge badge-green" style="font-size:10px;">Tablet</span>
                        </div>
                        <div style="font-size:12px; color:var(--text2);">Prescribed for: <strong>${m.sourceRecord}</strong></div>
                        <div style="font-size:11px; color:var(--text3); margin-top:auto; display:flex; justify-content:space-between;">
                          <span>Type: ${m.type}</span>
                          <span>Date: ${m.prescribedOn}</span>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                ` : `
                  <div class="empty-state" style="text-align:center; padding:30px;">
                    <div class="icon" style="font-size:32px; margin-bottom:8px;">💊</div>
                    <h3>No Prescribed Tablets</h3>
                    <p style="font-size:12px; color:var(--text2);">No active medications prescribed by doctors were found in your records.</p>
                  </div>
                `}
              </div>
            </div>
            
            <!-- Appointments -->
            <div class="section-card">
              <div class="section-header" style="display:flex; justify-content:space-between; align-items:center;">
                <h3 style="font-family:'Syne',sans-serif; margin: 0;">Upcoming Appointments</h3>
                <button class="btn btn-primary btn-sm" onclick="showApplyAppointmentModal()">Apply for Appointment</button>
              </div>
              <table style="width:100%; border-collapse:collapse;">
                <thead>
                  <tr>
                    <th style="padding:12px 16px; font-size:11px; text-transform:uppercase; color:var(--text2); text-align:left; border-bottom:1px solid var(--border); background:var(--bg3);">Doctor</th>
                    <th style="padding:12px 16px; font-size:11px; text-transform:uppercase; color:var(--text2); text-align:left; border-bottom:1px solid var(--border); background:var(--bg3);">Date & Time</th>
                    <th style="padding:12px 16px; font-size:11px; text-transform:uppercase; color:var(--text2); text-align:left; border-bottom:1px solid var(--border); background:var(--bg3);">Type</th>
                    <th style="padding:12px 16px; font-size:11px; text-transform:uppercase; color:var(--text2); text-align:left; border-bottom:1px solid var(--border); background:var(--bg3);">Notes</th>
                    <th style="padding:12px 16px; font-size:11px; text-transform:uppercase; color:var(--text2); text-align:left; border-bottom:1px solid var(--border); background:var(--bg3);">Status</th>
                  </tr>
                </thead>
                <tbody id="pdAppointmentsTable">
                  ${myAppts.length ? myAppts.map(a => {
                    const doc = store.users.find(u => u.id === a.doctorId);
                    return `<tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
                      <td style="padding:14px 16px;"><strong>${doc?.name || 'Unknown Doctor'}</strong></td>
                      <td style="padding:14px 16px;"><strong>${a.date}</strong> at ${a.time}</td>
                      <td style="padding:14px 16px;"><span class="badge badge-blue">${a.type}</span></td>
                      <td style="padding:14px 16px; font-size:12px; color:var(--text2);">${a.notes || '—'}</td>
                      <td style="padding:14px 16px;">${statusBadge(a.status)}</td>
                    </tr>`;
                  }).join('') : `<tr><td colspan="5"><div class="empty-state" style="padding: 20px; text-align:center;"><h3>No appointments scheduled</h3></div></td></tr>`}
                </tbody>
              </table>
            </div>

            <!-- Timeline history -->
            <div class="section-card" style="padding:20px;">
              <div class="section-header" style="padding:0 0 12px 0; margin-bottom:16px; border-bottom:1px solid var(--border);">
                <h3 style="font-family:'Syne',sans-serif; margin: 0;">My Medical History</h3>
              </div>
              <div id="pdHistoryTimeline" style="display:flex; flex-direction:column; gap:12px;">
                ${myRecords.length ? myRecords.map(r => {
                  const typeColors = { Diagnosis: 'purple', 'Lab Result': 'blue', Emergency: 'red', Prescription: 'green' };
                  const colorMap = { Diagnosis: 'var(--purple)', 'Lab Result': 'var(--blue)', Emergency: 'var(--red)', Prescription: 'var(--accent)' };
                  const borderCol = colorMap[r.type] || 'var(--border)';
                  return `
                  <div class="med-history-card" style="background: rgba(255,255,255,0.01); border: 1px solid var(--border); border-left: 4px solid ${borderCol}; border-radius: 12px; padding: 16px; position:relative; display:flex; flex-direction:column; gap:8px;">
                    <div style="display:flex; justify-content:space-between; align-items:start;">
                      <div>
                        <h4 style="font-size:14px; font-weight:700; color:var(--text); display:flex; align-items:center; gap:6px; margin:0;">
                          <span>🩺</span> ${r.title}
                        </h4>
                        <div style="font-size:11px; color:var(--text3); margin-top:2px; display:flex; align-items:center; gap:4px;">
                          <span>📅</span> Date: ${r.date}
                        </div>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span class="badge badge-${typeColors[r.type] || 'gray'}">${r.type}</span>
                        <button class="btn btn-secondary btn-sm" onclick="downloadSingleMedicalRecord('${r.id}')" style="padding: 4px 8px; font-size: 11px; display:flex; align-items:center; gap:4px; height:auto; border-radius:6px; font-weight:500;" id="btn-download-${r.id}">
                          <span>📥</span> Download
                        </button>
                      </div>
                    </div>
                    <p style="font-size:13px; color:var(--text2); line-height:1.5; margin:0; background:rgba(0,0,0,0.15); padding:8px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.02);">${r.description}</p>
                    ${r.medications && r.medications.length ? `
                      <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; margin-top:4px;">
                        <span style="font-size:11px; color:var(--text3); text-transform:uppercase; letter-spacing:0.04em;">Medications: </span>
                        ${r.medications.map(med => `<span class="badge badge-gray" style="margin-right:2px; display:flex; align-items:center; gap:3px;">💊 ${med}</span>`).join('')}
                      </div>
                    ` : ''}
                  </div>
                  `;
                }).join('') : '<span style="color:var(--text3); font-size:13px;">No medical records found.</span>'}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function patientLogout() {
      sessionStorage.removeItem('phms_current_patient_user');
      sessionStorage.removeItem('phms_token');
      document.getElementById('patientPortal').style.display = 'none';
      document.getElementById('loginPage').style.display = 'flex';
      document.getElementById('patEmail').value = '';
      document.getElementById('patPassword').value = '';
      document.getElementById('patLoginError').style.display = 'none';
      switchPortal('patient');
      switchPatientTab('login');
    }

    // ── HELPERS & APPLICATION LOGIC FOR PATIENTS ──
    async function downloadMedicalHistory() {
      loadStore();
      const currentPatient = JSON.parse(sessionStorage.getItem('phms_current_patient_user'));
      if (!currentPatient) {
        showToast('❌ Session expired. Please log in again.', 'error');
        return;
      }
      
      const records = store.records.filter(r => r.patientId === currentPatient.id);
      if (!records || records.length === 0) {
        showToast('❌ No medical records available to download.', 'error');
        return;
      }
      
      const btn = document.getElementById('downloadPdfBtn');
      const originalText = btn.textContent;
      btn.textContent = 'Generating...';
      btn.disabled = true;
      
      try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Header
        doc.setFontSize(22);
        doc.setTextColor(0, 119, 204);
        doc.text('PHMS MEDICAL CLINIC', 105, 20, { align: 'center' });
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text('Public Health Management System - Medical History Report', 105, 28, { align: 'center' });
        doc.setDrawColor(200, 200, 200);
        doc.line(14, 32, 196, 32);
        
        // Patient Details
        const doctor = store.users.find(u => u.id === currentPatient.assignedDoctor);
        const doctorName = doctor ? doctor.name + ' (' + doctor.department + ')' : 'Not Assigned';
        
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.text('Patient Information', 14, 42);
        
        doc.autoTable({
          startY: 46,
          theme: 'plain',
          styles: { cellPadding: 2, fontSize: 10, textColor: [50, 50, 50] },
          columnStyles: { 
            0: { fontStyle: 'bold', cellWidth: 35 }, 
            1: { cellWidth: 60 }, 
            2: { fontStyle: 'bold', cellWidth: 35 }
          },
          body: [
            ['Patient Name:', currentPatient.name, 'Patient ID:', currentPatient.id],
            ['Age / Gender:', currentPatient.age + ' yrs / ' + currentPatient.gender, 'Blood Group:', currentPatient.bloodGroup || 'N/A'],
            ['Contact:', currentPatient.phone || 'N/A', 'Assigned Doctor:', doctorName],
            ['Address:', currentPatient.address || 'N/A', '', '']
          ]
        });
        
        let currentY = doc.lastAutoTable.finalY + 10;
        
        // Active Conditions
        if (currentPatient.conditions && currentPatient.conditions.length > 0) {
          doc.setFontSize(12);
          doc.setTextColor(50, 50, 50);
          doc.text('Active Conditions: ' + currentPatient.conditions.join(', '), 14, currentY);
          currentY += 10;
        }
        
        // Medications
        const meds = getPatientMedications(currentPatient.id);
        if (meds && meds.length > 0) {
          doc.setFontSize(14);
          doc.setTextColor(0, 0, 0);
          doc.text('Current Medications', 14, currentY);
          currentY += 6;
          
          const medsData = meds.map(m => [m.name, m.type, m.sourceRecord, m.prescribedOn]);
          doc.autoTable({
            startY: currentY,
            head: [['Medication', 'Type', 'Prescribed For', 'Date']],
            body: medsData,
            theme: 'striped',
            headStyles: { fillColor: [0, 212, 160], textColor: [255, 255, 255] },
            styles: { fontSize: 9 }
          });
          currentY = doc.lastAutoTable.finalY + 10;
        }
        
        // Medical History Timeline
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.text('Medical History (Chronological)', 14, currentY);
        currentY += 6;
        
        const sortedRecords = [...records].sort((a, b) => new Date(b.date) - new Date(a.date));
        const recordsData = sortedRecords.map(r => [
          r.date,
          r.type,
          r.title,
          r.description,
          (r.medications || []).join(', ') || 'None'
        ]);
        
        doc.autoTable({
          startY: currentY,
          head: [['Date', 'Type', 'Diagnosis / Title', 'Treatment Notes & Symptoms', 'Medications']],
          body: recordsData,
          theme: 'grid',
          headStyles: { fillColor: [100, 116, 139], textColor: [255, 255, 255] },
          styles: { fontSize: 9 },
          columnStyles: { 3: { cellWidth: 70 } }
        });
        
        // Footer
        const pageCount = doc.internal.getNumberOfPages();
        const generatedDate = new Date().toLocaleString();
        for (let i = 1; i <= pageCount; i++) {
          doc.setPage(i);
          doc.setFontSize(8);
          doc.setTextColor(150, 150, 150);
          doc.text(`Generated by Public Health Management System (PHMS) on ${generatedDate}`, 14, 290);
          doc.text(`Page ${i} of ${pageCount}`, 196, 290, { align: 'right' });
        }
        
        // Save PDF
        const filename = `Medical_History_${currentPatient.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(filename);
        
        showToast('✅ Medical history PDF downloaded!', 'success');
      } catch (error) {
        console.error('PDF Generation Error:', error);
        showToast('❌ Error generating PDF. Check console.', 'error');
      } finally {
        btn.textContent = originalText;
        btn.disabled = false;
      }
    }
    async function downloadSingleMedicalRecord(recordId) {
      loadStore();
      let currentPatient;
      if (sessionStorage.getItem('phms_current_patient')) {
        currentPatient = JSON.parse(sessionStorage.getItem('phms_current_patient'));
      } else if (sessionStorage.getItem('phms_current_patient_user')) {
        currentPatient = JSON.parse(sessionStorage.getItem('phms_current_patient_user'));
      }
      
      if (!currentPatient) {
        showToast('❌ Session expired.', 'error');
        return;
      }
      const record = store.records.find(r => r.id === recordId);
      if (!record) return;
      
      const btn = document.getElementById('btn-download-' + recordId);
      const originalText = btn.innerHTML;
      btn.innerHTML = '<span>⏳</span>...';
      btn.disabled = true;
      
      try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.setFontSize(22); doc.setTextColor(0, 119, 204);
        doc.text('PHMS MEDICAL CLINIC', 105, 20, { align: 'center' });
        doc.setFontSize(10); doc.setTextColor(100, 100, 100);
        doc.text('Individual Medical Record Report', 105, 28, { align: 'center' });
        doc.setDrawColor(200, 200, 200); doc.line(14, 32, 196, 32);
        
        doc.setFontSize(14); doc.setTextColor(0, 0, 0);
        doc.text('Patient Information', 14, 42);
        doc.autoTable({
          startY: 46, theme: 'plain', styles: { cellPadding: 2, fontSize: 10, textColor: [50, 50, 50] },
          columnStyles: { 0: { fontStyle: 'bold', cellWidth: 35 }, 1: { cellWidth: 60 } },
          body: [
            ['Patient Name:', currentPatient.name, 'Patient ID:', currentPatient.id],
            ['Age / Gender:', currentPatient.age + ' yrs / ' + currentPatient.gender, 'Date:', record.date]
          ]
        });
        
        let currentY = doc.lastAutoTable.finalY + 10;
        doc.setFontSize(14); doc.setTextColor(0, 0, 0);
        doc.text('Record Details', 14, currentY);
        
        doc.autoTable({
          startY: currentY + 6, theme: 'grid', headStyles: { fillColor: [100, 116, 139], textColor: [255, 255, 255] },
          styles: { fontSize: 10 }, columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } },
          body: [
            ['Record ID', record.id],
            ['Type', record.type],
            ['Diagnosis / Title', record.title],
            ['Description / Notes', record.description],
            ['Medications', (record.medications || []).join(', ') || 'None']
          ]
        });
        
        doc.setFontSize(8); doc.setTextColor(150, 150, 150);
        doc.text(`Generated by PHMS on ${new Date().toLocaleString()}`, 14, 290);
        doc.save(`Record_${currentPatient.name.replace(/\s+/g, '_')}_${record.date}.pdf`);
        showToast('✅ Record PDF downloaded!', 'success');
      } catch (e) {
        console.error(e);
        showToast('❌ Error generating PDF.', 'error');
      } finally {
        btn.innerHTML = originalText; btn.disabled = false;
      }
    }

    function getPatientMedications(patientId) {
      const records = store.records.filter(r => r.patientId === patientId);
      const meds = [];
      records.forEach(r => {
        if (r.medications && r.medications.length) {
          r.medications.forEach(m => {
            meds.push({ name: m, prescribedOn: r.date, sourceRecord: r.title, type: r.type });
          });
        }
      });
      return meds;
    }

    function showApplyAppointmentModal() {
      loadStore();
      const savedPatient = sessionStorage.getItem('phms_current_patient_user');
      if (!savedPatient) {
        showToast('❌ Session expired. Please log in again.', 'error');
        return;
      }
      const currentPatient = JSON.parse(savedPatient);
      const doctors = store.users.filter(u => u.role === 'doctor');
      
      if (doctors.length === 0) {
        showToast('⚠️ No doctors available in the system currently.', 'warning');
        return;
      }
      
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowStr = tomorrow.toISOString().split('T')[0];
      
      const modalBody = document.getElementById('modalBody');
      document.getElementById('modalTitle').textContent = 'Apply for Doctor Appointment';
      
      modalBody.innerHTML = `
        <div id="apptFormView" style="animation: slideUp 0.3s ease forwards;">
          <p style="font-size: 13px; color: var(--text2); margin-bottom: 20px;">
            Fill in the details below. The system will automatically compile this request into a formal appointment request letter for your doctor.
          </p>
          
          <div class="form-group">
            <label style="color: var(--text2); font-size: 11px; font-weight:600; text-transform: uppercase;">Consulting Physician (Doctor)</label><span>${freshPatient.age || '—'} yrs / ${freshPatient.gender}</span></div>
                <div class="detail-item" style="margin-top: 8px;"><label>Blood Group</label><span class="badge badge-blue" style="width:fit-content; margin-top:2px;">${freshPatient.bloodGroup || '—'}</span></div>
                <div class="detail-item" style="margin-top: 8px;"><label>Address</label><span>${freshPatient.address || 'Not Provided'}</span></div>
                <div class="detail-item" style="grid-column: span 2; margin-top: 12px;"><label>Assigned Doctor</label><span style="color:var(--accent); font-weight:600;">${doctor ? `👨‍⚕️ ${doctor.name} (${doctor.department})` : 'Not Assigned'}</span></div>
              </div>
            </div>
            
            <div class="section-card" style="padding: 20px;">
              <div class="section-header" style="padding: 0 0 12px 0; margin-bottom: 12px; border-bottom: 1px solid var(--border);">
                <h3 style="font-size: 14px;">Active Conditions</h3>
              </div>
              <div id="pdConditions" style="display:flex; flex-wrap:wrap; gap:6px;">
                ${freshPatient.conditions && freshPatient.conditions.length 
                  ? freshPatient.conditions.map(c => `<span class="badge badge-yellow">${c}</span>`).join('') 
                  : '<span style="color:var(--text3); font-size:13px;">No diagnosed conditions.</span>'}
              </div>
            </div>
          </div>

          <!-- Right Column: Medical History & Tablets -->
          <div style="display:flex; flex-direction:column; gap:20px;">
            <!-- Tablets & Medications -->
            <div class="section-card" style="border: 1px solid var(--accent); background: linear-gradient(180deg, rgba(0, 212, 160, 0.04) 0%, rgba(0, 0, 0, 0) 100%);">
              <div class="section-header" style="border-bottom: 1px solid rgba(0, 212, 160, 0.2); display:flex; justify-content:space-between; align-items:center;">
                <h3 style="color: var(--accent); display: flex; align-items: center; gap: 8px; font-family:'Syne',sans-serif; margin: 0;">💊 Necessity Tablets & Medications</h3>
                <span class="badge badge-green" id="tabletCountBadge">${meds.length} Prescribed</span>
              </div>
              <div style="padding: 20px;" id="pdMedsContainer">
                ${meds.length ? `
                  <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:12px;">
                    ${meds.map(m => `
                      <div style="background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:10px; padding:16px; display:flex; flex-direction:column; gap:8px;">
                        <div style="display:flex; justify-content:space-between; align-items:start;">
                          <span style="font-weight:600; font-size:15px; color:var(--text);">${m.name}</span>
                          <span class="badge badge-green" style="font-size:10px;">Tablet</span>
                        </div>
                        <div style="font-size:12px; color:var(--text2);">Prescribed for: <strong>${m.sourceRecord}</strong></div>
                        <div style="font-size:11px; color:var(--text3); margin-top:auto; display:flex; justify-content:space-between;">
                          <span>Type: ${m.type}</span>
                          <span>Date: ${m.prescribedOn}</span>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                ` : `
                  <div class="empty-state" style="text-align:center; padding:30px;">
                    <div class="icon" style="font-size:32px; margin-bottom:8px;">💊</div>
                    <h3>No Prescribed Tablets</h3>
                    <p style="font-size:12px; color:var(--text2);">No active medications prescribed by doctors were found in your records.</p>
                  </div>
                `}
              </div>
            </div>
            
            <!-- Appointments -->
            <div class="section-card">
              <div class="section-header" style="display:flex; justify-content:space-between; align-items:center;">
                <h3 style="font-family:'Syne',sans-serif; margin: 0;">Upcoming Appointments</h3>
                <button class="btn btn-primary btn-sm" onclick="showApplyAppointmentModal()">Apply for Appointment</button>
              </div>
              <table style="width:100%; border-collapse:collapse;">
                <thead>
                  <tr>
                    <th style="padding:12px 16px; font-size:11px; text-transform:uppercase; color:var(--text2); text-align:left; border-bottom:1px solid var(--border); background:var(--bg3);">Doctor</th>
                    <th style="padding:12px 16px; font-size:11px; text-transform:uppercase; color:var(--text2); text-align:left; border-bottom:1px solid var(--border); background:var(--bg3);">Date & Time</th>
                    <th style="padding:12px 16px; font-size:11px; text-transform:uppercase; color:var(--text2); text-align:left; border-bottom:1px solid var(--border); background:var(--bg3);">Type</th>
                    <th style="padding:12px 16px; font-size:11px; text-transform:uppercase; color:var(--text2); text-align:left; border-bottom:1px solid var(--border); background:var(--bg3);">Notes</th>
                    <th style="padding:12px 16px; font-size:11px; text-transform:uppercase; color:var(--text2); text-align:left; border-bottom:1px solid var(--border); background:var(--bg3);">Status</th>
                  </tr>
                </thead>
                <tbody id="pdAppointmentsTable">
                  ${myAppts.length ? myAppts.map(a => {
                    const doc = store.users.find(u => u.id === a.doctorId);
                    return `<tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
                      <td style="padding:14px 16px;"><strong>${doc?.name || 'Unknown Doctor'}</strong></td>
                      <td style="padding:14px 16px;"><strong>${a.date}</strong> at ${a.time}</td>
                      <td style="padding:14px 16px;"><span class="badge badge-blue">${a.type}</span></td>
                      <td style="padding:14px 16px; font-size:12px; color:var(--text2);">${a.notes || '—'}</td>
                      <td style="padding:14px 16px;">${statusBadge(a.status)}</td>
                    </tr>`;
                  }).join('') : `<tr><td colspan="5"><div class="empty-state" style="padding: 20px; text-align:center;"><h3>No appointments scheduled</h3></div></td></tr>`}
                </tbody>
              </table>
            </div>

            <!-- Timeline history -->
            <div class="section-card" style="padding:20px;">
              <div class="section-header" style="padding:0 0 12px 0; margin-bottom:16px; border-bottom:1px solid var(--border);">
                <h3 style="font-family:'Syne',sans-serif; margin: 0;">My Medical History</h3>
              </div>
              <div id="pdHistoryTimeline" style="display:flex; flex-direction:column; gap:12px;">
                ${myRecords.length ? myRecords.map(r => {
                  const typeColors = { Diagnosis: 'purple', 'Lab Result': 'blue', Emergency: 'red', Prescription: 'green' };
                  const colorMap = { Diagnosis: 'var(--purple)', 'Lab Result': 'var(--blue)', Emergency: 'var(--red)', Prescription: 'var(--accent)' };
                  const borderCol = colorMap[r.type] || 'var(--border)';
                  return `
                  <div class="med-history-card" style="background: rgba(255,255,255,0.01); border: 1px solid var(--border); border-left: 4px solid ${borderCol}; border-radius: 12px; padding: 16px; position:relative; display:flex; flex-direction:column; gap:8px;">
                    <div style="display:flex; justify-content:space-between; align-items:start;">
                      <div>
                        <h4 style="font-size:14px; font-weight:700; color:var(--text); display:flex; align-items:center; gap:6px; margin:0;">
                          <span>🩺</span> ${r.title}
                        </h4>
                        <div style="font-size:11px; color:var(--text3); margin-top:2px; display:flex; align-items:center; gap:4px;">
                          <span>📅</span> Date: ${r.date}
                        </div>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span class="badge badge-${typeColors[r.type] || 'gray'}">${r.type}</span>
                        <button class="btn btn-secondary btn-sm" onclick="downloadSingleMedicalRecord('${r.id}')" style="padding: 4px 8px; font-size: 11px; display:flex; align-items:center; gap:4px; height:auto; border-radius:6px; font-weight:500;" id="btn-download-${r.id}">
                          <span>📥</span> Download
                        </button>
                      </div>
                    </div>
                    <p style="font-size:13px; color:var(--text2); line-height:1.5; margin:0; background:rgba(0,0,0,0.15); padding:8px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.02);">${r.description}</p>
                    ${r.medications && r.medications.length ? `
                      <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; margin-top:4px;">
                        <span style="font-size:11px; color:var(--text3); text-transform:uppercase; letter-spacing:0.04em;">Medications: </span>
                        ${r.medications.map(med => `<span class="badge badge-gray" style="margin-right:2px; display:flex; align-items:center; gap:3px;">💊 ${med}</span>`).join('')}
                      </div>
                    ` : ''}
                  </div>
                  `;
                }).join('') : '<span style="color:var(--text3); font-size:13px;">No medical records found.</span>'}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function patientLogout() {
      sessionStorage.removeItem('phms_current_patient_user');
      sessionStorage.removeItem('phms_token');
      document.getElementById('patientPortal').style.display = 'none';
      document.getElementById('loginPage').style.display = 'flex';
      document.getElementById('patEmail').value = '';
      document.getElementById('patPassword').value = '';
      document.getElementById('patLoginError').style.display = 'none';
      switchPortal('patient');
      switchPatientTab('login');
    }

    // ── HELPERS & APPLICATION LOGIC FOR PATIENTS ──
    async function downloadMedicalHistory() {
      loadStore();
      const currentPatient = JSON.parse(sessionStorage.getItem('phms_current_patient_user'));
      if (!currentPatient) {
        showToast('❌ Session expired. Please log in again.', 'error');
        return;
      }
      
      const records = store.records.filter(r => r.patientId === currentPatient.id);
      if (!records || records.length === 0) {
        showToast('❌ No medical records available to download.', 'error');
        return;
      }
      
      const btn = document.getElementById('downloadPdfBtn');
      const originalText = btn.textContent;
      btn.textContent = 'Generating...';
      btn.disabled = true;
      
      try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Header
        doc.setFontSize(22);
        doc.setTextColor(0, 119, 204);
        doc.text('PHMS MEDICAL CLINIC', 105, 20, { align: 'center' });
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text('Public Health Management System - Medical History Report', 105, 28, { align: 'center' });
        doc.setDrawColor(200, 200, 200);
        doc.line(14, 32, 196, 32);
        
        // Patient Details
        const doctor = store.users.find(u => u.id === currentPatient.assignedDoctor);
        const doctorName = doctor ? doctor.name + ' (' + doctor.department + ')' : 'Not Assigned';
        
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.text('Patient Information', 14, 42);
        
        doc.autoTable({
          startY: 46,
          theme: 'plain',
          styles: { cellPadding: 2, fontSize: 10, textColor: [50, 50, 50] },
          columnStyles: { 
            0: { fontStyle: 'bold', cellWidth: 35 }, 
            1: { cellWidth: 60 }, 
            2: { fontStyle: 'bold', cellWidth: 35 }
          },
          body: [
            ['Patient Name:', currentPatient.name, 'Patient ID:', currentPatient.id],
            ['Age / Gender:', currentPatient.age + ' yrs / ' + currentPatient.gender, 'Blood Group:', currentPatient.bloodGroup || 'N/A'],
            ['Contact:', currentPatient.phone || 'N/A', 'Assigned Doctor:', doctorName],
            ['Address:', currentPatient.address || 'N/A', '', '']
          ]
        });
        
        let currentY = doc.lastAutoTable.finalY + 10;
        
        // Active Conditions
        if (currentPatient.conditions && currentPatient.conditions.length > 0) {
          doc.setFontSize(12);
          doc.setTextColor(50, 50, 50);
          doc.text('Active Conditions: ' + currentPatient.conditions.join(', '), 14, currentY);
          currentY += 10;
        }
        
        // Medications
        const meds = getPatientMedications(currentPatient.id);
        if (meds && meds.length > 0) {
          doc.setFontSize(14);
          doc.setTextColor(0, 0, 0);
          doc.text('Current Medications', 14, currentY);
          currentY += 6;
          
          const medsData = meds.map(m => [m.name, m.type, m.sourceRecord, m.prescribedOn]);
          doc.autoTable({
            startY: currentY,
            head: [['Medication', 'Type', 'Prescribed For', 'Date']],
            body: medsData,
            theme: 'striped',
            headStyles: { fillColor: [0, 212, 160], textColor: [255, 255, 255] },
            styles: { fontSize: 9 }
          });
          currentY = doc.lastAutoTable.finalY + 10;
        }
        
        // Medical History Timeline
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.text('Medical History (Chronological)', 14, currentY);
        currentY += 6;
        
        const sortedRecords = [...records].sort((a, b) => new Date(b.date) - new Date(a.date));
        const recordsData = sortedRecords.map(r => [
          r.date,
          r.type,
          r.title,
          r.description,
          (r.medications || []).join(', ') || 'None'
        ]);
        
        doc.autoTable({
          startY: currentY,
          head: [['Date', 'Type', 'Diagnosis / Title', 'Treatment Notes & Symptoms', 'Medications']],
          body: recordsData,
          theme: 'grid',
          headStyles: { fillColor: [100, 116, 139], textColor: [255, 255, 255] },
          styles: { fontSize: 9 },
          columnStyles: { 3: { cellWidth: 70 } }
        });
        
        // Footer
        const pageCount = doc.internal.getNumberOfPages();
        const generatedDate = new Date().toLocaleString();
        for (let i = 1; i <= pageCount; i++) {
          doc.setPage(i);
          doc.setFontSize(8);
          doc.setTextColor(150, 150, 150);
          doc.text(`Generated by Public Health Management System (PHMS) on ${generatedDate}`, 14, 290);
          doc.text(`Page ${i} of ${pageCount}`, 196, 290, { align: 'right' });
        }
        
        // Save PDF
        const filename = `Medical_History_${currentPatient.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(filename);
        
        showToast('✅ Medical history PDF downloaded!', 'success');
      } catch (error) {
        console.error('PDF Generation Error:', error);
        showToast('❌ Error generating PDF. Check console.', 'error');
      } finally {
        btn.textContent = originalText;
        btn.disabled = false;
      }
    }
    async function downloadSingleMedicalRecord(recordId) {
      loadStore();
      let currentPatient;
      if (sessionStorage.getItem('phms_current_patient')) {
        currentPatient = JSON.parse(sessionStorage.getItem('phms_current_patient'));
      } else if (sessionStorage.getItem('phms_current_patient_user')) {
        currentPatient = JSON.parse(sessionStorage.getItem('phms_current_patient_user'));
      }
      
      if (!currentPatient) {
        showToast('❌ Session expired.', 'error');
        return;
      }
      const record = store.records.find(r => r.id === recordId);
      if (!record) return;
      
      const btn = document.getElementById('btn-download-' + recordId);
      const originalText = btn.innerHTML;
      btn.innerHTML = '<span>⏳</span>...';
      btn.disabled = true;
      
      try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.setFontSize(22); doc.setTextColor(0, 119, 204);
        doc.text('PHMS MEDICAL CLINIC', 105, 20, { align: 'center' });
        doc.setFontSize(10); doc.setTextColor(100, 100, 100);
        doc.text('Individual Medical Record Report', 105, 28, { align: 'center' });
        doc.setDrawColor(200, 200, 200); doc.line(14, 32, 196, 32);
        
        doc.setFontSize(14); doc.setTextColor(0, 0, 0);
        doc.text('Patient Information', 14, 42);
        doc.autoTable({
          startY: 46, theme: 'plain', styles: { cellPadding: 2, fontSize: 10, textColor: [50, 50, 50] },
          columnStyles: { 0: { fontStyle: 'bold', cellWidth: 35 }, 1: { cellWidth: 60 } },
          body: [
            ['Patient Name:', currentPatient.name, 'Patient ID:', currentPatient.id],
            ['Age / Gender:', currentPatient.age + ' yrs / ' + currentPatient.gender, 'Date:', record.date]
          ]
        });
        
        let currentY = doc.lastAutoTable.finalY + 10;
        doc.setFontSize(14); doc.setTextColor(0, 0, 0);
        doc.text('Record Details', 14, currentY);
        
        doc.autoTable({
          startY: currentY + 6, theme: 'grid', headStyles: { fillColor: [100, 116, 139], textColor: [255, 255, 255] },
          styles: { fontSize: 10 }, columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } },
          body: [
            ['Record ID', record.id],
            ['Type', record.type],
            ['Diagnosis / Title', record.title],
            ['Description / Notes', record.description],
            ['Medications', (record.medications || []).join(', ') || 'None']
          ]
        });
        
        doc.setFontSize(8); doc.setTextColor(150, 150, 150);
        doc.text(`Generated by PHMS on ${new Date().toLocaleString()}`, 14, 290);
        doc.save(`Record_${currentPatient.name.replace(/\s+/g, '_')}_${record.date}.pdf`);
        showToast('✅ Record PDF downloaded!', 'success');
      } catch (e) {
        console.error(e);
        showToast('❌ Error generating PDF.', 'error');
      } finally {
        btn.innerHTML = originalText; btn.disabled = false;
      }
    }

    function getPatientMedications(patientId) {
      const records = store.records.filter(r => r.patientId === patientId);
      const meds = [];
      records.forEach(r => {
        if (r.medications && r.medications.length) {
          r.medications.forEach(m => {
            meds.push({ name: m, prescribedOn: r.date, sourceRecord: r.title, type: r.type });
          });
        }
      });
      return meds;
    }

    function showApplyAppointmentModal() {
      loadStore();
      const savedPatient = sessionStorage.getItem('phms_current_patient_user');
      if (!savedPatient) {
        showToast('❌ Session expired. Please log in again.', 'error');
        return;
      }
      const currentPatient = JSON.parse(savedPatient);
      const doctors = store.users.filter(u => u.role === 'doctor');
      
      if (doctors.length === 0) {
        showToast('⚠️ No doctors available in the system currently.', 'warning');
        return;
      }
      
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowStr = tomorrow.toISOString().split('T')[0];
      
      const modalBody = document.getElementById('modalBody');
      document.getElementById('modalTitle').textContent = 'Apply for Doctor Appointment';
      
      modalBody.innerHTML = `
        <div id="apptFormView" style="animation: slideUp 0.3s ease forwards;">
          <p style="font-size: 13px; color: var(--text2); margin-bottom: 20px;">
            Fill in the details below. The system will automatically compile this request into a formal appointment request letter for your doctor.
          </p>
          
          <div class="form-group">
            <label style="color: var(--text2); font-size: 11px; font-weight:600; text-transform: uppercase;">Consulting Physician (Doctor)</label>
            <select id="apptDoctor" style="width: 100%; padding: 12px 16px; background: var(--input-bg); border: 1px solid var(--input-border); border-radius: 12px; color: var(--text); outline: none;">
              ${doctors.map(d => `<option value="${d.id}" ${currentPatient.assignedDoctor === d.id ? 'selected' : ''}>${d.name} — ${d.department}</option>`).join('')}
            </select>
          </div>
          
          <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
            <div class="form-group">
              <label for="apptDate">Appointment Date</label>
              <input type="date" id="apptDate" min="${tomorrowStr}" value="${tomorrowStr}" required style="width: 100%; padding: 12px 16px; background: var(--input-bg); border: 1px solid var(--input-border); border-radius: 12px; color: var(--text); outline: none;" />
            </div>
            <div class="form-group">
              <label for="apptTime">Appointment Time</label>
              <input type="time" id="apptTime" value="09:30" required style="width: 100%; padding: 12px 16px; background: var(--input-bg); border: 1px solid var(--input-border); border-radius: 12px; color: var(--text); outline: none;" />
            </div>
          </div>
          
          <div class="form-group" style="margin-top: 12px;">
            <label for="apptType">Consultation Type</label>
            <select id="apptType" style="width: 100%; padding: 12px 16px; background: var(--input-bg); border: 1px solid var(--input-border); border-radius: 12px; color: var(--text); outline: none;">
              <option value="Consultation">General Consultation</option>
              <option value="Follow-up">Regular Follow-up</option>
              <option value="Emergency">Emergency Evaluation</option>
              <option value="Second Opinion">Second Opinion Assessment</option>
              <option value="Preventive Care">Preventive Health Checkup</option>
            </select>
          </div>
          
          <div class="form-group" style="margin-top: 12px;">
            <label for="apptNotes">Reason / Symptoms (Detailed Notes)</label>
            <textarea id="apptNotes" placeholder="Explain your symptoms..." rows="4" required style="width: 100%; padding: 12px 16px; background: var(--input-bg); border: 1px solid var(--input-border); border-radius: 12px; color: var(--text); outline: none; resize: vertical; min-height: 80px;"></textarea>
          </div>
          
          <div class="modal-actions" style="display: flex; justify-content: flex-end; gap: 16px; margin-top: 24px;">
            <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="generateAppointmentLetter()">Generate Request Letter &rarr;</button>
          </div>
        </div>
      `;
      
      const modal = document.getElementById('modal');
      modal.style.display = 'flex';
      setTimeout(() => modal.classList.add('show'), 10);
    }

    function generateAppointmentLetter() {
      const doctorId = document.getElementById('apptDoctor').value;
      const date = document.getElementById('apptDate').value;
      const time = document.getElementById('apptTime').value;
      const type = document.getElementById('apptType').value;
      const notes = document.getElementById('apptNotes').value.trim();
      
      if (!date || !time) {
        showToast('❌ Please select a valid Date and Time.', 'error');
        return;
      }
      if (!notes) {
        showToast('❌ Please describe the reason for your appointment request.', 'error');
        return;
      }
      
      const currentPatient = JSON.parse(sessionStorage.getItem('phms_current_patient_user'));
      const doctor = store.users.find(u => u.id === doctorId);
      
      if (!currentPatient || !doctor) {
        showToast('❌ Internal error: Patient or Doctor records not found.', 'error');
        return;
      }
      
      const formattedLetterDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      });
      
      const formattedApptDate = new Date(date).toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      });
      
      const modalBody = document.getElementById('modalBody');
      document.getElementById('modalTitle').textContent = 'Review Appointment Request Letter';
      
      const escapedNotes = notes.replace(/`/g, '\\`').replace(/\$/g, '\\$');
      
      modalBody.innerHTML = `
        <div id="apptLetterView" style="animation: slideUp 0.3s ease forwards;">
          <p style="font-size: 13px; color: var(--text2); margin-bottom: 15px;">
            Review your formal application letter. Clicking submit will send this application to ${doctor.name} and record the appointment.
          </p>
          
          <div class="letter-preview">
            <div class="letter-head">
              <h4>PHMS MEDICAL CLINIC</h4>
              <p>Outpatient Services Division · Digital Healthcare Network</p>
            </div>
            
            <div class="letter-meta">
              <div class="letter-meta-col">
                <strong>FROM:</strong><br>
                ${currentPatient.name}<br>
                ${currentPatient.address || 'Address: Not Registered'}<br>
                Tel: ${currentPatient.phone || 'N/A'}<br>
                Email: ${currentPatient.email}
              </div>
              <div class="letter-meta-col" style="text-align: right;">
                <strong>TO:</strong><br>
                ${doctor.name}<br>
                Dept. of ${doctor.department}<br>
                PHMS Healthcare Center
              </div>
            </div>
            
            <div class="letter-date">
              <strong>DATE:</strong> ${formattedLetterDate}
            </div>
            
            <div class="letter-subject">
              <strong>SUBJECT:</strong> Application for ${type} Appointment Booking
            </div>
            
            <div class="letter-body">
Dear ${doctor.name},

I am writing this letter to request a formal ${type} appointment with you at your clinic.

I would like to request this consultation on <strong>${formattedApptDate}</strong> at <strong>${time}</strong>.

The specific symptoms and concerns prompting this consultation are described below:
"${notes}"

Please review this scheduling request and verify your availability. Thank you for your medical assistance, guidance, and consideration of this request.

Sincerely,
            </div>
            
            <div class="letter-signature-block">
              <div>
                <div class="letter-sign-line">${currentPatient.name}</div>
                <div style="font-size: 10px; color: #64748b; text-align: center;">Patient Signature</div>
              </div>
              <div>
                <div style="border-top: 1px dashed #cbd5e1; width: 150px; text-align: center; padding-top: 4px;">Pending Approval</div>
                <div style="font-size: 10px; color: #64748b; text-align: center;">Clinician/Admin Signature</div>
              </div>
            </div>
          </div>
          
          <div class="modal-actions" style="display: flex; justify-content: flex-end; gap: 16px; margin-top: 24px;">
            <button class="btn btn-secondary" onclick="backToApptForm('${doctorId}', '${date}', '${time}', '${type}', \`${escapedNotes}\`)">
              ✏️ Edit Details
            </button>
            <button class="btn btn-primary" style="background: linear-gradient(135deg, var(--accent), #0077cc);" onclick="submitAppointmentApplication('${doctorId}', '${date}', '${time}', '${type}', \`${escapedNotes}\`)">
              ✉️ Submit Application
            </button>
          </div>
        </div>
      `;
    }

    function backToApptForm(doctorId, date, time, type, notes) {
      const doctors = store.users.filter(u => u.role === 'doctor');
      const modalBody = document.getElementById('modalBody');
      document.getElementById('modalTitle').textContent = 'Apply for Doctor Appointment';
      
      modalBody.innerHTML = `
        <div id="apptFormView" style="animation: slideUp 0.3s ease forwards;">
          <p style="font-size: 13px; color: var(--text2); margin-bottom: 20px;">
            Fill in the details below. The system will automatically compile this request into a formal appointment request letter for your doctor.
          </p>
          
          <div class="form-group">
            <label for="apptDoctor">Consulting Physician (Doctor)</label>
            <select id="apptDoctor" style="width: 100%; padding: 12px 16px; background: var(--input-bg); border: 1px solid var(--input-border); border-radius: 12px; color: var(--text); outline: none;">
              ${doctors.map(d => `<option value="${d.id}" ${doctorId === d.id ? 'selected' : ''}>${d.name} — ${d.department}</option>`).join('')}
            </select>
          </div>
          
          <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
            <div class="form-group">
              <label for="apptDate">Appointment Date</label>
              <input type="date" id="apptDate" min="${new Date().toISOString().split('T')[0]}" value="${date}" required style="width: 100%; padding: 12px 16px; background: var(--input-bg); border: 1px solid var(--input-border); border-radius: 12px; color: var(--text); outline: none;" />
            </div>
            <div class="form-group">
              <label for="apptTime">Appointment Time</label>
              <input type="time" id="apptTime" value="${time}" required style="width: 100%; padding: 12px 16px; background: var(--input-bg); border: 1px solid var(--input-border); border-radius: 12px; color: var(--text); outline: none;" />
            </div>
          </div>
          
          <div class="form-group" style="margin-top: 12px;">
            <label for="apptType">Consultation Type</label>
            <select id="apptType" style="width: 100%; padding: 12px 16px; background: var(--input-bg); border: 1px solid var(--input-border); border-radius: 12px; color: var(--text); outline: none;">
              <option value="Consultation" ${type === 'Consultation' ? 'selected' : ''}>General Consultation</option>
              <option value="Follow-up" ${type === 'Follow-up' ? 'selected' : ''}>Regular Follow-up</option>
              <option value="Emergency" ${type === 'Emergency' ? 'selected' : ''}>Emergency Evaluation</option>
              <option value="Second Opinion" ${type === 'Second Opinion' ? 'selected' : ''}>Second Opinion Assessment</option>
              <option value="Preventive Care" ${type === 'Preventive Care' ? 'selected' : ''}>Preventive Health Checkup</option>
            </select>
          </div>
          
          <div class="form-group" style="margin-top: 12px;">
            <label for="apptNotes">Reason / Symptoms (Detailed Notes)</label>
            <textarea id="apptNotes" placeholder="Explain your symptoms..." rows="4" required style="width: 100%; padding: 12px 16px; background: var(--input-bg); border: 1px solid var(--input-border); border-radius: 12px; color: var(--text); outline: none; resize: vertical; min-height: 80px;">${notes}</textarea>
          </div>
          
          <div class="modal-actions" style="display: flex; justify-content: flex-end; gap: 16px; margin-top: 24px;">
            <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="generateAppointmentLetter()">Generate Request Letter &rarr;</button>
          </div>
        </div>
      `;
    }

    function submitAppointmentApplication(doctorId, date, time, type, notes) {
      loadStore();
      const savedPatient = sessionStorage.getItem('phms_current_patient_user');
      if (!savedPatient) {
        showToast('❌ Session expired. Please log in again.', 'error');
        return;
      }
      const currentPatient = JSON.parse(savedPatient);
      
      const apptId = 'a' + Date.now();
      const newAppt = {
        id: apptId,
        patientId: currentPatient.id,
        doctorId: doctorId,
        date: date,
        time: time,
        type: type,
        status: 'Scheduled',
        notes: notes,
        createdAt: new Date().toISOString()
      };
      
      store.appointments.push(newAppt);
      apiFetch('/api/appointments', { method: 'POST', body: JSON.stringify(newAppt) });
      
      // Re-render UI
      renderPatientPortal(currentPatient);
      
      // Close Modal
      closeModal();
      
      // Show Toast Success
      showToast('✉️ Appointment request submitted and letter registered!', 'success');
    }

    // ── AUTH ──────────────────────────────────────────────────────────────────────
    function login() {
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;

      const proceedLogin = (user) => {
        store.currentUser = { id: user.id, name: user.name, email: user.email, role: user.role };
        sessionStorage.setItem('phms_current_user', JSON.stringify(store.currentUser));
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('appShell').style.display = 'flex';
        document.getElementById('sidebarName').textContent = user.name;
        document.getElementById('sidebarRole').textContent = user.role.charAt(0).toUpperCase() + user.role.slice(1);
        document.getElementById('sidebarAvatar').textContent = user.name[0];
        if (user.role !== 'admin') document.getElementById('adminNav').style.display = 'none';
        navigate('dashboard');
        showToast('✅ Welcome back, ' + user.name + '!', 'success');
      };

      const showLoginError = () => {
        document.getElementById('loginError').textContent = '❌ Invalid email or password. Check demo credentials below.';
        document.getElementById('loginError').style.display = 'flex';
      };

      // Try authentication against the backend API first
      fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      .then(res => {
        if (!res.ok) {
          if (res.status === 401) throw new Error('AUTH_FAILED');
          throw new Error('API_ERROR');
        }
        return res.json();
      })
      .then(data => {
        sessionStorage.setItem('phms_token', data.token);
        proceedLogin(data.user);
      })
      .catch(err => {
        if (err.message === 'AUTH_FAILED') {
          showLoginError();
          return;
        }

        console.warn('Backend auth offline/failed, trying local lookup:', err);
        loadStore();
        const defaults = {
          'admin@phms.gov': 'admin123',
          'doctor@phms.gov': 'doctor123',
          'nurse@phms.gov': 'nurse123'
        };
        const user = store.users.find(u => {
          if (u.email !== email) return false;
          let expectedPwd = u.password;
          // If stored password is bcrypt-hashed, check if it matches default credentials
          if (expectedPwd && expectedPwd.startsWith('$2') && defaults[u.email]) {
            expectedPwd = defaults[u.email];
          }
          return expectedPwd === password;
        });

        if (user) {
          proceedLogin(user);
        } else {
          showLoginError();
        }
      });
    }

    function logout() {
      sessionStorage.removeItem('phms_current_user');
      sessionStorage.removeItem('phms_token');
      store.currentUser = null;
      document.getElementById('adminNav').style.display = '';
      document.getElementById('loginEmail').value = '';
      document.getElementById('loginPassword').value = '';
      document.getElementById('loginError').style.display = 'none';
      setView('landing');
      document.getElementById('loginError').style.display = 'none';
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Enter' && document.getElementById('loginPage').style.display !== 'none') login();
    });

    // ── NAVIGATION ────────────────────────────────────────────────────────────────
    const pageConfig = {
      dashboard: { title: 'Dashboard', subtitle: 'Overview of system activity', action: '+ New Patient', actionFn: 'showAddPatient' },
      patients: { title: 'Patients', subtitle: 'Manage patient registry', action: '+ New Patient', actionFn: 'showAddPatient' },
      appointments: { title: 'Appointments', subtitle: 'Schedule and track appointments', action: '+ New Appointment', actionFn: 'showAddAppointment' },
      records: { title: 'Medical Records', subtitle: 'View and manage health records', action: '+ New Record', actionFn: 'showAddRecord' },
      diseases: { title: 'Disease Surveillance', subtitle: 'Monitor disease outbreaks', action: '+ Report Disease', actionFn: 'showAddDisease' },
      inventory: { title: 'Inventory', subtitle: 'Track medical supplies', action: '+ Add Item', actionFn: 'showAddInventory' },
      users: { title: 'Staff Management', subtitle: 'Manage system users', action: '+ Add Staff', actionFn: 'showAddUser' },
    };

    function navigate(page) {
      store.currentPage = page;
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      document.querySelectorAll('.nav-item').forEach(n => {
        if (n.getAttribute('onclick')?.includes(page)) n.classList.add('active');
      });
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.getElementById('page-' + page).classList.add('active');
      const cfg = pageConfig[page];
      document.getElementById('pageTitle').textContent = cfg.title;
      document.getElementById('pageSubtitle').textContent = cfg.subtitle;
      document.getElementById('headerActionBtn').textContent = cfg.action;
      renderPage(page);
    }

    function triggerHeaderAction() {
      const cfg = pageConfig[store.currentPage];
      window[cfg.actionFn]?.();
    }

    function renderPage(page) {
      loadStore();
      if (page === 'dashboard') renderDashboard();
      else if (page === 'patients') renderPatients();
      else if (page === 'appointments') renderAppointments();
      else if (page === 'records') renderRecords();
      else if (page === 'diseases') renderDiseases();
      else if (page === 'inventory') renderInventory();
      else if (page === 'users') renderUsers();
    }

    // ── DASHBOARD ─────────────────────────────────────────────────────────────────
    function renderDashboard() {
      // Update stat cards dynamically from store
      const criticalCount = store.patients.filter(p => p.status === 'Critical').length;
      const recoveredCount = store.patients.filter(p => p.status === 'Recovered').length;
      const recoveryRate = store.patients.length ? Math.round((recoveredCount / store.patients.length) * 100) : 0;
      const activeOutbreaks = store.diseases.filter(d => d.trend === 'increasing').length;
      const lowStockItems = store.inventory.filter(i => i.status === 'Low' || i.status === 'Critical').length;
      const today = new Date().toISOString().split('T')[0];
      const todayAppts = store.appointments.filter(a => a.date === today).length;

      document.getElementById('statTotalPatients').textContent = store.patients.length;
      document.getElementById('statTotalAppointments').textContent = store.appointments.length;
      document.getElementById('statCriticalPatients').textContent = criticalCount;
      document.getElementById('statActiveOutbreaks').textContent = activeOutbreaks;
      document.getElementById('statLowStock').textContent = lowStockItems;
      document.getElementById('statRecoveryRate').textContent = recoveryRate + '%';

      // Update sidebar badges
      document.getElementById('diseaseBadge').textContent = activeOutbreaks;
      document.getElementById('inventoryBadge').textContent = lowStockItems;

      const months = [
        { month: 'Jan', patients: 42, appointments: 87 },
        { month: 'Feb', patients: 58, appointments: 112 },
        { month: 'Mar', patients: 71, appointments: 134 },
        { month: 'Apr', patients: 65, appointments: 128 },
        { month: 'May', patients: 89, appointments: 165 },
        { month: 'Jun', patients: 54, appointments: 98 },
      ];
      const maxVal = Math.max(...months.flatMap(m => [m.patients, m.appointments]));
      document.getElementById('dashChart').innerHTML = months.map(m => `
    <div class="bar-group">
      <div style="display:flex;gap:2px;align-items:flex-end;flex:1;width:100%;">
        <div class="bar" style="background:var(--accent);flex:1;height:${(m.patients / maxVal) * 120}px;" title="Patients: ${m.patients}"></div>
        <div class="bar" style="background:var(--blue);flex:1;height:${(m.appointments / maxVal) * 120}px;" title="Appts: ${m.appointments}"></div>
      </div>
      <div class="bar-label">${m.month}</div>
    </div>
  `).join('');

      const activities = [
        { type: 'patient', icon: '👤', msg: 'New patient Arjun Hegde registered', time: '2h ago', color: 'var(--blue)' },
        { type: 'appointment', icon: '📅', msg: 'Appointment scheduled for Ravi Kumar', time: '3h ago', color: 'var(--accent)' },
        { type: 'alert', icon: '⚠️', msg: 'Dengue cases increasing in Mysuru', time: '5h ago', color: 'var(--yellow)' },
        { type: 'inventory', icon: '💊', msg: 'N95 Masks stock critically low', time: '6h ago', color: 'var(--red)' },
        { type: 'record', icon: '📋', msg: 'Lab results updated for M. Ismail', time: '8h ago', color: 'var(--purple)' },
      ];
      document.getElementById('recentActivity').innerHTML = activities.map(a => `
    <div class="activity-item">
      <div class="activity-dot" style="background:${a.color};"></div>
      <div><div class="activity-text">${a.msg}</div><div class="activity-time">${a.time}</div></div>
    </div>
  `).join('');

      document.getElementById('dashDiseaseTable').innerHTML = store.diseases.map(d => `
    <tr>
      <td><strong>${d.name}</strong></td>
      <td><span class="badge badge-blue">${d.category}</span></td>
      <td>${d.cases.toLocaleString()}</td>
      <td style="color:var(--yellow);">${d.active}</td>
      <td style="color:var(--green);">${d.recovered}</td>
      <td style="color:var(--red);">${d.deaths}</td>
      <td>${trendBadge(d.trend)}</td>
    </tr>
  `).join('');
    }

    // ── PATIENTS ──────────────────────────────────────────────────────────────────
    let patientFilter = '';
    let patientStatusFilter = '';
    function filterPatients(v) { patientFilter = v; renderPatients(); }
    function filterPatientStatus(v) { patientStatusFilter = v; renderPatients(); }

    function renderPatients(list) {
      let patients = list || store.patients.filter(p => {
        const matchSearch = !patientFilter || p.name.toLowerCase().includes(patientFilter.toLowerCase()) || p.phone.includes(patientFilter);
        const matchStatus = !patientStatusFilter || p.status === patientStatusFilter;
        return matchSearch && matchStatus;
      });
      document.getElementById('patientTable').innerHTML = patients.length ? patients.map(p => {
        const doctor = store.users.find(u => u.id === p.assignedDoctor);
        return `
    <tr>
      <td>
        <div style="display:flex;align-items:center;">
          <span class="avatar-sm" style="background:${avatarColor(p.name)};">${p.name[0]}</span>
          <div>
            <div style="font-weight:600;">${p.name}</div>
            <div style="font-size:11px;color:var(--text2);">${p.phone}</div>
            ${doctor ? `<div style="font-size:10px;color:var(--blue);margin-top:2px;">👨‍⚕️ ${doctor.name}</div>` : ''}
          </div>
        </div>
      </td>
      <td>${p.age} / ${p.gender}</td>
      <td><span class="badge badge-blue">${p.bloodGroup}</span></td>
      <td>${(p.conditions || []).map(c => `<span class="badge badge-gray" style="margin-right:3px;">${c}</span>`).join('')}</td>
      <td>${statusBadge(p.status)}</td>
      <td>${new Date(p.createdAt).toLocaleString(undefined, { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
      <td>
        <div style="display:flex;gap:6px;">
          <button class="btn btn-secondary btn-sm" onclick="viewPatient('${p.id}')">View</button>
          <button class="btn btn-secondary btn-sm" onclick="editPatient('${p.id}')">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deletePatient('${p.id}')">Del</button>
        </div>
      </td>
    </tr>
  `;
      }).join('') : `<tr><td colspan="7"><div class="empty-state"><div class="icon">👥</div><h3>No patients found</h3><p>Add your first patient to get started</p></div></td></tr>`;
    }

    function statusBadge(s) {
      const map = { Active: 'badge-green', Critical: 'badge-red', Recovered: 'badge-blue', Scheduled: 'badge-yellow', Completed: 'badge-green', Cancelled: 'badge-red', Discharge: 'badge-purple' };
      return `<span class="badge ${map[s] || 'badge-gray'}">${s}</span>`;
    }

    function trendBadge(t) {
      if (t === 'increasing') return '<span class="trend-up">↑ Increasing</span>';
      if (t === 'decreasing') return '<span class="trend-down">↓ Decreasing</span>';
      return '<span class="trend-stable">→ Stable</span>';
    }

    function avatarColor(name) {
      const colors = ['rgba(0,212,160,0.3)', 'rgba(0,153,255,0.3)', 'rgba(168,85,247,0.3)', 'rgba(255,107,107,0.3)', 'rgba(255,209,102,0.3)'];
      return colors[name.charCodeAt(0) % colors.length];
    }

    function viewPatient(id) {
      const p = store.patients.find(x => x.id === id);
      const records = store.records.filter(r => r.patientId === id);
      const appts = store.appointments.filter(a => a.patientId === id);
      const doctor = store.users.find(u => u.id === p.assignedDoctor);
      openModal('Patient Profile — ' + p.name, `
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px;">
      <div class="user-avatar" style="width:56px;height:56px;font-size:22px;background:${avatarColor(p.name)};">${p.name[0]}</div>
      <div>
        <div style="font-size:18px;font-weight:700;">${p.name}</div>
        <div style="font-size:13px;color:var(--text2);">${p.phone} · ${p.email}</div>
        <div style="margin-top:6px;">${statusBadge(p.status)}</div>
      </div>
    </div>
    <div class="detail-grid">
      <div class="detail-item"><label for="ep_name">Age</label><span>${p.age} years</span></div>
      <div class="detail-item"><label for="ep_name">Gender</label><span>${p.gender}</span></div>
      <div class="detail-item"><label>Blood Group</label><span>${p.bloodGroup}</span></div>
      <div class="detail-item"><label>Address</label><span>${p.address}</span></div>
      <div class="detail-item" style="grid-column: span 2;"><label>Assigned Doctor</label><span style="color:var(--blue);">👨‍⚕️ ${doctor ? doctor.name + ' (' + doctor.department + ')' : 'None'}</span></div>
    </div>
    <div style="margin-bottom:20px;">
      <label style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;">Conditions</label>
      <div style="margin-top:8px;">${(p.conditions || []).map(c => `<span class="badge badge-yellow" style="margin-right:6px;margin-bottom:6px;">${c}</span>`).join('')}</div>
    </div>
    <div style="margin-bottom:20px;">
      <label style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;">Medical Records (${records.length})</label>
      ${records.map(r => `
        <div style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:12px;margin-top:8px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
            <strong>${r.title}</strong>
            <div style="display:flex;align-items:center;gap:6px;">
              <span class="badge badge-blue">${r.type}</span>
              <button class="btn btn-secondary btn-sm" onclick="downloadSingleMedicalRecordAdmin('${r.id}')" style="padding:2px 6px; font-size:10px; height:auto; border-radius:4px; font-weight:500;" id="btn-download-admin-${r.id}">📥 Download</button>
              <button class="btn btn-secondary btn-sm" onclick="showEditRecord('${r.id}')" style="padding:2px 6px; font-size:10px; height:auto; border-radius:4px; font-weight:500;">✏️ Edit</button>
            </div>
          </div>
          <div style="font-size:12px;color:var(--text2);">${r.description}</div>
          <div style="font-size:11px;color:var(--text3);margin-top:6px;">${r.date}</div>
        </div>
      `).join('') || '<div style="color:var(--text2);font-size:13px;margin-top:8px;">No records yet</div>'}
    </div>
    <div>
      <label style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;">Appointments (${appts.length})</label>
      ${appts.map(a => `
        <div style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:12px;margin-top:8px;display:flex;justify-content:space-between;align-items:center;">
          <div><strong>${a.type}</strong> — ${a.date} at ${a.time}<div style="font-size:12px;color:var(--text2);">${a.notes}</div></div>
          ${statusBadge(a.status)}
        </div>
      `).join('') || '<div style="color:var(--text2);font-size:13px;margin-top:8px;">No appointments</div>'}
    </div>
  `);
    }

    function editPatient(id) {
      const p = store.patients.find(x => x.id === id);
      const doctors = store.users.filter(u => u.role === 'doctor');
      openModal('Edit Patient', `
    <div class="form-row">
      <div class="form-group"><label>Full Name</label><span>${p.age} years</span></div>
      <div class="detail-item"><label>Gender</label><span>${p.gender}</span></div>
      <div class="detail-item"><label>Blood Group</label><span>${p.bloodGroup}</span></div>
      <div class="detail-item"><label>Address</label><span>${p.address}</span></div>
      <div class="detail-item" style="grid-column: span 2;"><label>Assigned Doctor</label><span style="color:var(--blue);">👨‍⚕️ ${doctor ? doctor.name + ' (' + doctor.department + ')' : 'None'}</span></div>
    </div>
    <div style="margin-bottom:20px;">
      <label style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;">Conditions</label>
      <div style="margin-top:8px;">${(p.conditions || []).map(c => `<span class="badge badge-yellow" style="margin-right:6px;margin-bottom:6px;">${c}</span>`).join('')}</div>
    </div>
    <div style="margin-bottom:20px;">
      <label style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;">Medical Records (${records.length})</label>
      ${records.map(r => `
        <div style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:12px;margin-top:8px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
            <strong>${r.title}</strong>
            <div style="display:flex;align-items:center;gap:6px;">
              <span class="badge badge-blue">${r.type}</span>
              <button class="btn btn-secondary btn-sm" onclick="downloadSingleMedicalRecordAdmin('${r.id}')" style="padding:2px 6px; font-size:10px; height:auto; border-radius:4px; font-weight:500;" id="btn-download-admin-${r.id}">📥 Download</button>
              <button class="btn btn-secondary btn-sm" onclick="showEditRecord('${r.id}')" style="padding:2px 6px; font-size:10px; height:auto; border-radius:4px; font-weight:500;">✏️ Edit</button>
            </div>
          </div>
          <div style="font-size:12px;color:var(--text2);">${r.description}</div>
          <div style="font-size:11px;color:var(--text3);margin-top:6px;">${r.date}</div>
        </div>
      `).join('') || '<div style="color:var(--text2);font-size:13px;margin-top:8px;">No records yet</div>'}
    </div>
    <div>
      <label style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;">Appointments (${appts.length})</label>
      ${appts.map(a => `
        <div style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:12px;margin-top:8px;display:flex;justify-content:space-between;align-items:center;">
          <div><strong>${a.type}</strong> — ${a.date} at ${a.time}<div style="font-size:12px;color:var(--text2);">${a.notes}</div></div>
          ${statusBadge(a.status)}
        </div>
      `).join('') || '<div style="color:var(--text2);font-size:13px;margin-top:8px;">No appointments</div>'}
    </div>
  `);
    }

    function editPatient(id) {
      const p = store.patients.find(x => x.id === id);
      const doctors = store.users.filter(u => u.role === 'doctor');
      openModal('Edit Patient', `
    <div class="form-row">
      <div class="form-group"><label>Full Name</label><span>${p.gender}</span></div>
      <div class="detail-item"><label>Blood Group</label><span>${p.bloodGroup}</span></div>
      <div class="detail-item"><label>Address</label><span>${p.address}</span></div>
      <div class="detail-item" style="grid-column: span 2;"><label>Assigned Doctor</label><span style="color:var(--blue);">👨‍⚕️ ${doctor ? doctor.name + ' (' + doctor.department + ')' : 'None'}</span></div>
    </div>
    <div style="margin-bottom:20px;">
      <label style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;">Conditions</label>
      <div style="margin-top:8px;">${(p.conditions || []).map(c => `<span class="badge badge-yellow" style="margin-right:6px;margin-bottom:6px;">${c}</span>`).join('')}</div>
    </div>
    <div style="margin-bottom:20px;">
      <label style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;">Medical Records (${records.length})</label>
      ${records.map(r => `
        <div style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:12px;margin-top:8px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
            <strong>${r.title}</strong>
            <div style="display:flex;align-items:center;gap:6px;">
              <span class="badge badge-blue">${r.type}</span>
              <button class="btn btn-secondary btn-sm" onclick="downloadSingleMedicalRecordAdmin('${r.id}')" style="padding:2px 6px; font-size:10px; height:auto; border-radius:4px; font-weight:500;" id="btn-download-admin-${r.id}">📥 Download</button>
              <button class="btn btn-secondary btn-sm" onclick="showEditRecord('${r.id}')" style="padding:2px 6px; font-size:10px; height:auto; border-radius:4px; font-weight:500;">✏️ Edit</button>
            </div>
          </div>
          <div style="font-size:12px;color:var(--text2);">${r.description}</div>
          <div style="font-size:11px;color:var(--text3);margin-top:6px;">${r.date}</div>
        </div>
      `).join('') || '<div style="color:var(--text2);font-size:13px;margin-top:8px;">No records yet</div>'}
    </div>
    <div>
      <label style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;">Appointments (${appts.length})</label>
      ${appts.map(a => `
        <div style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:12px;margin-top:8px;display:flex;justify-content:space-between;align-items:center;">
          <div><strong>${a.type}</strong> — ${a.date} at ${a.time}<div style="font-size:12px;color:var(--text2);">${a.notes}</div></div>
          ${statusBadge(a.status)}
        </div>
      `).join('') || '<div style="color:var(--text2);font-size:13px;margin-top:8px;">No appointments</div>'}
    </div>
  `);
    }

    function editPatient(id) {
      const p = store.patients.find(x => x.id === id);
      const doctors = store.users.filter(u => u.role === 'doctor');
      openModal('Edit Patient', `
    <div class="form-row">
      <div class="form-group"><label>Full Name</label><span>${p.age} years</span></div>
      <div class="detail-item"><label>Gender</label><span>${p.gender}</span></div>
      <div class="detail-item"><label>Blood Group</label><span>${p.bloodGroup}</span></div>
      <div class="detail-item"><label>Address</label><span>${p.address}</span></div>
      <div class="detail-item" style="grid-column: span 2;"><label>Assigned Doctor</label><span style="color:var(--blue);">👨‍⚕️ ${doctor ? doctor.name + ' (' + doctor.department + ')' : 'None'}</span></div>
    </div>
    <div style="margin-bottom:20px;">
      <label style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;">Conditions</label>
      <div style="margin-top:8px;">${(p.conditions || []).map(c => `<span class="badge badge-yellow" style="margin-right:6px;margin-bottom:6px;">${c}</span>`).join('')}</div>
    </div>
    <div style="margin-bottom:20px;">
      <label style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;">Medical Records (${records.length})</label>
      ${records.map(r => `
        <div style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:12px;margin-top:8px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
            <strong>${r.title}</strong>
            <div style="display:flex;align-items:center;gap:6px;">
              <span class="badge badge-blue">${r.type}</span>
              <button class="btn btn-secondary btn-sm" onclick="downloadSingleMedicalRecordAdmin('${r.id}')" style="padding:2px 6px; font-size:10px; height:auto; border-radius:4px; font-weight:500;" id="btn-download-admin-${r.id}">📥 Download</button>
              <button class="btn btn-secondary btn-sm" onclick="showEditRecord('${r.id}')" style="padding:2px 6px; font-size:10px; height:auto; border-radius:4px; font-weight:500;">✏️ Edit</button>
            </div>
          </div>
          <div style="font-size:12px;color:var(--text2);">${r.description}</div>
          <div style="font-size:11px;color:var(--text3);margin-top:6px;">${r.date}</div>
        </div>
      `).join('') || '<div style="color:var(--text2);font-size:13px;margin-top:8px;">No records yet</div>'}
    </div>
    <div>
      <label style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;">Appointments (${appts.length})</label>
      ${appts.map(a => `
        <div style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:12px;margin-top:8px;display:flex;justify-content:space-between;align-items:center;">
          <div><strong>${a.type}</strong> — ${a.date} at ${a.time}<div style="font-size:12px;color:var(--text2);">${a.notes}</div></div>
          ${statusBadge(a.status)}
        </div>
      `).join('') || '<div style="color:var(--text2);font-size:13px;margin-top:8px;">No appointments</div>'}
    </div>
  `);
    }

    function editPatient(id) {
      const p = store.patients.find(x => x.id === id);
      const doctors = store.users.filter(u => u.role === 'doctor');
      openModal('Edit Patient', `
    <div class="form-row">
      <div class="form-group"><label>Full Name</label><input id="ep_name" value="${p.name}"></div>
      <div class="form-group"><label for="ep_age">Age</label><input id="ep_age" type="number" value="${p.age}"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label for="ep_gender">Gender</label>
        <select id="ep_gender"><option ${p.gender === 'Male' ? 'selected' : ''}>Male</option><option ${p.gender === 'Female' ? 'selected' : ''}>Female</option><option ${p.gender === 'Other' ? 'selected' : ''}>Other</option></select>
      </div>
      <div class="form-group"><label for="ep_blood">Blood Group</label>
        <select id="ep_blood">${['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(b => `<option ${p.bloodGroup === b ? 'selected' : ''}>${b}</option>`).join('')}</select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group"><label for="ep_phone">Phone</label><input id="ep_phone" value="${p.phone}"></div>
      <div class="form-group"><label for="ep_status">Status</label>
        <select id="ep_status">${['Active', 'Critical', 'Recovered'].map(s => `<option ${p.status === s ? 'selected' : ''}>${s}</option>`).join('')}</select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group"><label for="ep_addr">Address</label><input id="ep_addr" value="${p.address}"></div>
      <div class="form-group"><label for="ep_doctor">Assigned Doctor</label>
        <select id="ep_doctor">
          <option value="">None</option>
          ${doctors.map(d => `<option value="${d.id}" ${p.assignedDoctor === d.id ? 'selected' : ''}>${d.name}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group" style="grid-column: span 2;"><label for="ep_conditions">Conditions (comma separated)</label><input id="ep_conditions" value="${(p.conditions || []).join(', ')}"></div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="savePatient('${id}')">Save Changes</button>
    </div>
  `);
    }

    function savePatient(id) {
      const p = store.patients.find(x => x.id === id);
      p.name = document.getElementById('ep_name').value;
      p.age = +document.getElementById('ep_age').value;
      p.gender = document.getElementById('ep_gender').value;
      p.bloodGroup = document.getElementById('ep_blood').value;
      p.phone = document.getElementById('ep_phone').value;
      p.status = document.getElementById('ep_status').value;
      p.address = document.getElementById('ep_addr').value;
      p.assignedDoctor = document.getElementById('ep_doctor').value || null;
      p.conditions = document.getElementById('ep_conditions').value.split(',').map(s => s.trim()).filter(Boolean);
      closeModal(); renderPatients();
      apiFetch('/api/patients/' + p.id, { method: 'PUT', body: JSON.stringify(p) });
      showToast('✅ Patient updated successfully', 'success');
    }

    function deletePatient(id) {
      if (!confirm('Delete this patient? This cannot be undone.')) return;
      store.patients = store.patients.filter(p => p.id !== id);
      renderPatients();
      apiFetch('/api/patients/' + id, { method: 'DELETE' });
      showToast('🗑️ Patient deleted', 'error');
    }

    function showAddPatient() {
      const doctors = store.users.filter(u => u.role === 'doctor');
      openModal('Add New Patient', `
    <div class="form-row">
      <div class="form-group"><label for="np_name">Full Name</label><input id="np_name" placeholder="Patient full name"></div>
      <div class="form-group"><label for="np_age">Age</label><input id="np_age" type="number" placeholder="Age"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label for="np_gender">Gender</label>
        <select id="np_gender"><option>Male</option><option>Female</option><option>Other</option></select>
      </div>
      <div class="form-group"><label for="np_blood">Blood Group</label>
        <select id="np_blood">${['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(b => `<option>${b}</option>`).join('')}</select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group"><label for="np_phone">Phone</label><input id="np_phone" placeholder="Mobile number"></div>
      <div class="form-group"><label for="np_email">Email</label><input id="np_email" placeholder="Email address"></div>
    </div>
    <div class="form-row">
      <div class="form-group" style="grid-column: span 2;"><label for="np_addr">Address</label><input id="np_addr" placeholder="Full address"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label for="np_conditions">Conditions (comma separated)</label><input id="np_conditions" placeholder="e.g. Hypertension, Diabetes"></div>
      <div class="form-group"><label for="np_doctor">Assigned Doctor</label>
        <select id="np_doctor">
          <option value="">None</option>
          ${doctors.map(d => `<option value="${d.id}">${d.name}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="addPatient()">Add Patient</button>
    </div>
  `);
    }

    function addPatient() {
      const name = document.getElementById('np_name').value.trim();
      if (!name) { showToast('❌ Name is required', 'error'); return; }
      const newP = {
        id: 'p' + Date.now(),
        name, age: +document.getElementById('np_age').value,
        gender: document.getElementById('np_gender').value,
        bloodGroup: document.getElementById('np_blood').value,
        phone: document.getElementById('np_phone').value,
        email: document.getElementById('np_email').value,
        address: document.getElementById('np_addr').value,
        conditions: document.getElementById('np_conditions').value.split(',').map(s => s.trim()).filter(Boolean),
        assignedDoctor: document.getElementById('np_doctor').value || null,
        status: 'Active',
        createdAt: new Date().toISOString().split('T')[0]
      };
      store.patients.push(newP);
      closeModal(); renderPatients();
      apiFetch('/api/patients', { method: 'POST', body: JSON.stringify(newP) })
        .then(() => syncFromServer());
      showToast('✅ Patient ' + name + ' added successfully', 'success');
    }

    // ── APPOINTMENTS ──────────────────────────────────────────────────────────────
    let apptStatusFilter = '';
    function filterApptStatus(v) { apptStatusFilter = v; renderAppointments(); }

    function renderAppointments() {
      let appts = store.appointments.filter(a => !apptStatusFilter || a.status === apptStatusFilter);
      document.getElementById('appointmentTable').innerHTML = appts.map(a => {
        const patient = store.patients.find(p => p.id === a.patientId);
        const doctor = store.users.find(u => u.id === a.doctorId);
        return `<tr>
      <td>
        <div style="display:flex;align-items:center;">
          <span class="avatar-sm" style="background:${avatarColor(patient?.name || '?')};">${(patient?.name || '?')[0]}</span>
          <span>${patient?.name || 'Unknown'}</span>
        </div>
      </td>
      <td>${doctor?.name || 'Unknown'}</td>
      <td><strong>${a.date}</strong> at ${a.time}</td>
      <td><span class="badge badge-blue">${a.type}</span></td>
      <td style="max-width:150px;font-size:12px;color:var(--text2);">${a.notes}</td>
      <td>${statusBadge(a.status)}</td>
      <td>
        <div style="display:flex;gap:6px;">
          ${a.status === 'Scheduled' ? `<button class="btn btn-secondary btn-sm" onclick="completeAppt('${a.id}')">Complete</button>` : ''}
          <button class="btn btn-danger btn-sm" onclick="deleteAppt('${a.id}')">Cancel</button>
        </div>
      </td>
    </tr>`;
      }).join('') || `<tr><td colspan="7"><div class="empty-state"><div class="icon">📅</div><h3>No appointments found</h3></div></td></tr>`;
    }

    function completeAppt(id) {
      const a = store.appointments.find(x => x.id === id);
      a.status = 'Completed'; renderAppointments();
      apiFetch('/api/appointments/' + id, { method: 'PUT', body: JSON.stringify(a) });
      showToast('✅ Appointment marked as completed', 'success');
    }

    function deleteAppt(id) {
      store.appointments = store.appointments.filter(a => a.id !== id);
      renderAppointments();
      apiFetch('/api/appointments/' + id, { method: 'DELETE' });
      showToast('🗑️ Appointment cancelled', 'error');
    }

    function showAddAppointment() {
      openModal('Schedule New Appointment', `
    <div class="form-group"><label for="na_patient">Patient</label>
      <select id="na_patient">${store.patients.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}</select>
    </div>
    <div class="form-row">
      <div class="form-group"><label for="na_date">Date</label><input id="na_date" type="date" value="${new Date().toISOString().split('T')[0]}"></div>
      <div class="form-group"><label for="na_time">Time</label><input id="na_time" type="time" value="09:00"></div>
    </div>
    <div class="form-group"><label for="na_type">Appointment Type</label>
      <select id="na_type"><option>Consultation</option><option>Follow-up</option><option>Emergency</option><option>Discharge</option><option>Lab Test</option></select>
    </div>
    <div class="form-group"><label for="na_notes">Notes</label><textarea id="na_notes" placeholder="Appointment notes..."></textarea></div>
    <div class="modal-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="addAppointment()">Schedule</button>
    </div>
  `);
    }

    function addAppointment() {
      const appt = {
        id: 'a' + Date.now(),
        patientId: document.getElementById('na_patient').value,
        doctorId: store.currentUser.id,
        date: document.getElementById('na_date').value,
        time: document.getElementById('na_time').value,
        type: document.getElementById('na_type').value,
        notes: document.getElementById('na_notes').value,
        status: 'Scheduled'
      };
      store.appointments.push(appt);
      closeModal(); renderAppointments();
      apiFetch('/api/appointments', { method: 'POST', body: JSON.stringify(appt) });
      showToast('✅ Appointment scheduled', 'success');
    }

    // ── RECORDS ───────────────────────────────────────────────────────────────────
    function renderRecords() {
      document.getElementById('recordTable').innerHTML = store.records.map(r => {
        const patient = store.patients.find(p => p.id === r.patientId);
        const typeColors = { Diagnosis: 'badge-yellow', 'Lab Result': 'badge-blue', Emergency: 'badge-red', Prescription: 'badge-green' };
        return `<tr>
      <td>
        <div style="display:flex;align-items:center;">
          <span class="avatar-sm" style="background:${avatarColor(patient?.name || '?')};">${(patient?.name || '?')[0]}</span>
          <span>${patient?.name || 'Unknown'}</span>
        </div>
      </td>
      <td><span class="badge ${typeColors[r.type] || 'badge-gray'}">${r.type}</span></td>
      <td><strong>${r.title}</strong><div style="font-size:11px;color:var(--text2);max-width:240px;margin-top:2px;">${r.description.substring(0, 80)}...</div></td>
      <td>${(r.medications || []).map(m => `<span class="badge badge-gray" style="margin-right:3px;">${m}</span>`).join('')}</td>
      <td>${r.date}</td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="viewRecord('${r.id}')">View</button>
        <button class="btn btn-primary btn-sm" onclick="showEditRecord('${r.id}')" style="margin-left:6px;">Edit</button>
        <button class="btn btn-secondary btn-sm" onclick="downloadSingleMedicalRecordAdmin('${r.id}')" style="margin-left:6px;" id="btn-download-admin-${r.id}">Download PDF</button>
      </td>
    </tr>`;
      }).join('') || `<tr><td colspan="6"><div class="empty-state"><div class="icon">📋</div><h3>No records found</h3></div></td></tr>`;
    }

    function viewRecord(id) {
      const r = store.records.find(x => x.id === id);
      const patient = store.patients.find(p => p.id === r.patientId);
      openModal('Medical Record — ' + r.title, `
    <div class="detail-grid">
      <div class="detail-item"><label for="nr_patient">Patient</label><span>${patient?.name}</span></div>
      <div class="detail-item"><label for="nr_patient">Record Type</label><span>${r.type}</span></div>
      <div class="detail-item"><label>Date</label><span>${r.date}</span></div>
    </div>
    <div class="form-group" style="margin-bottom:16px;"><label>Description</label>
      <div style="background:var(--bg3);padding:12px;border-radius:8px;border:1px solid var(--border);font-size:13px;line-height:1.6;">${r.description}</div>
    </div>
    <div><label style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;display:block;margin-bottom:8px;">Medications</label>
      ${(r.medications || []).map(m => `<span class="badge badge-green" style="margin-right:6px;">${m}</span>`).join('')}
    </div>
  `);
    }

    function showAddRecord() {
      openModal('Add Medical Record', `
    <div class="form-group"><label>Patient</label><span>${patient?.name}</span></div>
      <div class="detail-item"><label>Record Type</label><span>${r.type}</span></div>
      <div class="detail-item"><label>Date</label><span>${r.date}</span></div>
    </div>
    <div class="form-group" style="margin-bottom:16px;"><label>Description</label>
      <div style="background:var(--bg3);padding:12px;border-radius:8px;border:1px solid var(--border);font-size:13px;line-height:1.6;">${r.description}</div>
    </div>
    <div><label style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;display:block;margin-bottom:8px;">Medications</label>
      ${(r.medications || []).map(m => `<span class="badge badge-green" style="margin-right:6px;">${m}</span>`).join('')}
    </div>
  `);
    }

    function showAddRecord() {
      openModal('Add Medical Record', `
    <div class="form-group"><label>Patient</label><span>${r.type}</span></div>
      <div class="detail-item"><label>Date</label><span>${r.date}</span></div>
    </div>
    <div class="form-group" style="margin-bottom:16px;"><label>Description</label>
      <div style="background:var(--bg3);padding:12px;border-radius:8px;border:1px solid var(--border);font-size:13px;line-height:1.6;">${r.description}</div>
    </div>
    <div><label style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;display:block;margin-bottom:8px;">Medications</label>
      ${(r.medications || []).map(m => `<span class="badge badge-green" style="margin-right:6px;">${m}</span>`).join('')}
    </div>
  `);
    }

    function showAddRecord() {
      openModal('Add Medical Record', `
    <div class="form-group"><label>Patient</label><span>${patient?.name}</span></div>
      <div class="detail-item"><label>Record Type</label><span>${r.type}</span></div>
      <div class="detail-item"><label>Date</label><span>${r.date}</span></div>
    </div>
    <div class="form-group" style="margin-bottom:16px;"><label>Description</label>
      <div style="background:var(--bg3);padding:12px;border-radius:8px;border:1px solid var(--border);font-size:13px;line-height:1.6;">${r.description}</div>
    </div>
    <div><label style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:.06em;display:block;margin-bottom:8px;">Medications</label>
      ${(r.medications || []).map(m => `<span class="badge badge-green" style="margin-right:6px;">${m}</span>`).join('')}
    </div>
  `);
    }

    function showAddRecord() {
      openModal('Add Medical Record', `
    <div class="form-group"><label>Patient</label>
      <select id="nr_patient">${store.patients.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}</select>
    </div>
    <div class="form-row">
      <div class="form-group"><label for="nr_type">Record Type</label>
        <select id="nr_type"><option>Diagnosis</option><option>Lab Result</option><option>Emergency</option><option>Prescription</option></select>
      </div>
      <div class="form-group"><label for="nr_date">Date</label><input id="nr_date" type="date" value="${new Date().toISOString().split('T')[0]}"></div>
    </div>
    <div class="form-group"><label for="nr_title">Title</label><input id="nr_title" placeholder="Record title"></div>
    <div class="form-group"><label for="nr_desc">Description</label><textarea id="nr_desc" placeholder="Detailed description..."></textarea></div>
    <div class="form-group"><label for="nr_meds">Medications (comma separated)</label><input id="nr_meds" placeholder="e.g. Aspirin 325mg, Metformin 500mg"></div>
    <div class="modal-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="addRecord()">Save Record</button>
    </div>
  `);
    }

    function addRecord() {
      const title = document.getElementById('nr_title').value.trim();
      const description = document.getElementById('nr_desc').value.trim();
      if (!title || !description) { showToast('❌ Title and description are required', 'error'); return; }
      const record = {
        id: 'r' + Date.now(),
        patientId: document.getElementById('nr_patient').value,
        doctorId: store.currentUser.id,
        type: document.getElementById('nr_type').value,
        date: document.getElementById('nr_date').value,
        title,
        description,
        medications: document.getElementById('nr_meds').value.split(',').map(s => s.trim()).filter(Boolean)
      };
      store.records.push(record);
      closeModal(); renderRecords();
      apiFetch('/api/records', { method: 'POST', body: JSON.stringify(record) });
      showToast('✅ Medical record saved', 'success');
    }

    function escapeHTML(str) {
      if (!str) return '';
      return str.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
    }

    function showEditRecord(id) {
      const r = store.records.find(x => x.id === id);
      if (!r) return;
      const isPatient = !!sessionStorage.getItem('phms_current_patient_user');
      
      let patientField = '';
      if (!isPatient) {
        patientField = `
          <div class="form-group"><label for="ur_patient">Patient</label>
            <select id="ur_patient">${store.patients.map(p => `<option value="${p.id}" ${p.id === r.patientId ? 'selected' : ''}>${p.name}</option>`).join('')}</select>
          </div>
        `;
      }

      openModal('Edit Medical Record', `
        ${patientField}
        <div class="form-row">
          <div class="form-group"><label for="ur_type">Record Type</label>
            <select id="ur_type">
              <option ${r.type === 'Diagnosis' ? 'selected' : ''}>Diagnosis</option>
              <option ${r.type === 'Lab Result' ? 'selected' : ''}>Lab Result</option>
              <option ${r.type === 'Emergency' ? 'selected' : ''}>Emergency</option>
              <option ${r.type === 'Prescription' ? 'selected' : ''}>Prescription</option>
            </select>
          </div>
          <div class="form-group"><label for="ur_date">Date</label><input id="ur_date" type="date" value="${r.date}"></div>
        </div>
        <div class="form-group"><label for="ur_title">Title</label><input id="ur_title" value="${escapeHTML(r.title)}" placeholder="Record title"></div>
        <div class="form-group"><label for="ur_desc">Description</label><textarea id="ur_desc" placeholder="Detailed description...">${escapeHTML(r.description)}</textarea></div>
        <div class="form-group"><label for="ur_meds">Medications (comma separated)</label><input id="ur_meds" value="${(r.medications || []).join(', ')}" placeholder="e.g. Aspirin 325mg, Metformin 500mg"></div>
        <div class="modal-actions">
          <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button class="btn btn-primary" onclick="updateRecord('${r.id}')">Update Record</button>
        </div>
      `);
    }

    function updateRecord(id) {
      const r = store.records.find(x => x.id === id);
      if (!r) return;
      
      const title = document.getElementById('ur_title').value.trim();
      const description = document.getElementById('ur_desc').value.trim();
      if (!title || !description) { showToast('❌ Title and description are required', 'error'); return; }
      
      r.title = title;
      r.description = description;
      r.type = document.getElementById('ur_type').value;
      r.date = document.getElementById('ur_date').value;
      r.medications = document.getElementById('ur_meds').value.split(',').map(s => s.trim()).filter(Boolean);
      
      const patientSelect = document.getElementById('ur_patient');
      if (patientSelect) {
        r.patientId = patientSelect.value;
      }
      apiFetch('/api/records', { method: 'POST', body: JSON.stringify(r) });
      closeModal();
      
      // Refresh patient dashboard if patient view is visible or active
      if (document.getElementById('patientPortalContent').style.display !== 'none' || sessionStorage.getItem('phms_current_patient_user')) {
        renderPatientPortal();
      }
      // Refresh staff records table if visible
      if (document.getElementById('recordTable')) {
        renderRecords();
      }
      
      showToast('✅ Medical record updated', 'success');
    }

    let tempResetState = {
      email: '',
      role: '',
      code: '',
      attempts: 0
    };

    function showForgotPasswordModal(role) {
      tempResetState = { email: '', role: role, code: '', attempts: 0 };
      
      openModal('Reset Account Password', `
        <div style="display:flex; flex-direction:column; gap:16px;">
          <p style="font-size:13px; color:var(--text2); line-height:1.5; margin:0;">
            Enter your registered email address. We will verify your account and simulate sending a verification code.
          </p>
          <div class="form-group" style="margin:0;">
            <label for="reset_email">Registered Email Address</label>
            <input type="email" id="reset_email" placeholder="e.g. user@example.com" style="width:100%;" />
          </div>
          <div class="modal-actions" style="margin-top:8px;">
            <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="sendPasswordResetCode()">Send Verification Code</button>
          </div>
        </div>
      `);
    }

    function sendPasswordResetCode() {
      loadStore();
      const email = document.getElementById('reset_email').value.trim().toLowerCase();
      if (!email) { showToast('❌ Please enter your email address', 'error'); return; }
      
      let accountExists = false;
      const staffUser = store.users.find(u => u.email && u.email.toLowerCase() === email);
      const patientUser = store.patients.find(p => p.email && p.email.toLowerCase() === email);
      
      if (staffUser) {
        accountExists = true;
        tempResetState.role = 'staff';
      } else if (patientUser) {
        accountExists = true;
        tempResetState.role = 'patient';
      }
      
      if (!accountExists) {
        showToast('❌ Registered email address not found', 'error');
        return;
      }
      
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      tempResetState.email = email;
      tempResetState.code = code;
      
      showToast(`🔑 Reset code simulated! Copy: ${code}`, 'info');
      
      openModal('Enter Verification Code', `
        <div style="display:flex; flex-direction:column; gap:16px;">
          <p style="font-size:13px; color:var(--text2); line-height:1.5; margin:0;">
            A simulated 6-digit verification code has been generated. Enter it below to verify your identity.
          </p>
          <div style="background:rgba(0, 212, 160, 0.05); border:1px dashed var(--accent); border-radius:10px; padding:12px; font-size:13px; text-align:center;">
            <strong>Simulated Code Sent To:</strong> <code>${email}</code><br/>
            <strong style="color:var(--accent); font-size:16px; display:block; margin-top:8px;">Code: ${code}</strong>
          </div>
          <div class="form-group" style="margin:0;">
            <label for="reset_code">6-Digit Verification Code</label>
            <input type="text" id="reset_code" placeholder="Enter 6-digit code" maxlength="6" style="width:100%; text-align:center; letter-spacing:0.3em; font-weight:700; font-size:16px;" />
          </div>
          <div class="modal-actions" style="margin-top:8px;">
            <button class="btn btn-secondary" onclick="showForgotPasswordModal('${tempResetState.role}')">&larr; Back</button>
            <button class="btn btn-primary" onclick="verifyPasswordResetCode()">Verify Code</button>
          </div>
        </div>
      `);
    }

    function verifyPasswordResetCode() {
      const codeInput = document.getElementById('reset_code').value.trim();
      if (codeInput !== tempResetState.code) {
        tempResetState.attempts++;
        if (tempResetState.attempts >= 3) {
          showToast('❌ Too many failed attempts. Reset restarted.', 'error');
          closeModal();
          return;
        }
        showToast('❌ Invalid verification code. Try again.', 'error');
        return;
      }
      
      openModal('Set New Password', `
        <div style="display:flex; flex-direction:column; gap:16px;">
          <p style="font-size:13px; color:var(--text2); line-height:1.5; margin:0;">
            Identity verified. Please set a new secure password for your account.
          </p>
          <div class="form-group" style="margin:0;">
            <label for="new_reset_pwd">New Password</label>
            <div style="position: relative;">
              <input type="password" id="new_reset_pwd" placeholder="Enter new password" style="width:100%; padding-right:48px;" />
              <button type="button" class="password-toggle-btn" onclick="togglePasswordVisibility('new_reset_pwd', this)" style="position: absolute; right: 16px; top: 50%; transform: translateY(-50%); background: none; border: none; color: var(--text2); cursor: pointer; font-size: 16px; padding: 4px; display: flex; align-items: center; justify-content: center; outline: none; transition: var(--transition);">👁️</button>
            </div>
          </div>
          <div class="form-group" style="margin:0;">
            <label for="new_reset_pwd2">Confirm New Password</label>
            <div style="position: relative;">
              <input type="password" id="new_reset_pwd2" placeholder="Confirm new password" style="width:100%; padding-right:48px;" />
              <button type="button" class="password-toggle-btn" onclick="togglePasswordVisibility('new_reset_pwd2', this)" style="position: absolute; right: 16px; top: 50%; transform: translateY(-50%); background: none; border: none; color: var(--text2); cursor: pointer; font-size: 16px; padding: 4px; display: flex; align-items: center; justify-content: center; outline: none; transition: var(--transition);">👁️</button>
            </div>
          </div>
          <div class="modal-actions" style="margin-top:8px;">
            <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="resetAccountPassword()">Reset Password</button>
          </div>
        </div>
      `);
    }

    function resetAccountPassword() {
      const pwd = document.getElementById('new_reset_pwd').value;
      const pwd2 = document.getElementById('new_reset_pwd2').value;
      
      if (!pwd) { showToast('❌ Password cannot be empty', 'error'); return; }
      if (pwd !== pwd2) { showToast('❌ Passwords do not match', 'error'); return; }
      if (pwd.length < 6) { showToast('❌ Password must be at least 6 characters', 'error'); return; }
      
      loadStore();
      let updated = false;
      
      if (tempResetState.role === 'staff') {
        const staffUser = store.users.find(u => u.email && u.email.toLowerCase() === tempResetState.email);
        if (staffUser) {
          staffUser.password = pwd;
          updated = true;
        }
      } else if (tempResetState.role === 'patient') {
        const patientAcc = store.patients.find(p => p.email && p.email.toLowerCase() === tempResetState.email);
        if (patientAcc) {
          patientAcc.password = pwd;
          updated = true;
        }
      }
      
      if (updated) {
        apiFetch('/api/auth/reset-password', {
          method: 'POST',
          body: JSON.stringify({ email: tempResetState.email, password: pwd, role: tempResetState.role })
        })
        .then(res => {
          if (!res.ok) throw new Error('Reset failed on server');
          return res.json();
        })
        .then(() => {
          closeModal();
          showToast('✅ Password reset successful! You can now log in.', 'success');
        })
        .catch(err => {
          console.error(err);
          showToast('❌ Password reset failed on server. Try again.', 'error');
        });
      } else {
        showToast('❌ Account not found. Reset failed.', 'error');
      }
    }

    // ── DISEASES ──────────────────────────────────────────────────────────────────
    let diseaseCatFilter = '';
    function filterDiseaseCategory(v) { diseaseCatFilter = v; renderDiseases(); }

    function renderDiseases() {
      let diseases = store.diseases.filter(d => !diseaseCatFilter || d.category === diseaseCatFilter);
      document.getElementById('diseaseTable').innerHTML = diseases.map(d => `
    <tr>
      <td><strong>${d.name}</strong></td>
      <td><span class="badge badge-blue">${d.category}</span></td>
      <td><strong>${d.cases.toLocaleString()}</strong></td>
      <td style="color:var(--yellow);">${d.active}</td>
      <td style="color:var(--green);">${d.recovered}</td>
      <td style="color:var(--red);">${d.deaths}</td>
      <td style="font-size:12px;color:var(--text2);">${(d.affectedRegions || []).join(', ')}</td>
      <td>${trendBadge(d.trend)}</td>
      <td>
        <div style="display:flex;gap:6px;">
          <button class="btn btn-secondary btn-sm" onclick="editDisease('${d.id}')">Update</button>
          <button class="btn btn-danger btn-sm" onclick="deleteDisease('${d.id}')">Del</button>
        </div>
      </td>
    </tr>
  `).join('');
    }

    function editDisease(id) {
      const d = store.diseases.find(x => x.id === id);
      openModal('Update Disease Data — ' + d.name, `
    <div class="form-row">
      <div class="form-group"><label for="ed_cases">Total Cases</label><input id="ed_cases" type="number" value="${d.cases}"></div>
      <div class="form-group"><label for="ed_active">Active Cases</label><input id="ed_active" type="number" value="${d.active}"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label for="ed_recovered">Recovered</label><input id="ed_recovered" type="number" value="${d.recovered}"></div>
      <div class="form-group"><label for="ed_deaths">Deaths</label><input id="ed_deaths" type="number" value="${d.deaths}"></div>
    </div>
    <div class="form-group"><label for="ed_trend">Trend</label>
      <select id="ed_trend">
        <option ${d.trend === 'increasing' ? 'selected' : ''}>increasing</option>
        <option ${d.trend === 'decreasing' ? 'selected' : ''}>decreasing</option>
        <option ${d.trend === 'stable' ? 'selected' : ''}>stable</option>
      </select>
    </div>
    <div class="modal-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="saveDisease('${id}')">Update</button>
    </div>
  `);
    }

    function saveDisease(id) {
      const d = store.diseases.find(x => x.id === id);
      d.cases = +document.getElementById('ed_cases').value;
      d.active = +document.getElementById('ed_active').value;
      d.recovered = +document.getElementById('ed_recovered').value;
      d.deaths = +document.getElementById('ed_deaths').value;
      d.trend = document.getElementById('ed_trend').value;
      closeModal(); renderDiseases();
      apiFetch('/api/diseases/' + d.id, { method: 'PUT', body: JSON.stringify(d) });
      showToast('✅ Disease data updated', 'success');
    }

    function deleteDisease(id) {
      store.diseases = store.diseases.filter(d => d.id !== id);
      renderDiseases();
      apiFetch('/api/diseases/' + id, { method: 'DELETE' });
      showToast('🗑️ Disease record removed', 'error');
    }

    function showAddDisease() {
      openModal('Report New Disease', `
    <div class="form-row">
      <div class="form-group"><label for="nd_name">Disease Name</label><input id="nd_name" placeholder="Disease name"></div>
      <div class="form-group"><label for="nd_cat">Category</label>
        <select id="nd_cat"><option>Viral</option><option>Bacterial</option><option>Parasitic</option><option>Vector-Borne</option><option>Fungal</option></select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group"><label for="nd_cases">Total Cases</label><input id="nd_cases" type="number" value="0"></div>
      <div class="form-group"><label for="nd_active">Active Cases</label><input id="nd_active" type="number" value="0"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label for="nd_recovered">Recovered</label><input id="nd_recovered" type="number" value="0"></div>
      <div class="form-group"><label for="nd_deaths">Deaths</label><input id="nd_deaths" type="number" value="0"></div>
    </div>
    <div class="form-group"><label for="nd_regions">Affected Regions (comma separated)</label><input id="nd_regions" placeholder="e.g. Mysuru, Bengaluru"></div>
    <div class="form-group"><label for="nd_trend">Trend</label>
      <select id="nd_trend"><option>stable</option><option>increasing</option><option>decreasing</option></select>
    </div>
    <div class="modal-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="addDisease()">Report Disease</button>
    </div>
  `);
    }

    function addDisease() {
      const d = {
        id: 'd' + Date.now(),
        name: document.getElementById('nd_name').value,
        category: document.getElementById('nd_cat').value,
        cases: +document.getElementById('nd_cases').value,
        active: +document.getElementById('nd_active').value,
        recovered: +document.getElementById('nd_recovered').value,
        deaths: +document.getElementById('nd_deaths').value,
        affectedRegions: document.getElementById('nd_regions').value.split(',').map(s => s.trim()).filter(Boolean),
        trend: document.getElementById('nd_trend').value
      };
      store.diseases.push(d);
      closeModal(); renderDiseases();
      apiFetch('/api/diseases', { method: 'POST', body: JSON.stringify(d) });
      showToast('⚠️ Disease reported to surveillance system', 'warning');
    }

    // ── INVENTORY ──────────────────────────────────────────────────────────────────
    // Admin PDF Generator
    async function downloadSingleMedicalRecordAdmin(recordId) {
      loadStore();
      const record = store.records.find(r => r.id === recordId);
      if (!record) return;
      
      const patient = store.patients.find(p => p.id === record.patientId);
      if (!patient) {
        showToast('❌ Patient not found.', 'error');
        return;
      }
      
      const btn = document.getElementById('btn-download-admin-' + recordId);
      const originalText = btn.innerHTML;
      btn.innerHTML = '<span>⏳</span>';
      btn.disabled = true;
      
      try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // ── 1. HEADER ──
        doc.setFillColor(15, 23, 42); 
        doc.rect(0, 0, 210, 40, 'F'); 
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(26);
        doc.setFont('helvetica', 'bold');
        doc.text('HealthSync', 14, 22);
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(148, 163, 184); 
        doc.text('PUBLIC HEALTH MANAGEMENT SYSTEM', 14, 30);
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('CLINICAL RECORD', 196, 26, { align: 'right' });
        
        // ── 2. WATERMARK ──
        doc.setTextColor(245, 247, 250);
        doc.setFontSize(65);
        doc.setFont('helvetica', 'bold');
        doc.text('CONFIDENTIAL', 105, 150, { align: 'center', angle: 45 });
        
        // ── 3. PATIENT INFO BOX ──
        doc.setFillColor(248, 250, 252);
        doc.setDrawColor(226, 232, 240);
        doc.roundedRect(14, 48, 182, 25, 3, 3, 'FD');
        
        doc.setFontSize(10);
        doc.setTextColor(71, 85, 105);
        doc.setFont('helvetica', 'normal');
        doc.text('Patient Name:', 20, 58);
        doc.text('Patient ID:', 110, 58);
        doc.text('Age / Gender:', 20, 66);
        doc.text('Date of Record:', 110, 66);
        
        doc.setTextColor(15, 23, 42);
        doc.setFont('helvetica', 'bold');
        doc.text(patient.name, 48, 58);
        doc.text(patient.id, 140, 58);
        doc.text(`${patient.age} / ${patient.gender}`, 48, 66);
        doc.text(new Date(record.date).toLocaleDateString(), 140, 66);

        // ── 4. RECORD DETAILS ──
        let currentY = 85;
        doc.setFontSize(16);
        doc.setTextColor(15, 23, 42);
        doc.setFont('helvetica', 'bold');
        doc.text('Clinical Assessment Details', 14, currentY);
        
        currentY += 6;
        
        doc.autoTable({
          startY: currentY,
          theme: 'grid',
          headStyles: { fillColor: [0, 119, 204], textColor: [255, 255, 255], fontStyle: 'bold' },
          styles: { fontSize: 10, cellPadding: 6, textColor: [15, 23, 42], lineColor: [226, 232, 240] },
          columnStyles: { 0: { fontStyle: 'bold', cellWidth: 50, fillColor: [248, 250, 252] } },
          body: [
            ['Record Type', record.type],
            ['Diagnosis / Title', record.title],
            ['Clinical Description', record.description],
            ['Vital Signs', record.vitals ? `BP: ${record.vitals.bp} | HR: ${record.vitals.heartRate} bpm | Temp: ${record.vitals.temp}°C` : 'Not recorded'],
            ['Prescribed Medications', (record.medications || []).join(', ') || 'None prescribed']
          ]
        });

        // ── 5. FOOTER ──
        doc.setFillColor(15, 23, 42);
        doc.rect(0, 285, 210, 15, 'F');
        doc.setFontSize(8);
        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'normal');
        doc.text(`HealthSync - Confidential Medical Record`, 14, 292);
        doc.text(`Authorized by Attending Physician`, 196, 292, { align: 'right' });

        doc.save(`Record_${patient.name.replace(/\s+/g, '_')}_${record.date}.pdf`);
        showToast('✅ Record PDF downloaded!', 'success');
      } catch (e) {
        console.error(e);
        showToast('❌ Error generating PDF.', 'error');
      } finally {
        btn.innerHTML = originalText; btn.disabled = false;
      }
    }

    function renderInventory() {
      document.getElementById('inventoryTable').innerHTML = store.inventory.map(i => {
        const pct = Math.min(100, Math.round((i.quantity / (i.minStock * 2)) * 100));
        const barColor = i.status === 'Critical' ? 'var(--red)' : i.status === 'Low' ? 'var(--yellow)' : 'var(--green)';
        return `<tr>
      <td><strong>${i.name}</strong></td>
      <td><span class="badge badge-purple">${i.category}</span></td>
      <td>
        <div class="inventory-bar-wrap">
          <div class="progress-bar" style="width:120px;"><div class="progress-fill" style="width:${pct}%;background:${barColor};"></div></div>
          <span style="font-size:12px;font-weight:600;">${i.quantity.toLocaleString()}</span>
        </div>
      </td>
      <td style="color:var(--text2);">${i.unit}</td>
      <td style="font-size:12px;">${i.expiryDate}</td>
      <td style="font-size:12px;color:var(--text2);">${i.supplier}</td>
      <td>${i.status === 'Adequate' ? '<span class="badge badge-green">Adequate</span>' : i.status === 'Low' ? '<span class="badge badge-yellow">Low Stock</span>' : '<span class="badge badge-red">Critical</span>'}</td>
      <td>
        <div style="display:flex;gap:6px;">
          <button class="btn btn-secondary btn-sm" onclick="restockItem('${i.id}')">Restock</button>
          <button class="btn btn-danger btn-sm" onclick="deleteItem('${i.id}')">Del</button>
        </div>
      </td>
    </tr>`;
      }).join('');
      document.getElementById('lowStockCount').textContent = store.inventory.filter(i => i.status === 'Low').length;
      document.getElementById('criticalStockCount').textContent = store.inventory.filter(i => i.status === 'Critical').length;
    }

    function restockItem(id) {
      const i = store.inventory.find(x => x.id === id);
      openModal('Restock — ' + i.name, `
    <div class="form-group"><label for="rs_qty">Current Quantity</label>
      <input type="number" id="rs_qty" value="${i.quantity}">
    </div>
    <div class="form-group"><label for="rs_add">Add Quantity</label>
      <input type="number" id="rs_add" value="0" placeholder="Amount to add">
    </div>
    <div class="modal-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="saveRestock('${id}')">Update Stock</button>
    </div>
  `);
    }

    function saveRestock(id) {
      const i = store.inventory.find(x => x.id === id);
      const newQty = +document.getElementById('rs_qty').value + +document.getElementById('rs_add').value;
      i.quantity = newQty;
      i.status = newQty === 0 ? 'Critical' : newQty <= i.minStock ? 'Low' : 'Adequate';
      closeModal(); renderInventory();
      apiFetch('/api/inventory/' + i.id, { method: 'PUT', body: JSON.stringify(i) });
      showToast('📦 Stock updated for ' + i.name, 'success');
    }

    function deleteItem(id) {
      store.inventory = store.inventory.filter(i => i.id !== id);
      renderInventory();
      apiFetch('/api/inventory/' + id, { method: 'DELETE' });
      showToast('🗑️ Item removed from inventory', 'error');
    }

    function showAddInventory() {
      openModal('Add Inventory Item', `
    <div class="form-row">
      <div class="form-group"><label for="ni_name">Item Name</label><input id="ni_name" placeholder="Medicine/supply name"></div>
      <div class="form-group"><label for="ni_cat">Category</label>
        <select id="ni_cat"><option>Analgesic</option><option>Antibiotic</option><option>Cardiovascular</option><option>PPE</option><option>Hormone</option><option>Other</option></select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group"><label for="ni_qty">Quantity</label><input id="ni_qty" type="number" placeholder="0"></div>
      <div class="form-group"><label for="ni_unit">Unit</label><input id="ni_unit" placeholder="tablets/vials/pieces"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label for="ni_min">Min. Stock Level</label><input id="ni_min" type="number" placeholder="Minimum threshold"></div>
      <div class="form-group"><label for="ni_expiry">Expiry Date</label><input id="ni_expiry" type="date"></div>
    </div>
    <div class="form-group"><label for="ni_supplier">Supplier</label><input id="ni_supplier" placeholder="Supplier name"></div>
    <div class="modal-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="addInventory()">Add Item</button>
    </div>
  `);
    }

    function addInventory() {
      const qty = +document.getElementById('ni_qty').value;
      const min = +document.getElementById('ni_min').value;
      const item = {
        id: 'i' + Date.now(),
        name: document.getElementById('ni_name').value,
        category: document.getElementById('ni_cat').value,
        quantity: qty, unit: document.getElementById('ni_unit').value,
        minStock: min, expiryDate: document.getElementById('ni_expiry').value,
        supplier: document.getElementById('ni_supplier').value,
        status: qty === 0 ? 'Critical' : qty <= min ? 'Low' : 'Adequate'
      };
      store.inventory.push(item);
      closeModal(); renderInventory();
      apiFetch('/api/inventory', { method: 'POST', body: JSON.stringify(item) });
      showToast('✅ Inventory item added', 'success');
    }

    // ── USERS ─────────────────────────────────────────────────────────────────────
    function renderUsers() {
      const roleColors = { admin: 'badge-red', doctor: 'badge-blue', nurse: 'badge-green' };
      document.getElementById('userTable').innerHTML = store.users.map(u => `
    <tr>
      <td>
        <div style="display:flex;align-items:center;">
          <span class="avatar-sm" style="background:${avatarColor(u.name)};">${u.name[0]}</span>
          <strong>${u.name}</strong>
        </div>
      </td>
      <td style="font-size:13px;color:var(--text2);">${u.email}</td>
      <td><span class="badge ${roleColors[u.role] || 'badge-gray'}">${u.role}</span></td>
      <td>${u.department}</td>
      <td style="font-size:12px;color:var(--text2);">${u.createdAt}</td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="deleteUser('${u.id}')">Remove</button>
      </td>
    </tr>
  `).join('');
    }

    function deleteUser(id) {
      if (id === store.currentUser.id) { showToast('❌ Cannot delete your own account', 'error'); return; }
      if (!confirm('Remove this staff member?')) return;
      store.users = store.users.filter(u => u.id !== id);
      renderUsers();
      apiFetch('/api/users/' + id, { method: 'DELETE' });
      showToast('🗑️ Staff member removed', 'error');
    }

    function showAddUser() {
      openModal('Add Staff Member', `
    <div class="form-row">
      <div class="form-group"><label for="nu_name">Full Name</label><input id="nu_name" placeholder="Full name"></div>
      <div class="form-group"><label for="nu_email">Email</label><input id="nu_email" placeholder="Email address"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label for="nu_role">Role</label>
        <select id="nu_role"><option value="doctor">Doctor</option><option value="nurse">Nurse</option><option value="admin">Admin</option></select>
      </div>
      <div class="form-group"><label for="nu_dept">Department</label><input id="nu_dept" placeholder="Department"></div>
    </div>
    <div class="form-group">
      <label for="nu_pwd">Password</label>
      <div style="position: relative;">
        <input type="password" id="nu_pwd" placeholder="Set password" style="padding-right: 48px; width: 100%; padding: 14px 16px; background: var(--input-bg); border: 1px solid var(--input-border); border-radius: 12px; color: var(--text); font-family: inherit; font-size: 14px; outline: none;">
        <button type="button" class="password-toggle-btn" onclick="togglePasswordVisibility('nu_pwd', this)" style="position: absolute; right: 16px; top: 50%; transform: translateY(-50%); background: none; border: none; color: var(--text2); cursor: pointer; font-size: 16px; padding: 4px; display: flex; align-items: center; justify-content: center; outline: none; transition: var(--transition);">👁️</button>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="addUser()">Add Staff</button>
    </div>
  `);
    }

    function addUser() {
      const name = document.getElementById('nu_name').value.trim();
      const email = document.getElementById('nu_email').value.trim();
      const role = document.getElementById('nu_role').value;
      const department = document.getElementById('nu_dept').value.trim();
      const password = document.getElementById('nu_pwd').value;

      if (!name || !email || !department || !password) {
        showToast('❌ All fields are required', 'error'); return;
      }
      if (store.users.find(u => u.email === email)) {
        showToast('❌ Email already exists', 'error'); return;
      }
      const user = {
        id: 'u' + Date.now(),
        name, email, role, department, password,
        createdAt: new Date().toISOString().split('T')[0]
      };
      store.users.push(user);
      closeModal(); renderUsers();
      apiFetch('/api/users', { method: 'POST', body: JSON.stringify(user) });
      showToast('✅ Staff member added', 'success');
    }

    // ── MODAL ──────────────────────────────────────────────────────────────────────
    function openModal(title, body) {
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalBody').innerHTML = body;
      const overlay = document.getElementById('modal');
      overlay.style.display = 'flex';
      setTimeout(() => overlay.classList.add('show'), 10);
    }

    function closeModal() {
      const overlay = document.getElementById('modal');
      overlay.classList.remove('show');
      setTimeout(() => overlay.style.display = 'none', 200);
    }

    // ── TOAST ──────────────────────────────────────────────────────────────────────
    function showToast(msg, type = 'info') {
      msg = msg.replace(/^(?:✅|❌|⚠️|ℹ️|🔑)\s*/, '');
      const colors = { success: 'var(--green)', error: 'var(--red)', warning: 'var(--yellow)', info: 'var(--blue)' };
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.innerHTML = `<span style="color:${colors[type]};font-size:16px;">${type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️'}</span><span>${msg}</span>`;
      document.getElementById('toast-container').appendChild(toast);
      setTimeout(() => toast.remove(), 3500);
    }

    let isPointerDown = false;
    let currentTargetInputId = null;
    let currentTargetBtn = null;

    function showPassword(inputId, btn) {
      const input = document.getElementById(inputId);
      if (input) {
        input.type = 'text';
        btn.textContent = '🙈';
      }
    }

    function hidePassword(inputId, btn) {
      const input = document.getElementById(inputId);
      if (input) {
        input.type = 'password';
        btn.textContent = '👁️';
      }
    }

    function togglePasswordVisibility(inputId, btn) {
      if (isPointerDown) {
        return;
      }
      const input = document.getElementById(inputId);
      if (input) {
        if (input.type === 'password') {
          showPassword(inputId, btn);
        } else {
          hidePassword(inputId, btn);
        }
      }
    }

    // Pointer-down and Pointer-up event delegation for password toggles
    document.addEventListener('mousedown', (e) => {
      const btn = e.target.closest('.password-toggle-btn');
      if (btn) {
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr && onclickAttr.includes('togglePasswordVisibility')) {
          const match = onclickAttr.match(/'([^']+)'/);
          if (match && match[1]) {
            isPointerDown = true;
            currentTargetInputId = match[1];
            currentTargetBtn = btn;
            showPassword(currentTargetInputId, btn);
          }
        }
      }
    });

    const clearPointerDownState = () => {
      if (isPointerDown && currentTargetInputId && currentTargetBtn) {
        hidePassword(currentTargetInputId, currentTargetBtn);
        setTimeout(() => {
          isPointerDown = false;
          currentTargetInputId = null;
          currentTargetBtn = null;
        }, 50);
      }
    };

    document.addEventListener('mouseup', clearPointerDownState);
    document.addEventListener('mouseleave', clearPointerDownState);

    document.addEventListener('touchstart', (e) => {
      const btn = e.target.closest('.password-toggle-btn');
      if (btn) {
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr && onclickAttr.includes('togglePasswordVisibility')) {
          const match = onclickAttr.match(/'([^']+)'/);
          if (match && match[1]) {
            isPointerDown = true;
            currentTargetInputId = match[1];
            currentTargetBtn = btn;
            showPassword(currentTargetInputId, btn);
            e.preventDefault();
          }
        }
      }
    }, { passive: false });

    document.addEventListener('touchend', clearPointerDownState);
    document.addEventListener('touchcancel', clearPointerDownState);


    // ── PARTICLE MOTION PICTURES BACKGROUND ──────────────────────────────────────────
    (function () {
      const canvas = document.createElement('canvas');
      canvas.id = 'login-particles-canvas';
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.zIndex = '1';
      canvas.style.pointerEvents = 'none';
      // Insert canvas as first element of loginPage
      const loginPage = document.getElementById('loginPage');
      if (loginPage) {
        loginPage.prepend(canvas);
      }

      const ctx = canvas.getContext('2d');
      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;

      const particles = [];
      const particleCount = 45;
      const connectionDistance = 120;

      class Particle {
        constructor() {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.vx = (Math.random() - 0.5) * 0.4;
          this.vy = (Math.random() - 0.5) * 0.4;
          this.radius = Math.random() * 2 + 1.5;
        }
        update() {
          this.x += this.vx;
          this.y += this.vy;
          if (this.x < 0 || this.x > width) this.vx *= -1;
          if (this.y < 0 || this.y > height) this.vy *= -1;
        }
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 240, 181, 0.45)';
          ctx.fill();
        }
      }

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }

      function animate() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < connectionDistance) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              const alpha = (1 - dist / connectionDistance) * 0.2;
              ctx.strokeStyle = `rgba(0, 153, 255, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
        requestAnimationFrame(animate);
      }

      window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      });

      animate();
    })();
  