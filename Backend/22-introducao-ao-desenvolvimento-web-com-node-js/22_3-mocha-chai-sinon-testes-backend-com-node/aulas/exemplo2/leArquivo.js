const fs = require('fs')

module.exports = (nomeDoArquivo) => {
  try {
    const conteudoDoArquivo = fs.readFileSync(nomeDoArquivo, 'utf-8');
    return conteudoDoArquivo
  } catch(error) {
    return null;
  }
}