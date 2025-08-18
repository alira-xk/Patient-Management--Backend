const express = require('express');
const router = express.Router();
const auth = require('./../middleware/auth');
const Appointment = require('./../models/Appointment');

router.post('/', auth, async (req, res) => {
  try {
    const { date, time, patient, doctor } = req.body;

    const appointment = new Appointment({
      date,
      time,
      patient,
      doctor,
      createdBy: req.user.id,
    });

    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const appointments = await Appointment.find({ createdBy: req.user.id });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', auth, async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found.' });
    }
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', auth, async (req, res) => {
  try {
    const { date, time, patient, doctor } = req.body;

    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found.' });
    }

    appointment.date = date || appointment.date;
    appointment.time = time || appointment.time;
    appointment.patient = patient || appointment.patient;
    appointment.doctor = doctor || appointment.doctor;

    await appointment.save();
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found.' });
    }

    await appointment.remove();
    res.status(200).json({ message: 'Appointment deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;