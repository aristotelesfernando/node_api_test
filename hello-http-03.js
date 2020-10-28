const http = require('http');
const url = require('url');

const callback = function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    const parts = url.parse(request.url);

    //veriica a rota
    if(parts.path == '/') {
        response.end('<h1>Site na Raiz</h1>');
    } else if(parts.path == '/carros') {
        response.end('<h2>Voce acessou a rota /carros');
    } else {
        response.end('<h3>Você acessou uma rota inválida...</h3> ' + parts.path);
    }
};

const server = http.createServer(callback);

server.listen(3000);
console.log('Servidor iniciado em localhost porta 3000');