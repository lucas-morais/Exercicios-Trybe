const fs = require('fs');

const nomeDoArquivo = './teste.txt';

fs.readFile(nomeDoArquivo, 'utf-8', (err, data) => {
  if(err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\nErro:${err.message}`);
    process.exit(1)
  }
  console.log(`Conteúdo do arquivo: ${data}`);
})