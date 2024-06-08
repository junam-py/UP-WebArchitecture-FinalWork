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
          console.log('MongoDB Connection Done!!');
        })
        .catch(function (err) {
          console.log('MongoDB Database Connection Error', err);
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
      console.log('DB Connection errors', err);
    });
  }
}
module.exports = Database;