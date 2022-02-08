const fs = require('fs').promises;
const readline = require('readline-sync');

async function trocaPalavra() {
  const nomeDoArquivo = readline.question('Qual arquivo você gostaria de ler? ');
  try {
    const content = await fs.readFile(nomeDoArquivo, 'utf-8');
    const palavra = readline.question('Qual palavra você gostaria de substituir? ');
    const substituta = readline.question('Qual será a palavra substituta? ');
    const text = content.replace(new RegExp(palavra, 'g'), substituta);
    console.log(text)
    const novoArquivo = readline.question('Qual o nome do novo arquivo? ');
    await fs.writeFile(novoArquivo, text);
  } catch(error) {
    console.log('Arquivo inexistente');
    console.log(`Error: ${error.message}`);
  }
}

trocaPalavra();