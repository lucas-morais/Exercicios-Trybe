const fs = require('fs')

module.exports = (arquivo, conteudo) => {
  fs.writeFileSync(arquivo, conteudo)

  return 'ok'
}