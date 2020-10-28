class Pessoa {
    constructor() {
        this.nome = 'fernando';
        this.celular = '(91)98875-2339';
    }

    hello() {
        return 'Hello Pessoa';
    }
}

function Objeto04() {
    var pessoa = new Pessoa();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.celular);
    console.log(pessoa.hello());
}

Objeto04();