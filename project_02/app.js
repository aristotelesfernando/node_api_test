const http = require('http');
const url = require('url');
const Pessoa = require('./pessoa');

const callback = function(request, response) {
    const parts = url.parse(request.url);
    const path = parts.path;

    if(path == '/teste') {
        //response.end('Vamos estudar JSON!');
        response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
        //response.end("{\"nome\":\"Fernando\",\"sobrenome\":\"Oliveira\"}");
        // var pessoa = {'nome':'Fernando','sobrenome':'Oliveira'};
        // var json = JSON.stringify(pessoa);

        var pessoas = [];
        // var p1 = {'nome':'Fernando','sobrenome':'Oliveira'};
        // var p2 = {'nome':'Elaine','sobrenome':'Silva'};

        // pessoas.push(p1);
        // pessoas.push(p2);

        // var Pessoa = class {
        //     constructor(nome, sobrenome) {
        //         this.nome = nome;
        //         this.sobrenome = sobrenome;
        //     }
        // };

        let p1 = new Pessoa('Fernando','OLiveira');
        let p2 = new Pessoa('Elaine','Silva');

        pessoas.push(p1);
        pessoas.push(p2);

        var json = JSON.stringify(pessoas);

        var json = JSON.stringify(pessoas);

        response.end(json);
    } else {
        response.end('Not Found '+path);
    }
};

const server = http.createServer(callback);
server.listen(3000);

console.log('servidor iniciado em LOCALHOST porta 3000');