const express = require('express');

const app = express();
app.use(express.json());

const doctors = [
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

app.get('/', function(request, response) {
    response.send('Server alive');
});

app.get('/api/v1/doctors', function(request, response) {

});