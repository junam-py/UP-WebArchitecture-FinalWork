const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../configs/swagger.json');
const { formatResponse } = require('../utils/utils');

// Routes
const patientRoutes = require('../routes/patients.routes');
const medicRoutes = require('../routes/medics.routes');
const consultationRoutes = require('../routes/medicalConsultations.routes');

const handlerErrorMiddleware = require('../middlewares/handlerError.middleware');
const errorHandler = require('../middlewares/handlerError.middleware');

const app = express();

app.use(express.json());

// CORS config
app.use(
    cors({
        credentials: true,
        origin: true
    })
);

app.options('*', cors());

// BodyParser config
app.use(
    bodyParser.json({
      limit: '50mb',
    }),
);
app.use(
    bodyParser.urlencoded({
      limit: '50mb',
      extended: true,
    }),
);

// Register routes
app.use(patientRoutes);
app.use(medicRoutes);
app.use(consultationRoutes);
app.use(handlerErrorMiddleware);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', function (req, res) {
    res.redirect(301, '/api-docs');
});

app.get('*', (req, res) => {
    if (!res.headersSent) {
      return res.status(404).json(formatResponse(null, 'Not Found'));
    }
});

module.exports = app;