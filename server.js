const args = require('minimist')(process.argv.slice(2));
const app = require('./src/modules/app.module');
const Database = require('./src/models/db.model');
require('dotenv').config( {path: __dirname + '/configs/.env'} );

const uri = process.env.MONGODB_URI;
const db = new Database(uri);
db.connect(uri);

let hostname = process.env.HOST;
if (args.hostname !== undefined) {
    hostname = args.hostname;
}
else {
    console.log(`No hostname specified, using default hostname "${hostname}"`);
}

let port = process.env.PORT;
if(args.port !== undefined) {
    port = argv.port;
} else {
    console.log(`No port specified, using default port "${port}"`);
}

app.listen(port, hostname, () => {
    console.log(`Server running in port "${port}"`);
    console.log(`Server access in http://${hostname}:${port}/`);
});

