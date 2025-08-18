const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

app.use(express.json()); 

const authRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const medicalHistoryRoutes = require('./routes/medicalHistoryRoutes');

app.use('/auth', authRoutes);
app.use('/patients', patientRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/medical-history', medicalHistoryRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});