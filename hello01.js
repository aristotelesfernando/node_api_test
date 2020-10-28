function objetos01() {
    var pessoa = Object();
    pessoa.nome = 'fernando';
    pessoa.celular = '(91)98875-2339';

    pessoa.hello = function() {
        return "Hello pessoa";
    }

    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

objetos01();