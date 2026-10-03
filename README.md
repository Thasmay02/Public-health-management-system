# 🏥 Public Health Management System (PHMS)

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-Express-success)
![Frontend](https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JS-orange)

A comprehensive, full-stack **Public Health Management System** designed to streamline healthcare facility operations. It provides role-based access for Administrators, Doctors, Nurses, and Patients, enabling seamless management of patient records, appointments, inventory, and disease surveillance.

## ✨ Features

- **Role-Based Access Control (RBAC):** Secure login portals tailored for Admins, Doctors, Nurses, and Patients.
- **Patient Management:** Complete CRUD operations for patient registration and profile management.
- **Appointment Scheduling:** Efficiently book, update, and track patient appointments.
- **Medical Records:** Centralized access to patient health history and medical records.
- **Disease Surveillance:** Track and manage localized disease outbreaks and trends.
- **Inventory Management:** Monitor and manage medical supplies and hospital inventory.
- **Interactive Dashboards:** Real-time analytics and statistics aggregated on the main dashboard.
- **Secure Architecture:** Built with JWT authentication and bcrypt password hashing.

## 🛠️ Tech Stack

### Frontend
- **Languages:** HTML5, Vanilla CSS, Vanilla JavaScript
- **Typography:** Google Fonts (DM Sans, Syne)
- **Architecture:** Standalone HTML portals (`admin-portal.html`, `patient-portal.html`, etc.)

### Backend
- **Environment:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose) / Local JSON fallback (`db.json`)
- **Security:** `bcryptjs` (password hashing), `jsonwebtoken` (auth), `helmet` (HTTP headers), `cors`

## 🚀 Getting Started

Follow these instructions to set up the project locally for development and testing.

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- MongoDB (if configuring the full database, otherwise the app falls back to local JSON storage).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Thasmay02/Public-health-management-system.git
   cd Public-health-management-system/files
   ```

2. **Install backend dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the `files` directory (if not already present) and configure your secrets (e.g., JWT secret, database URI).

4. **Start the development server:**
   ```bash
   npm start
   ```
   *The API will start running on `http://localhost:3001`.*

5. **Run the Client:**
   Since the frontend uses vanilla web technologies, simply open `phms.html` or any of the portal files directly in your web browser.

## 🔐 Demo Credentials

Use the following credentials to explore different roles within the system:

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@phms.gov` | `admin123` |
| **Doctor** | `doctor@phms.gov` | `doctor123` |
| **Nurse** | `nurse@phms.gov` | `nurse123` |

## 📡 API Reference

The backend exposes the following RESTful endpoints:

### Authentication
- `POST /api/auth/login` - Authenticate user and return JWT
- `GET /api/auth/me` - Get current authenticated user

### Core Endpoints
- **Dashboard:** `GET /api/dashboard/stats`
- **Patients:** `GET`, `POST`, `PUT`, `DELETE` on `/api/patients`
- **Appointments:** `GET`, `POST`, `PUT`, `DELETE` on `/api/appointments`
- **Medical Records:** `GET`, `POST` on `/api/records`
- **Disease Surveillance:** `GET`, `POST`, `PUT` on `/api/diseases`
- **Inventory:** `GET`, `POST`, `PUT` on `/api/inventory`
- **Users (Admin Only):** `GET`, `POST` on `/api/users`

## 📄 License

This project is licensed under the ISC License.
