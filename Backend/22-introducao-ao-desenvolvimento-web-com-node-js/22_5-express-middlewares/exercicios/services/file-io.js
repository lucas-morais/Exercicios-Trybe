const fs = require('fs/promises');

const file = './teams/teams.json';


async function readTeams() {
  try {
    const content = await fs.readFile(file, 'utf-8')
    return JSON.parse(content) 
  } catch(e) {
    return [];
  }
}


async function writeTeam(content) {
  try {
    const previousContent = await readTeams(file);
    const newContent = [...previousContent, content];
    fs.writeFile(file, JSON.stringify(newContent, null , '\t'))
  } catch(e) {
    throw new Error('can\'t write the file');
  }
}

module.exports = {readTeams, writeTeam};