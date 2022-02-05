const readline = require('readline-sync'); 

const calculaImc = (altura, peso) => {
  return peso / (altura^2);
}

const tabela = (imc) => {
  if(imc < 18.5)
    return 'Abaixo do peso'
  else if (imc < 25)
    return 'Peso normal'
  else if (imc < 30)
    return 'Acima do peso'
  else if (imc < 35)
    return 'Obesidade grau I'
  else if (imc < 40)
    return 'Obesidade grau II'
  return 'Obesidade graus III e IV'
} 

const imc = () => {
  const altura = readline.questionFloat('Qual sua altura? ');
  const peso = readline.questionInt('Qual seu peso? ');
  
  const imcCalculado = calculaImc(altura, peso);
  const situacao = tabela(imcCalculado);
  console.log(`Seu imc é ${imcCalculado}: ${situacao} `);
}

imc();

module.exports = imc;