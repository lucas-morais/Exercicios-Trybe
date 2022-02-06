const fs = require('fs');

const nomeDoArquivo = './test.txt';

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf-8');
  console.log(data)
} catch(err) {
  console.error(`Erro ao ler o arquivo ${err.path}`);
  console.log(err.message);
}