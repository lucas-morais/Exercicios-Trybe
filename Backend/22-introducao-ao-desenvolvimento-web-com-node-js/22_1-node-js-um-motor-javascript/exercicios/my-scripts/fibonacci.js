const readline = require('readline-sync'); 

const calculaFibonacci = (numero) => {

  return numero <= 1 ? numero 
    : calculaFibonacci(numero - 1) + calculaFibonacci(numero - 2);
}

const geraSequencia = (numero) => {
  return Array.from(Array(numero).keys())
    .reduce((acc, elem) => [...acc, calculaFibonacci(elem)],[]);
}

const fibonacci = () => {
  const numero = readline.questionInt('Digite o tamanho da sequência. ');
  if(numero > 0) {
    const sequencia = geraSequencia(numero);
    console.log(`Sequencia para n = ${numero}: ${sequencia}`);
  } else {
    console.log('Número não é válido');
  }
}

fibonacci();

module.exports = fibonacci;