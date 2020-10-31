const carrodb = require('./model/CarroDB');

function teste() {
    let promisse = carrodb.getCarros();
    promisse.then(function(carros) {
        console.log(JSON.stringify(carros));
    });
}

teste();