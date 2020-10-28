const CarroDB = require('./CarroDB');

CarroDB.getCarrosById(11, function(carro) {
    console.log(carro.id+': '+carro.nome+'('+carro.tipo+')');
});