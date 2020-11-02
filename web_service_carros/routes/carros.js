let express = require('express');
const router = express.Router();
const carrodb = require('../model/CarroDB');
const exec = require('./util');

router.get('/', function(req, res) {
    res.send('API de carros.');
});

// router.get('/todos', async function(req, res, next) {
//     try {
//         let carros = await carrodb.getCarros();
//         res.json(carros);
//     } catch (error) {
//         next(error);        
//     }
// });

router.get('/todos', exec(async(req, res, next) => {
    let carros = await carrodb.getCarros();
    res.json(carros);
}));

router.get('/:id(\\d+)', exec(async(req, res, next) => {
    let id = req.params.id;
    let carro = await carrodb.getCarrosById(id);
    res.json(carro);
}));

router.delete('/:id(\\d+)', exec(async(req, res, next) => {
    let id = req.params.id;
    let affectedRows = await carrodb.deleteById(id);
    res.json({msg: affectedRows > 0 ? 'Carro deletado com sucesso.':`Carro com este ID ${id} não foi encontrado`});
}));

router.get('/tipo/:tipo', exec(async(req, res, next) => {
    let tipo = req.params.tipo;
    let carros = await carrodb.getCarrosByTipo(tipo);
    res.json(carros);
}));

router.post('/', exec(async(req, res, next) => {
    let carro = await carrodb.save(req.body);
    res.json(carro);
}));

router.put('/', function(req, res) {
    let carro = req.body;
    carrodb.update(carro, function(carro) {
        //res.json(carro);
        res.json({msg: "Carro atualizado com sucesso"});
    });
});

router.put('/', exec(async(req, res, next) => {
    let carro = await carrodb.update(req.body);
    res.json({msd:'Carro atualizado com sucesso'}); 
}));

module.exports = router;