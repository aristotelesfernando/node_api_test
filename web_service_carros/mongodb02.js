let mongodb = require('mongodb');

const usuario = 'fernando';
const senha = '123456@';

const url = 'mongodb://localhost:27017/livro';

mongodb
    .MongoClient
    .connect(url)
    .then((db) => {
        return db.authenticate(usuario, senha)
    })
    .then(() => {
        return db.db('livro')
            .collection('carros')
    })