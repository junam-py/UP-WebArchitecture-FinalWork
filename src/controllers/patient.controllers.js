const { join } = require('path');
const Patient = require('../modelsDB/patient.model');
const { formatResponse } = require('../utils/utils');
require('dotenv').config({ path: join(__dirname, '..', '/configs/.env') });

const createPatient = async (req, res, next) => {
    const body = req.body;
    const patientId = body.patientId;
    const name = body.name;
    const birthDate = body.birthDate;
    const status = body.status;
    if (Object.keys(req.body).length === 0) {
      res.status(400).send(formatResponse(null, 'No parameters found in body'));
      return;
    }
    if (!patientId) {
      res.status(400).send(formatResponse(null, 'patientId is missing'));
      return;
    }
    if (!name) {
      res.status(400).send(formatResponse(null, 'name is missing'));
      return;
    }
    if (!birthDate) {
      res.status(400).send(formatResponse(null, 'birthDate is missing'));
      return;
    }
    if (!status) {
      res.status(400).send(formatResponse(null, 'status is missing'));
      return;
    }
    const newPatient = new Patient({
        patientId: patientId,
        name: name,
        birthDate: birthDate,
        status: status
    });
    newPatient
      .save()
      .then((result) => {
        res.status(200).send(formatResponse(result, 'Patient created'));
      })
      .catch((err) => {
        next(err);
      });
};

const updatePatient = async (req, res, next) => {
    const body = req.body;
    const patientId = body.patientId;
    const name = body.name;
    const birthDate = body.birthDate;
    const status = body.status;
    if (Object.keys(req.body).length === 0) {
      res.status(400).send(formatResponse(null, 'No parameters found in body'));
      return;
    }
    if (!patientId) {
      res.status(400).send(formatResponse(null, 'patientId is missing'));
      return;
    }
    if (!name) {
      res.status(400).send(formatResponse(null, 'name is missing'));
      return;
    }
    if (!birthDate) {
      res.status(400).send(formatResponse(null, 'birthDate is missing'));
      return;
    }
    if (!status) {
        res.status(400).send(formatResponse(null, 'status is missing'));
        return;
      }
    const updatedPatient = {
        patientId: patientId,
        name: name,
        birthDate: birthDate,
        status: status
    };

    const filter = { patientId: req.params.id };
  
    Patient.findOneAndUpdate(filter, updatedPatient)
      .then((result) => {
        if (result) {
          res.status(200).send(formatResponse(null, 'Patient updated'));
        } else {
          res.status(404).send(formatResponse(null, 'Patient not found'));
        }
      })
      .catch((err) => {
        next(err);
      });
  };

const getPatientsByStatus = async (req, res, next) => {
    const filters = { status: req.params.status };
    Patient.find(filters)
        .then((patients) => {
            if (patients && patients.lenght > 0) {
                res.status(200).send(formatResponse(patients, null));
            } else {
                res.status(404).send(formatResponse(null, 'Patients not found'));
            }
        })
        .catch((err) => {
            next(err);
        });
};
  
const getPatientById = async (req, res, next) => {
    const filters = { patientId: req.params.patientId };
    Patient.find(filters)
        .then((patients) => {
            if (patients && patients.lenght > 0) {
                res.status(200).send(formatResponse(patients, null));
            } else {
                res.status(404).send(formatResponse(null, 'Patient not found'));
            }
        })
        .catch((err) => {
            next(err);
        });
};

const deletePatient = async (req, res, next) => {
    const filter = { patientId: req.params.id };
    Article.findOneAndDelete(filter)
      .then((result) => {
        if (result) {
          res.status(200).send(formatResponse(null, 'Patient deleted'));
        } else {
          res.status(404).send(formatResponse(null, 'Patient not found'));
        }
      })
      .catch((err) => {
        next(err);
      });
  };
  
module.exports = {
    getPatientById,
    getPatientsByStatus,
    createPatient,
    updatePatient,
    deletePatient
};