class Pessoa {
    constructor(_nome,_celular,_email,_idade){
        this.nome = _nome;
        this.celular = _celular;
        this.email = _email;
        this.idade = _idade;
    }

    getNome(){
        return this.nome;
    }
    getCelular() {
        return this.celular;
    }
    getEmail() {
        return this.email;
    }
    getIdade() {
        return this.idade;
    } 
}

function main() {
    var usuario = new Pessoa('Fernando','988752339','afernando.jr@icloud.com','49');

    console.log(usuario.getNome());

    console.log(usuario.toString());
}

main();