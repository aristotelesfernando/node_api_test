function Objetos02() {
    var pessoa = {
        nome : 'Fernando',
        celular: '(91)98875-2339',
        hello: function() {
            return 'Hello pessoa';
        }
    };

    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.celular);

    console.log(pessoa.hello());
}

Objetos02();