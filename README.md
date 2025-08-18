# Patient Management System (PMS)

A web-based backend application for managing patient records, appointments, and medical histories. The system provides secure role-based access for admins, doctors, and patients.

---

## Features

- **User Authentication**
  - Register and login with email, password, and role (admin, doctor, patient)
  - JWT-based authentication for secure access
  - Passwords hashed with bcrypt

- **Patient Management**
  - Add, update, delete, and view patient records

- **Appointment Scheduling**
  - Schedule, update, and cancel appointments

- **Medical History Management**
  - Add, update, and view medical histories for patients

- **Role-Based Access Control**
  - **Admin:** manage all records
  - **Doctor:** view and update patient records, manage appointments
  - **Patient:** view their own records and appointments

---

## Technologies Used

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Tokens)  
- **Password Security:** bcryptjs  
- **API Testing:** Postman  

---

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pms-backend.git
   cd pms-backend
Install dependencies:

npm install

Create a .env file and configure the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run the server:

npm start
API Endpoints
Authentication

POST /api/auth/register – Register new user

POST /api/auth/login – Login and receive JWT

Patients

GET /api/patients – View all patients (admin/doctor only)

POST /api/patients – Add new patient

PUT /api/patients/:id – Update patient

DELETE /api/patients/:id – Delete patient

Appointments

POST /api/appointments – Schedule appointment

PUT /api/appointments/:id – Update appointment

DELETE /api/appointments/:id – Cancel appointment

Medical History

POST /api/medical-history – Add record

PUT /api/medical-history/:id – Update record

GET /api/medical-history/:patientId – View patient history

Testing

Use Postman to test API endpoints. Import the collection or create your own requests with authentication tokens.

Future Enhancements

Integration with frontend (React/Next.js)
Notifications for appointments
Role-based dashboards
