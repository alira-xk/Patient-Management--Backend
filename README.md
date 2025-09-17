Patient Management System (PMS)

A secure, role-based backend application for managing patient records, appointments, and medical histories. Designed for admins, doctors, and patients, the system ensures safe handling of sensitive medical data.

🚀 Features
🔑 User Authentication

Register and login with email, password, and role (admin, doctor, patient)

JWT-based authentication for secure sessions

Passwords encrypted with bcrypt

🧑‍⚕️ Patient Management

Create, update, delete, and view patient records

📅 Appointment Scheduling

Schedule, update, and cancel appointments

📋 Medical History

Add, update, and view patient medical histories

🛡️ Role-Based Access

Admin: Full access to all records

Doctor: Manage patients and appointments

Patient: Access personal records and appointments

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT

Password Security: bcryptjs

API Testing: Postman

⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/your-username/pms-backend.git
cd pms-backend


Install dependencies:

npm install


Create a .env file in the root directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Start the server:

npm start

📡 API Endpoints
Authentication

POST /api/auth/register → Register new user

POST /api/auth/login → Login and receive JWT

Patients

GET /api/patients → View all patients (admin/doctor only)

POST /api/patients → Add new patient

PUT /api/patients/:id → Update patient

DELETE /api/patients/:id → Delete patient

Appointments

POST /api/appointments → Schedule appointment

PUT /api/appointments/:id → Update appointment

DELETE /api/appointments/:id → Cancel appointment

Medical History

POST /api/medical-history → Add medical history record

PUT /api/medical-history/:id → Update record

GET /api/medical-history/:patientId → View patient history

🧪 Testing

Use Postman to test endpoints

Import collection or manually create requests

Attach authentication token in headers for protected routes

🔮 Future Enhancements

Frontend integration (React/Next.js)

Notifications for upcoming appointments

Role-based dashboards for better UX

Audit logs for record changes
