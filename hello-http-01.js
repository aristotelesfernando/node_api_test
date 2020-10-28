//carregar modulo http
const http = require('http');

//cria um servidor web que vai responder 'hello world' para todas as requisições
const server = http.createServer(function(request, response) {
    //define o cabeçalho da resposta
    response.writeHead(200, {"Content-Type": "text/html"});

    //mensagem de retorno
    response.end('<h1>Hello World Node!</h1>');
});

//porta que será utilizada
server.listen(3000);

//mensagem no console quando iniciar o server
console.log('Servidor iniciado em http://localhost:3000');