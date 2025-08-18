const express = require('express');
const router = express.Router();
const auth = require('./../middleware/auth');
const Patient = require('./../models/Patient');

router.post('/', auth, async (req, res) => {
  try {
    const { name, age, gender, contact } = req.body;

    const patient = new Patient({
      name,
      age,
      gender,
      contact,
      createdBy: req.user.id,
    });

    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const patients = await Patient.find({ createdBy: req.user.id });
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific patient
router.get('/:id', auth, async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found.' });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', auth, async (req, res) => {
  try {
    const { name, age, gender, contact } = req.body;

    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found.' });
    }

    patient.name = name || patient.name;
    patient.age = age || patient.age;
    patient.gender = gender || patient.gender;
    patient.contact = contact || patient.contact;

    await patient.save();
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found.' });
    }

    await patient.remove();
    res.status(200).json({ message: 'Patient deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;