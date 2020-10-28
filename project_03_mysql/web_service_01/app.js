const http = require('http');
const url = require('url');

const carrodb = require('./CarroDB');

function getCarrosTipo(response, tipo) {
    carrodb.getCarrosByTipo(tipo, function(carros) {
        var json = JSON.stringify(carros);
        response.end(json);
    });
}

function getCarrosById(response, id) {
    carrodb.getCarrosById(id, function(carro) {
        var json = JSON.stringify(carro);
        response.end(json);
    });
}

function getCarros(response) {
    carrodb.getCarros(function(carros) {
        var json = JSON.stringify(carros);
        response.end(json);
    });
}

function salvarCarro(response, carro) {
    carrodb.save(carro, function(carro){
        console.log(`Carro ${carro.nome} foi salvo com sucesso...`);
        var json = JSON.stringify(carro);
        response.end(json);
    });
}

function callback(request, response) {
    var parts = url.parse(request.url);
    var path = parts.path;
    //response.writeHead(200, {'Content-Type': 'application/json: charset=utf-8'});
    response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

    if (request.method == 'GET') {
        if(path == '/carros') {       
            getCarros(response);
        } else if (path == '/carros/classicos') {
            getCarrosTipo(response, 'classicos');
        } else if (path == '/carros/esportivos') {
            getCarrosTipo(response, 'esportivos');
        } else if (path == '/carros/luxo') {
            getCarrosTipo(response, 'luxo');
        } else {
            response.end(`Rota ${path} não encontrada neste servidor...`);
        }
    } else if (request.method == 'POST') {
        var body = '';

        request.on('data', function(data) {
            body += data;
        });

        request.on('end', function() {
            response.writeHead(200, {'Content-Type': 'text/plai; charset=utf-8'});
            console.log('Post body: ' + body+'\n');
            let carro = JSON.parse(body);
            salvarCarro(response, carro);
            
        });

        return;
    }
}

var server = http.createServer(callback);
server.listen(3000);

console.log('Servidor foi iniciado em LOCALHOST na porta 3000');