# Public Health Management System (PHMS)

## Files
- `phms.html` — Complete frontend (open in browser, fully functional standalone)
- `phms-backend-server.js` — Node.js/Express REST API backend
- `phms-backend-package.json` — Backend dependencies

## Running the Backend

```bash
# Install dependencies
npm install express cors helmet morgan bcryptjs jsonwebtoken uuid express-validator

# Start server
node phms-backend-server.js
# Runs on http://localhost:3001
```

## Demo Login Credentials
| Role   | Email               | Password   |
|--------|---------------------|------------|
| Admin  | admin@phms.gov      | admin123   |
| Doctor | doctor@phms.gov     | doctor123  |
| Nurse  | nurse@phms.gov      | nurse123   |

## Backend API Endpoints

### Auth
- POST /api/auth/login
- GET  /api/auth/me

### Dashboard
- GET  /api/dashboard/stats

### Patients
- GET    /api/patients
- GET    /api/patients/:id
- POST   /api/patients
- PUT    /api/patients/:id
- DELETE /api/patients/:id

### Appointments
- GET    /api/appointments
- POST   /api/appointments
- PUT    /api/appointments/:id
- DELETE /api/appointments/:id

### Medical Records
- GET  /api/records
- POST /api/records

### Disease Surveillance
- GET  /api/diseases
- POST /api/diseases
- PUT  /api/diseases/:id

### Inventory
- GET  /api/inventory
- POST /api/inventory
- PUT  /api/inventory/:id

### Users (Admin only)
- GET  /api/users
- POST /api/users

## Tech Stack
- **Frontend**: Vanilla HTML/CSS/JS, Google Fonts (DM Sans + Syne)
- **Backend**: Node.js, Express.js, JWT Auth, bcrypt, in-memory store
- **Production upgrade**: Replace in-memory store with PostgreSQL or MongoDB
