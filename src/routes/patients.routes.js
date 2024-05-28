const express = require('express');
const patientsCtrl = require('../controllers/patient.controller');

const router = express.Router();

const basePath = '/api/patients';

router.post(basePath + '/', patientsCtrl.createPatient);

router.put(basePath + '/:id', patientsCtrl.updatePatient);

router.get(basePath + '/:status', patientsCtrl.getPatientsByStatus);

router.get(basePath + '/:id', patientsCtrl.getPatientById);

router.delete(basePath + '/:id', patientsCtrl.deletePatient);

module.exports = router;