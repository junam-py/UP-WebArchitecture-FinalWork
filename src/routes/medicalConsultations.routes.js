const express = require('express');
const medicalConsultationsCtrl = require('../controllers/medicalConsultation.controller');

const router = express.Router();

const basePath = '/api/medicalConsultations';

router.post(basePath + '/', medicalConsultationsCtrl.createConsultation);

router.get(basePath + '/:id', medicalConsultationsCtrl.getConsultationById);

router.delete(basePath + '/:id', medicalConsultationsCtrl.deleteConsultation);

module.exports = router;