function add(a,b) {
    return a + b 
}

console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


function multiply(a,b) {
    let resultado = 0
    for (let index = 0; index < a; index++) {
        resultado = add(b,resultado)
    } return resultado
}
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

function power(a,b) {
    let resultado = 1
    for (let index = 0; index < b; index++) {
        resultado = multiply(a,resultado)
    }  return resultado
}
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');

function factorial(a) {
    let resultado = 1
    for (let index = 1; index < a; index++) {
        resultado += multiply(index,resultado)
    } return resultado
}
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

function fibonacci(f) {
    let numeroAnterior = 0 
    let numeroAtual = 1
    let proximoNumero = 2

    for (let index = 1; index < f; index++) {
        proximoNumero = add(numeroAnterior, numeroAtual)
        numeroAnterior = numeroAtual
        numeroAtual = proximoNumero
    } return proximoNumero
}
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
