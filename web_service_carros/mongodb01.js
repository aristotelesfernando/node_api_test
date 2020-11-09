let MongoClient = require('mongodb').MongoClient;

let mongoServer = 'mongodb://mongodb:27017/livro';

MongoClient.connect(mongoServer, function(err, client) {

    // if (err) return callback(err);

    // //let db = client.db('livro');

    // let carros = db.collection('carros');
    // carros.find({}).toArray(function(err, results) {
    //     for(let carro in results) {
    //         console.log(carro);
    //     }
    // });        

    client.collection('carros', function (err, collection) {
    
        collection.find().toArray(function(err, items) {
            if(err) throw err;    
            console.log(items);            
        });
        
    }); 

});