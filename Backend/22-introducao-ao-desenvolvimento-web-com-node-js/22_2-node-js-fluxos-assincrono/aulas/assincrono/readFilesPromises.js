const fs = require('fs').promises;

const nomeDoArquivo = './teste.txt';

fs.readFile(nomeDoArquivo, 'utf-8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`)
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\nErro:${err.message}`);
    process.exit(1)
  })