const promiseOperation = require('./1_promiseOperation');

function randomNumberGenerator() {
  return Math.floor(Math.random() * 10 + 1);
}

function executeOperation() {
  const a = randomNumberGenerator()
  const b = randomNumberGenerator();
  const c = randomNumberGenerator();

  promiseOperation(a, b, c)
    .then((resultado) => console.log(resultado))
    .catch((err) => console.log(`Erro: ${err}`));

}

executeOperation();