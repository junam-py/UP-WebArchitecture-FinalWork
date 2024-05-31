const express = require('express');
const medicsCtrl = require('../controllers/medic.controller');

const router = express.Router();

const basePath = '/api/medics';

router.post(basePath + '/', medicsCtrl.createMedic);

router.put(basePath + '/:id', medicsCtrl.updateMedic);

router.get(basePath + '/:id', medicsCtrl.getMedicById);

router.delete(basePath + '/:id', medicsCtrl.deleteMedic);

module.exports = router;