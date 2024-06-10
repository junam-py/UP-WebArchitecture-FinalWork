const { Schema, model } = require('mongoose');

const emergencyContactSchema = new Schema({
    relation: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }
})

const patientSchema = new Schema({
    patientId: {
        type: Number,
        required: true,
        unique: true,
        min: 1,
        dropDups: true
    },
    name: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    bloodType: {
        type: String,
        required: false
    },
    emergencyContact: {
        type: [emergencyContactSchema],
        required: false
    },
    lastPhysicalExaminationDate: {
        type: Date,
        required: false
    },
    diseases: {
        type: [String],
        required: false
    },
    medications: {
        type: [String],
        required: false
    },
    notes: {
        type: [String],
        required: false
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = model('patients', patientSchema);