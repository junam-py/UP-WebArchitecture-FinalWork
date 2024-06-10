const { Schema, model } = require('mongoose');

const medicSchema = Schema({
    medicId: {
        type: Number,
        required: true,
        unique: true,
        min: 1,
        dropDups: true        
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true        
    }
});

module.exports = model('medics', medicSchema);