const promiseOperation = require('./1_promiseOperation');

function randomNumberGenerator() {
  return Math.floor(Math.random() * 10 + 1);
}

async function executeOperation() {
  const a = randomNumberGenerator();
  const b = randomNumberGenerator();
  const c = randomNumberGenerator();

  try {
    const resultado = await promiseOperation(a, b, c);
    console.log(resultado);
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
}

executeOperation();
