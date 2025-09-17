# 🏥 Patient Management System (Backend)

[![Node.js](https://img.shields.io/badge/Node.js-14%2B-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-blue.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4%2B-green.svg)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-orange.svg)](https://jwt.io/)

A robust web-based backend application for managing patient records, appointments, and medical histories. The system provides secure role-based access control for admins, doctors, and patients with JWT authentication.

---

## ✨ Features

### 🔐 User Authentication
- User registration and login with email, password, and role-based access
- JWT-based authentication for secure API access
- Password encryption using bcryptjs
- Role-based authorization (Admin, Doctor, Patient)

### 👥 Patient Management
- Create, read, update, and delete patient records
- Secure patient data handling
- User-specific patient access control

### 📅 Appointment Scheduling
- Schedule new appointments
- Update existing appointments
- Cancel appointments
- View appointment history

### 📋 Medical History Management
- Add medical records for patients
- Update existing medical histories
- View comprehensive patient medical history
- Secure medical data access

### 🛡️ Role-Based Access Control
- **Admin:** Full system access - manage all records and users
- **Doctor:** Patient management - view and update patient records, manage appointments
- **Patient:** Personal access - view own records and appointments only

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **Node.js** | Server-side JavaScript runtime |
| **Express.js** | Web application framework |
| **MongoDB** | NoSQL database for data storage |
| **Mongoose** | MongoDB object modeling |
| **JWT** | JSON Web Tokens for authentication |
| **bcryptjs** | Password hashing and encryption |
| **Body-Parser** | HTTP request body parsing |

---

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)
- **MongoDB** (local installation or MongoDB Atlas)

---

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/alira-xk/Patient-Management--Backend.git
cd Patient-Management--Backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create a `.env` file in the root directory (optional - currently using hardcoded values):
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/patient_management
JWT_SECRET=your_jwt_secret_key
```

### 4. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# For local MongoDB installation
mongod
```

### 5. Run the Application
```bash
npm start
```

The server will start running on `http://localhost:3000`

---

## 📁 Project Structure

```
Patient-Management--Backend/
├── middleware/
│   └── auth.js              # JWT authentication middleware
├── models/
│   ├── User.js              # User schema
│   ├── Patient.js           # Patient schema
│   ├── Appointment.js       # Appointment schema
│   └── MedicalHistory.js    # Medical history schema
├── routes/
│   ├── authRoutes.js        # Authentication endpoints
│   ├── patientRoutes.js     # Patient management endpoints
│   ├── appointmentRoutes.js # Appointment management endpoints
│   └── medicalHistoryRoutes.js # Medical history endpoints
├── db.js                    # Database connection
├── index.js                 # Application entry point
└── package.json             # Project dependencies
```

---

## 🔌 API Endpoints

### 🔐 Authentication
| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| `POST` | `/auth/register` | Register a new user | Public |
| `POST` | `/auth/login` | User login | Public |

### 👥 Patient Management
| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| `GET` | `/patients` | Get all patients | Authenticated |
| `GET` | `/patients/:id` | Get specific patient | Authenticated |
| `POST` | `/patients` | Add new patient | Authenticated |
| `PUT` | `/patients/:id` | Update patient | Authenticated |
| `DELETE` | `/patients/:id` | Delete patient | Authenticated |

### 📅 Appointments
| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| `GET` | `/appointments` | Get all appointments | Authenticated |
| `GET` | `/appointments/:id` | Get specific appointment | Authenticated |
| `POST` | `/appointments` | Schedule appointment | Authenticated |
| `PUT` | `/appointments/:id` | Update appointment | Authenticated |
| `DELETE` | `/appointments/:id` | Cancel appointment | Authenticated |

### 📋 Medical History
| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| `POST` | `/medical-history` | Add medical record | Authenticated |
| `GET` | `/medical-history/:patientId` | Get patient history | Authenticated |
| `PUT` | `/medical-history/:id` | Update medical record | Authenticated |
| `DELETE` | `/medical-history/:id` | Delete medical record | Authenticated |

---

## 🔑 Authentication

All protected endpoints require a JWT token in the Authorization header:

```http
Authorization: Bearer <your_jwt_token>
```

### Example Request
```bash
curl -X GET http://localhost:3000/patients \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

---

## 🧪 Testing

### Using Postman
1. Import the API collection or create manual requests
2. Register a new user via `/auth/register`
3. Login via `/auth/login` to get JWT token
4. Use the token in Authorization header for protected endpoints

### Example User Registration
```json
POST /auth/register
{
  "name": "Dr. John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword123",
  "role": "doctor"
}
```

### Example Login
```json
POST /auth/login
{
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🚀 Future Enhancements

- [ ] **Frontend Integration** - React/Next.js dashboard
- [ ] **Real-time Notifications** - Appointment reminders and updates
- [ ] **Role-based Dashboards** - Customized interfaces for different user types
- [ ] **Advanced Search & Filtering** - Enhanced patient and appointment search
- [ ] **File Upload Support** - Medical documents and reports
- [ ] **Audit Logging** - Track all system activities
- [ ] **API Rate Limiting** - Prevent API abuse
- [ ] **Email Notifications** - Automated appointment confirmations
- [ ] **Backup & Recovery** - Automated database backups
- [ ] **Docker Support** - Containerized deployment

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

- **[alira-xk](https://github.com/alira-xk)** - Initial work

---

## 🙏 Acknowledgments

- Built with Node.js and Express.js
- MongoDB for robust data storage
- JWT for secure authentication
- bcryptjs for password security
