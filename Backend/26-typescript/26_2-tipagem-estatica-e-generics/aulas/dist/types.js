"use strict";
function printPassaro(ps) {
    console.log(`Comprimento das asas: ${ps.cAsas}`);
    console.log(`Comprimento do bico: ${ps.cBico}`);
}
const passaro = {
    cAsas: 20,
    cBico: 5,
};
printPassaro(passaro);
const soma = (num1, num2) => {
    return num1 + num2;
};
console.log(`2 + 7 = ${soma(2, 7)}`);
const solido = 'sólido';
console.log(solido);
const rg = 123;
const rg2 = '123';
console.log(rg, rg2);
const melhorSO = 'linux';
console.log(`Melhor SO: ${melhorSO}`);
const umaVogal = 'o';
console.log(umaVogal);
const teste = {
    frase: 'testando',
    quantidade: 50,
    acao: (n) => `retorno: ${n}`
};
console.log(teste);
console.log(teste.acao(5));
