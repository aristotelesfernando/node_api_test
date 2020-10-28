let express = require('express');
var bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.json({nome:'Fernando', sobrenome:'Oliveira', celular:'(91)98875-2339', email:'afernando.jr@icloud.com'});
});

app.get('/pessoa', function(req, res) {
    let nome = req.query.nome;
    let snome = req.query.snome;

    res.status(200).type("text");
    res.send(nome+' '+snome);
});

app.get('/pessoa/:id', function(req, res) {
    let id = req.params.id;
    res.send("Buscar pessoa id "+id);
});

app.get('/pessoa/nome/:nome/sobrenome/:sobrenome', function(req, res) {
    let nome = req.params.nome;
    let sobrenome = req.params.sobrenome;

    res.send("Nome e sobrenome por PATH Parameters " +nome+" "+sobrenome);
});

app.post('/pessoa', function(req, res) {
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;

    if(req.is("json")){
        res.json({nome: nome, sobrenome: sobrenome});
    } else {
        res.type('text').send("Nome e sobrenome por PATH Parameters " +nome+" "+sobrenome);
    }    
});

let server = app.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;

    console.log('Servidor com express iniciado em http://$s:$s', host, port);
});