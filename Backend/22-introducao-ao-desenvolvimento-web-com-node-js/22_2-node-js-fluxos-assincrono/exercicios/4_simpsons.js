const fs = require('fs').promises;

const simpsonsFile = './simpsons.json';

async function readSimpsons(file) {
  try {
    const content = await fs.readFile(file, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    console.log(`Não foi possível ler o arquivo`);
    console.log(`Erro: ${err.message}`);
  }
}

async function getCharcters() {
  try {
    const content = await readSimpsons(simpsonsFile);
    console.log('id - name');
    content.forEach(({ id, name }) => {
      console.log(`${id} - ${name}`);
    });
  } catch (err) {
    console.log(err);
  }
}

async function getCharacterById(characterId) {
  try {
    const content = await readSimpsons(simpsonsFile);
    const character = content.find(({ id }) => characterId == id);
    return new Promise((resolve, reject) => {
      if (character) resolve(character);
      reject(Error('id não corresponde a personagem'));
    });
  } catch (err) {
    console.log(err);
  }
}

async function removeIds(...ids) {
  try {
    const characters = await readSimpsons(simpsonsFile);
    const filtered = characters.filter(({ id }) => !ids.includes(Number(id)));
    console.log(filtered);
  } catch (error) {
    console.log(error);
  }
}

async function writeSimpsonsNewFile() {
  try {
    const characters = await readSimpsons(simpsonsFile);
    const filtered = JSON.stringify(characters.slice(0, 4), null, '\t');

    fs.writeFile('simpsonFamily.json', filtered, 'utf-8')
      .then(() => console.log('Arquivo escrito com sucesso'))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
}

async function addNelson() {
  try {
    const characters = await readSimpsons('./simpsonFamily.json');
    characters.push({ id: `${characters.length + 1}`, name: 'Nelson Muntz' });
    const filtered = JSON.stringify(characters, null, '\t');

    fs.writeFile('./simpsonFamily.json', filtered, 'utf-8')
      .then(() => console.log('Arquivo escrito com sucesso'))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
}

async function changeCharacters(oldChar, newChar) {
  try {
    const characters = await readSimpsons('./simpsonFamily.json');
    console.log(characters);
    const index = characters.findIndex(({ name }) => name === oldChar);
    console.log(index);
    characters[index].name = newChar;

    fs.writeFile('simpsonFamily.json', JSON.stringify(characters, null, '\t'), 'utf-8')
      .then(()=>console.log('Arquivo escrito com sucesso'))
      .catch(error => console.log(error))
  } catch (error) {
    console.log('Personagem não está na lista');
    console.log(error);
  }
}

getCharcters();

getCharacterById(1)
  .then((character) => console.log(character))
  .catch((err) => console.log(err));

removeIds(10, 6);

writeSimpsonsNewFile();

addNelson();

changeCharacters('Maggie Simpson', 'Nelson Muntz');
