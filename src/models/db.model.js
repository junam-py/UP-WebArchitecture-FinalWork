const mongoose = require('mongoose');

class Database {
  #uri;

  constructor(uri) {
    this.#uri = uri;
  }

  get uri() {
    return this.#uri;
  }

  set uri(newUri) {
    this.#uri = newUri;
  }

  connect() {
    mongoose.set('strictQuery', true);
    try {
      mongoose
        .connect(this.#uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then(function () {
          console.log('MongoDB connection done');
        })
        .catch(function (err) {
          console.log('MongoDB database connection error', err);
        });
    } catch (e) {
      console.log(e);
    }

    const db = mongoose.connection;

    db.once('open', () => {
      (async () => {
        const data = await mongoose.connection.db.admin().command({
          listDatabases: 1,
        });
        console.log(data);
      })();
      console.log('Connected to MongoDB');
    });

    db.on('error', (err) => {
      console.log('Database connection error', err);
    });
  }
}
module.exports = Database;