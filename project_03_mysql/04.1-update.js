const CarroDB = require('./CarroDB');

var carro = {id: 32, nome: 'Chevette SS turbo 250S', tipo: 'Popular Super Esportivo' };

CarroDB.update(carro, function(carro) {
    console.log(`O carro de ID = ${carro.id}, nome ${carro.nome} e tipo ${carro.tipo} foi atualizado com sucesso...`);
});