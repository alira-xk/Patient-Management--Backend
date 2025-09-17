# Patient Management System (Backend)

A secure, role-based Node.js/Express backend for managing patient records, appointments, and medical histories. Designed for admins, doctors, and patients, the system prioritizes data security and privacy.

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-47A248?logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-blue)
![bcrypt](https://img.shields.io/badge/Password-bcryptjs-orange)

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Role-Based Access](#role-based-access)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Run the Server](#run-the-server)
- [API Overview](#api-overview)
  - [Authentication](#authentication)
  - [Patients](#patients)
  - [Appointments](#appointments)
  - [Medical History](#medical-history)
  - [Auth Header](#auth-header)
- [Examples](#examples)
- [Security](#security)
- [Testing](#testing)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

---

## Features
- User authentication and authorization (JWT)
- Encrypted passwords with bcrypt
- Role-based access control (Admin, Doctor, Patient)
- Patient CRUD operations
- Appointment scheduling and management
- Medical history management
- Secure handling of sensitive medical data

## Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)
- Auth: JSON Web Tokens (JWT)
- Password Security: bcryptjs
- API Testing: Postman

## Role-Based Access
| Role    | Permissions                                                                 |
|---------|------------------------------------------------------------------------------|
| Admin   | Full access to users, patients, appointments, medical histories             |
| Doctor  | Manage patients assigned/accessible to them and their appointments/history  |
| Patient | Access their own profile, appointments, and medical history                 |

Note: Exact scope enforcement depends on route-level middleware in this repository.

---

## Getting Started

### Prerequisites
- Node.js v18+ (LTS recommended)
- npm v9+ (or pnpm/yarn)
- A MongoDB instance (local or Atlas)

### Installation
```bash
git clone https://github.com/alira-xk/Patient-Management--Backend.git
cd Patient-Management--Backend
npm install
```

### Environment Variables
Create a `.env` file in the project root:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d
```

- PORT: The port the API server listens on
- MONGO_URI: Connection string for MongoDB (e.g., from MongoDB Atlas)
- JWT_SECRET: Strong secret key for signing tokens
- JWT_EXPIRES_IN: Token lifetime (e.g., 1d, 7d)

### Run the Server
```bash
# Start (production mode)
npm start

# Development with hot reload (if nodemon is configured)
npm run dev
```
The server will start on http://localhost:5000 unless a different PORT is set.

---

## API Overview

Base URL: `/api`

### Authentication
- POST `/api/auth/register` — Register new user (admin/doctor/patient)
- POST `/api/auth/login` — Login and receive a JWT

### Patients
- GET `/api/patients` — View all patients (admin/doctor only)
- POST `/api/patients` — Add a new patient
- PUT `/api/patients/:id` — Update a patient
- DELETE `/api/patients/:id` — Delete a patient

### Appointments
- POST `/api/appointments` — Schedule an appointment
- PUT `/api/appointments/:id` — Update an appointment
- DELETE `/api/appointments/:id` — Cancel an appointment

### Medical History
- POST `/api/medical-history` — Add a medical history record
- PUT `/api/medical-history/:id` — Update a medical history record
- GET `/api/medical-history/:patientId` — View a patient’s medical history

### Auth Header
Protected routes require an Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

---

## Examples

### Register
Request:
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "Dr. Jane Doe",
  "email": "jane@example.com",
  "password": "StrongP@ssw0rd!",
  "role": "doctor"
}
```

Sample response:
```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "66f0c1b2e4...",
    "name": "Dr. Jane Doe",
    "email": "jane@example.com",
    "role": "doctor"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5..."
}
```

### Login
Request:
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "jane@example.com",
  "password": "StrongP@ssw0rd!"
}
```

Sample response:
```json
{
  "message": "Logged in",
  "user": {
    "_id": "66f0c1b2e4...",
    "name": "Dr. Jane Doe",
    "email": "jane@example.com",
    "role": "doctor"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5..."
}
```

### Create Patient
Request:
```http
POST /api/patients
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Smith",
  "dob": "1990-04-12",
  "gender": "male",
  "phone": "+1-202-555-0101",
  "address": "123 Main St, City",
  "notes": "Allergic to penicillin"
}
```

### Schedule Appointment
Request:
```http
POST /api/appointments
Authorization: Bearer <token>
Content-Type: application/json

{
  "patientId": "66f0c5fae4...",
  "doctorId": "66efb93ee4...",
  "date": "2025-10-01T10:00:00.000Z",
  "reason": "Annual check-up",
  "status": "scheduled"
}
```

### Add Medical History
Request:
```http
POST /api/medical-history
Authorization: Bearer <token>
Content-Type: application/json

{
  "patientId": "66f0c5fae4...",
  "diagnosis": "Hypertension",
  "medications": ["Lisinopril"],
  "notes": "Monitor blood pressure weekly"
}
```

Note: Request/response bodies are examples. Actual fields should match the implemented MongoDB models in this repository.

---

## Security
- Passwords hashed with bcryptjs before storage
- JWT-based stateless authentication
- Role-based access middleware to protect routes
- Recommended middleware: Helmet, CORS, rate limiting (ensure enabled in the codebase if handling public traffic)
- Never commit secrets; use environment variables

---

## Testing
Use Postman (or any API client):
1. Register or login to obtain a JWT.
2. For protected routes, add the header:
   ```
   Authorization: Bearer <your_jwt_token>
   ```
3. Exercise endpoints under the API Overview section.

Tip: Create a Postman collection with an environment variable named `token` and set `Authorization: Bearer {{token}}`.

---

## Future Enhancements
- Frontend integration (React/Next.js)
- Notifications for upcoming appointments
- Role-based dashboards for improved UX
- Audit logs for record changes

---

## Contributing
- Fork the repository
- Create a feature branch: `git checkout -b feat/your-feature`
- Commit changes: `git commit -m "feat: add your feature"`
- Push to your branch and open a Pull Request

Please follow conventional commits if possible.

---

## Acknowledgements
- Express.js, Mongoose, bcryptjs, jsonwebtoken
- MongoDB Atlas for easy database hosting

---
