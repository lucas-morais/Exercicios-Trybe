const fs = require('fs').promises;

fs.writeFile('./nove-arquivo.txt', 'Arquivo escrito automaticamente')
  .then(() =>console.log('Arquivo escrito com sucesso'))
  .catch((err) => console.log(`Erro ao escrever o arquivo: ${err.message}`));