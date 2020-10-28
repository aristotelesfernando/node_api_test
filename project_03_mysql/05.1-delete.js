const CarroDB = require('./CarroDB');

var carro = {id:32};

CarroDB.deleteById(carro, function(carro) {
    console.log(`Carro ID ${carro.id} foi deletado com sucesso`);
});

