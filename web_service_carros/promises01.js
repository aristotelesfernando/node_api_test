const carrodb = require('./model/CarroDB');

function teste() {
    carrodb.getCarros(function(error, carros) {
        console.log(JSON.stringify(carros));
    });
}

teste()