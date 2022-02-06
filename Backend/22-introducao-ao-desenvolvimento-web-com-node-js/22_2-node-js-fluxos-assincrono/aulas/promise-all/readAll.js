const fs = require('fs').promises;

Promise.all([
  fs.readFile('./teste.txt'),
  fs.readFile('./novo-arquivo.txt'),
  fs.readFile('./arquivo-assincrono.txt'),
])
  .then((files) => {
    const fileSizeSum = files.reduce((acc, file) => acc + file.byteLength, 0);
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.log(`Erro as ler arquivos: ${err.message}`);
  });
