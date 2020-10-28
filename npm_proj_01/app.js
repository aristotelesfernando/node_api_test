const http = require('http');
const url = require('url');
const fs = require('fs');

//função para ler o arquivo e escreve-lo no response
function readFile(response, file){
    //faz a leitura do leitura de forma assincrona
    fs.readFile(file, function(err, data) {
        //após ler escreve na RESPONSE o conteudo do arquivo JSON
        response.end(data);
    });
}

const callback = function(request, response) {
    response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    const parts = url.parse(request.url);
    const path = parts.path;

    //veriica a rota
    if(path == '/carros') {
        readFile(response, './JSON/carros.json');
    } else if(parts.path == '/carros/classicos') {
        readFile(response, './JSON/carros_classicos.json');
    } else if(parts.path == '/carros/esportivos') {
        readFile(response, './JSON/carros_esportivos.json');
    } else if(parts.path == '/carros/luxo') {
        readFile(response, './JSON/carros_luxo.json');
    }
     else {
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.end('<h3>Path não mapeaado</h3> ');
    }
};

const server = http.createServer(callback);

server.listen(3000);
console.log('Servidor iniciado em localhost porta 3000');