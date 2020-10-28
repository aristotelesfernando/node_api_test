const CarroDB = require('./CarroDB');

var callback = function(carros) {
    for(let i = 0; i < carros.length; i++) {
        console.log(carros[i].id+': '+carros[i].nome+'('+carros[i].tipo+')');
    };
};

CarroDB.getCarros(callback);