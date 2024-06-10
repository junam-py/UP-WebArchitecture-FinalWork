const app = require('./src/modules/app.module');
const Database = require('./src/models/db.model');
require('dotenv').config( {path: __dirname + '/configs/.env'} );

const uri = process.env.MONGODB_URI;
const db = new Database(uri);
db.connect(uri);

let hostname = process.env.HOST;
let port = process.env.PORT;

app.listen(port, hostname, () => {
    console.log(`Server running in port "${port}"`);
    console.log(`Server access in http://${hostname}:${port}/`);
});

