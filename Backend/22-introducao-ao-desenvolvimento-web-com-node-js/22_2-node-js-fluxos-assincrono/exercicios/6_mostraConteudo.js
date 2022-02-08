const fs = require('fs').promises;
const readline = require('readline-sync');

async function mostraConteudo() {
  const nomeDoArquivo = readline.question('Qual arquivo você gostaria de ler? ');
  try {
    const content = await fs.readFile(nomeDoArquivo, 'utf-8');
    console.log(content)
  } catch(error) {
    console.log('Arquivo inexistente');
    console.log(`Error: ${error.message}`);
  }
}

mostraConteudo();