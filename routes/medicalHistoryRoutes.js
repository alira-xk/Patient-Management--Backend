const express = require('express');
const router = express.Router();
const auth = require('./../middleware/auth');
const MedicalHistory = require('./../models/MedicalHistory');

router.post('/', auth, async (req, res) => {
  try {
    const { patient, diagnosis, treatment, medication } = req.body;

    const medicalHistory = new MedicalHistory({
      patient,
      diagnosis,
      treatment,
      medication,
      createdBy: req.user.id,
    });

    await medicalHistory.save();
    res.status(201).json(medicalHistory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get('/:patientId', auth, async (req, res) => {
  try {
    const medicalHistory = await MedicalHistory.find({ patient: req.params.patientId });
    res.status(200).json(medicalHistory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', auth, async (req, res) => {
  try {
    const { diagnosis, treatment, medication } = req.body;

    const medicalHistory = await MedicalHistory.findById(req.params.id);
    if (!medicalHistory) {
      return res.status(404).json({ error: 'Medical history not found.' });
    }

    medicalHistory.diagnosis = diagnosis || medicalHistory.diagnosis;
    medicalHistory.treatment = treatment || medicalHistory.treatment;
    medicalHistory.medication = medication || medicalHistory.medication;

    await medicalHistory.save();
    res.status(200).json(medicalHistory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const medicalHistory = await MedicalHistory.findById(req.params.id);
    if (!medicalHistory) {
      return res.status(404).json({ error: 'Medical history not found.' });
    }

    await medicalHistory.remove();
    res.status(200).json({ message: 'Medical history deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;