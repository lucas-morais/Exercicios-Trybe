const readline = require('readline-sync');


const calculaVelocidadeMedia = (distancia, tempo) => {
  return distancia / tempo;
}


const velocidade = () => {
  const distancia = readline.questionInt('Qual a distância percorrida em m? ');
  const tempo = readline.questionInt('Qual o tempo total do percurso em s? ');
  const velocidadeMedia = calculaVelocidadeMedia(distancia, tempo)
  console.log(`Velocidade média: ${velocidadeMedia} m/s`);
}

// velocidade();


module.exports = velocidade;
