const { join } = require('path');
const Consultation = require('../modelsDB/medicalConsultation.model');
const { formatResponse } = require('../utils/utils');
require('dotenv').config({ path: join(__dirname, '..', '/configs/.env') });

const createConsultation = async (req, res, next) => {
    const body = req.body;
    const consultationId = body.consultationId;
    const patientId = body.patientId;
    const medicId = body.medicId;
    const status = body.status;
    const date = body.date;
    const completed = body.completed
    if (Object.keys(req.body).length === 0) {
      res.status(400).send(formatResponse(null, 'No parameters found in body'));
      return;
    }
    if (!consultationId) {
      res.status(400).send(formatResponse(null, 'consultationId is missing'));
      return;
    }
    if (!patientId) {
      res.status(400).send(formatResponse(null, 'patientId is missing'));
      return;
    }
    if (!medicId) {
      res.status(400).send(formatResponse(null, 'medicId is missing'));
      return;
    }
    if (!completed) {
      res.status(400).send(formatResponse(null, 'completed is missing'));
      return;
    }
    const newConsultation = new Consultation({
        consultationId: consultationId,
        patientId: patientId,
        medicId: medicId,
        status: status,
        date: date,
        completed: completed
    });
    newConsultation
      .save()
      .then((result) => {
        res.status(200).send(formatResponse(result, 'Consultation created'));
      })
      .catch((err) => {
        next(err);
      });
};

  
const getConsultationById = async (req, res, next) => {
    const filters = { consultationId: req.params.id };
    Consultation.find(filters)
        .then((consultations) => {
            if (consultations && consultations.length > 0) {
                res.status(200).send(formatResponse(consultations, null));
            } else {
                res.status(404).send(formatResponse(null, 'Consultation not found'));
            }
        })
        .catch((err) => {
            next(err);
        });
};

const deleteConsultation = async (req, res, next) => {
    const filter = { consultationId: req.params.id };
    Consultation.findOneAndDelete(filter)
      .then((result) => {
        if (result) {
          res.status(200).send(formatResponse(null, 'Consultation deleted'));
        } else {
          res.status(404).send(formatResponse(null, 'Consultation not found'));
        }
      })
      .catch((err) => {
        next(err);
      });
  };
  
module.exports = {
    createConsultation,
    getConsultationById,
    deleteConsultation
};