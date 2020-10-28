const CarroDB = require('./CarroDB');

var carro = { nome:'Chevette SS turbo 2.5', tipo: 'Popular Esportivo'};

CarroDB.save(carro, function(carro) {
    console.log(`Carro ${carro.id}:${carro.nome}, do tipo ${carro.tipo}`);
})
