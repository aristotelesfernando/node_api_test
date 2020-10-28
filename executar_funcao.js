function soma(a, b) {
    return a + b;
}

function multiplicar(a, b) {
    return a * b;
}

function executar(funcao, a, b) {
    return funcao(a, b);
}

let resultado = executar(soma, 99, 101);

console.log(resultado);