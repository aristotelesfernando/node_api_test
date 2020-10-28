const http = require('http');

const callback = function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello World Node com CALLBACK</h1>');
};

const server = http.createServer(callback);
server.listen(3000);

console.log('servidor iniciado na porta 3000');