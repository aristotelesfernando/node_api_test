function Pessoa() {
    this.nome = 'Fernando';
    this.celular = '(91)98875-2339';

    this.hello = function() {
        return 'Hello pessoa';
    };
}

function Objeto03() {
    var pessoa = new Pessoa();

    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.celular);
    console.log(pessoa.hello());
}

Objeto03();