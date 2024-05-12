const express = require('express');

const app = express();
app.use(express.json());

let doctors = [
    {
        id: 1,
        name: 'Dr. Smith'
    },
    {
        id: 2,
        name: 'Dr. Watson'
    },
    {
        id: 3,
        name: 'Dr. John'
    }
];

app.listen(3000, function() {
    console.log('Executing server');
});

app.get('/', function(req, res) {
    res.send('Server alive');
});

app.get('/api/v1/doctors/', function(req, res) {
    res.json(doctors);
});

app.get('/api/v1/doctors/:id/', function(req, res) {
    const {id} = req.params;

    const doctor = doctors.find((doctor) => doctor.id == id);

    res.json(doctor);
});

app.post('/api/v1/doctors/', function(req, res) {
    const newDoctor = req.body;

    newDoctor.id = doctors.length + 1;

    doctors.push(newDoctor);

    res.status(201);
    res.json(newDoctor)
});

app.delete('/api/v1/doctors/:id/', function(req, res) {
    const {id} = req.params;

    doctors = doctors.filter(d => d.id != id);

    res.status(204);
    res.json(doctors);
});