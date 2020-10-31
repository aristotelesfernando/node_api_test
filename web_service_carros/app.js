let express = require('express');
let app = express();
const carrodb = require('./model/CarroDB');
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

app.use('/api/carros', require('./routes/carros'));

app.get('/teste_erro', function(req, res) {
    throw Error('Erro ninja');
});

// app.use(function(req, res, next) {
//     res.status(404);
//     res.json({err: "Rota não encontrada"});
// });
app.use(function(req, res, next) {
    let err = new Error("Rota não encontrada nesta api");
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    console.log(err);
    res.status(500);
    //res.json({erro: "Ocorreu um erro "+err.message});
    res.json({erro: "Erro na trasação"});
});

let server = app.listen(3000, function() {
    let host = server.address().address;
    let port = server.address.port;

    console.log(`Servidor iniciado em http://${host}:${port}`);
});

