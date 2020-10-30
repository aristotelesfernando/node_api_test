let express = require('express');
const router = express.Router();
const carrodb = require('../model/CarroDB');

router.get('/', function(req, res) {
    res.send('API de carros.');
});

router.get('/', function(req, res) {
    carrodb.getCarros(function(carros) {
        res.json(carros);
    });
});

router.get('/:id(\\d+)', function(req, res) {
    let id = req.params.id;
    carrodb.getCarrosById(id, function(carro) {
        res.json(carro);
    });
});

router.delete('/:id(\\d+)', function(req, res) {
    let id = req.params.id;
    carrodb.deleteById(id, function(affectedRows) {
        res.json( {msg: `${affectedRows} carro foi deletado com sucesso`});
    });
});

router.get('/:tipo', function(req, res) {
    const tipo = req.params.tipo;
    carrodb.getCarrosByTipo(tipo, function(carros) {
        res.json(carros);
    });
});

router.get('//tipo/:tipo', function(req, res) {
    const tipo = req.params.tipo;
    carrodb.getCarrosByTipo(tipo, function(carros) {
        res.json(carros);
    });
});

router.post('/', function(req, res) {
    let carro = req.body;
    carrodb.save(carro, function(carro) {
        res.json(carro);
    })
});

router.put('/', function(req, res) {
    let carro = req.body;
    carrodb.update(carro, function(carro) {
        //res.json(carro);
        res.json({msg: "Carro atualizado com sucesso"});
    });
});

module.exports = router;