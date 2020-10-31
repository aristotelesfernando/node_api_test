const carrodb = require('./model/CarroDB');

async function teste() {
    let carros = await carrodb.getCarros();
    console.log(JSON.stringify(carros));
}

teste();