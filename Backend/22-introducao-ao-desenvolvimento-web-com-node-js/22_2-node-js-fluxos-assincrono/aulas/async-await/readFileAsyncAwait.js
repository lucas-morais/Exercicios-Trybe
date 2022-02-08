const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile(
      './arquivo-assincrono.txt',
      'Arquivo uatomatico assíncrono'
    );
    console.log('Arquivo escrito com sucesso');
  } catch (err) {
    console.log(`Erro ao escrever o artigo ${err.message}`);
  }
}

main();
