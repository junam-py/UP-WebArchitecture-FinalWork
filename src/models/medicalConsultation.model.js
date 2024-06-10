const { Schema, model } = require('mongoose');

const medicalConsultationSchema = Schema({
    consultationId: {
        type: Number,
        required: true,
        unique: true,
        min: 1,
        dropDups: true
    },
    patientId: {
        type: Number,
        required: true
    },
    medicId: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false,
        default: Date.now
    },
    completed: {
        type: Boolean,
        required: true
    }
});

module.exports = model('medicalConsultation', medicalConsultationSchema);