const net = require('net');

var cont = 1;

const server = net.createServer(function(socket) {
    console.log('Cliente conctou-se do IP:' + socket.remoteAddress);
    socket.end('Hello world TCP:' + (cont++) + '\n');
});

server.listen(3000,'localhost');
console.log('servidor TCP iniciado...');