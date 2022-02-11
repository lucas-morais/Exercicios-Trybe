const simpsons = [
  {
    "id": "1",
    "name": "Homer Simpson"
  },
  {
    "id": "2",
    "name": "Marge Simpson"
  },
  {
    "id": "3",
    "name": "Bart Simpson"
  },
  {
    "id": "4",
    "name": "Lisa Simpson"
  },
  {
    "id": "5",
    "name": "Maggie Simpson"
  },
  {
    "id": "6",
    "name": "Ned Flanders"
  },
  {
    "id": "7",
    "name": "Montgomery Burns"
  },
  {
    "id": "8",
    "name": "Nelson Muntz"
  },
  {
    "id": "9",
    "name": "Krusty"
  },
  {
    "id": "10",
    "name": "Milhouse Van Houten"
  }
]

const fs = require('fs').promises;

async function createSimpsonsFile(data = simpsons) {
  try {
    fs.writeFile('simpsons.json', JSON.stringify(data, null, '\t'));
    console.log('Arquivo criado com sucesso!');
  } catch(error) {
    console.log(error.message)
  }
} 


async function readSimpsonsFile() {
  const conteudo = await fs.readFile('simpsons.json', 'utf-8');
  return JSON.parse(conteudo);
}



module.exports = { createSimpsonsFile, readSimpsonsFile };
