const CarroDB = require('./CarroDB');


var callback = function(carro) {
    console.log(carro.id+': '+carro.nome+'('+carro.tipo+')');
};

CarroDB.getCarrosById(11, callback);