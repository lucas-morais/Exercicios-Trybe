const readline = require('readline-sync'); 

const calculaFatorial = (numero) => {
  return numero <= 1 ? 1 : numero * calculaFatorial(numero -1);
}


const fatorial = () => {
  const numero = readline.questionInt('Digite um numero inteiro positivo. ');
  if(numero > 0) {
    console.log(`O fatorial de ${numero} é ${calculaFatorial(numero)}`)
  } else {
    console.log('Número não é válido');
  }
}

fatorial();

module.exports = fatorial;