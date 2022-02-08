const fs = require('fs');

function readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, content) => {
      if(err)
        return reject(err);
      resolve(content)
    })
  })
}

readFile('./teste.txt')
  .then((content) => console.log(content))
  .catch((erro) => console.log(erro.message));
