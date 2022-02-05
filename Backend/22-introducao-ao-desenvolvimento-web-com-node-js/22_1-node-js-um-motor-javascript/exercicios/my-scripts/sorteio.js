const readline = require('readline-sync');

const geraNumeroAleatorio = () => {
  return Math.round(Math.random()*10) ;
}

const sorteio = () => {
  const numero = readline.questionInt('\nDigite o número da sorte (0 - 10) ')
  const numeroSorteado = geraNumeroAleatorio();
  console.log(`Numero sorteado: ${numeroSorteado}`);
  const resultado = numero == numeroSorteado? 'Parabéns, número correto' 
    : 'Opa, não foi dessa vez.'
  console.log(resultado); 
}

const jogar = () => {
  sorteio();
  const jogarNovamente = readline.question('\nDeseja joga novamente? (s/n) ')
  if(jogarNovamente === 's') {
    return jogar()
  } 
  return;
}

// jogar();
module.exports = jogar;

