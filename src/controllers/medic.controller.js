const { join } = require('path');
const Medic = require('../modelsDB/medic.model');
const { formatResponse } = require('../utils/utils');
require('dotenv').config({ path: join(__dirname, '..', '/configs/.env') });

const createMedic = async (req, res, next) => {
    const body = req.body;
    const medicId = body.medicId;
    const username = body.username;
    const password = body.password;
    const name = body.name;
    if (Object.keys(req.body).length === 0) {
      res.status(400).send(formatResponse(null, 'No parameters found in body'));
      return;
    }
    if (!medicId) {
      res.status(400).send(formatResponse(null, 'medicId is missing'));
      return;
    }
    if (!username) {
      res.status(400).send(formatResponse(null, 'username is missing'));
      return;
    }
    if (!password) {
      res.status(400).send(formatResponse(null, 'password is missing'));
      return;
    }
    if (!name) {
      res.status(400).send(formatResponse(null, 'name is missing'));
      return;
    }
    const newMedic = new Medic({
        medicId: medicId,
        username: username,
        password: password,
        name: name
    });
    newMedic
      .save()
      .then((result) => {
        res.status(200).send(formatResponse(result, 'Medic created'));
      })
      .catch((err) => {
        next(err);
      });
};

const getMedicById = async (req, res, next) => {
    const filters = { medicId: req.params.id };
    Medic.find(filters)
        .then((medics) => {
            if (medics && medics.length > 0) {
                res.status(200).send(formatResponse(medics, null));
            } else {
                res.status(404).send(formatResponse(null, 'Medic not found'));
            }
        })
        .catch((err) => {
            next(err);
        });
};

const updateMedic = async (req, res, next) => {
    const body = req.body;
    const medicId = body.medicId;
    const username = body.username;
    const password = body.password;
    const name = body.name;
    if (Object.keys(req.body).length === 0) {
      res.status(400).send(formatResponse(null, 'No parameters found in body'));
      return;
    }
    if (!medicId) {
      res.status(400).send(formatResponse(null, 'medicId is missing'));
      return;
    }
    if (!username) {
      res.status(400).send(formatResponse(null, 'username is missing'));
      return;
    }
    if (!password) {
      res.status(400).send(formatResponse(null, 'password is missing'));
      return;
    }
    if (!name) {
        res.status(400).send(formatResponse(null, 'name is missing'));
        return;
    }
    const updatedMedic = {
        medicId: medicId,
        username: username,
        password: password,
        name: name
    };

    const filter = { MedicId: req.params.id };
  
    Medic.findOneAndUpdate(filter, updatedMedic)
      .then((result) => {
        if (result) {
          res.status(200).send(formatResponse(null, 'Medic updated'));
        } else {
          res.status(404).send(formatResponse(null, 'Medic not found'));
        }
      })
      .catch((err) => {
        next(err);
      });
  };

  const deleteMedic = async (req, res, next) => {
    const filter = { medicId: req.params.id };
    Medic.findOneAndDelete(filter)
      .then((result) => {
        if (result) {
          res.status(200).send(formatResponse(null, 'Medic deleted'));
        } else {
          res.status(404).send(formatResponse(null, 'Medic not found'));
        }
      })
      .catch((err) => {
        next(err);
      });
  };

  module.exports = {
    createMedic,
    updateMedic,
    getMedicById,
    deleteMedic
};