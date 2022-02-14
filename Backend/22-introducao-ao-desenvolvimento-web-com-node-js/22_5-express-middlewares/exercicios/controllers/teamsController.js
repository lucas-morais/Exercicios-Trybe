const { readTeams, writeTeam } = require('../services/file-io');

async function getTeams(req, res) {
  const teams = await readTeams();
  return res.status(200).json(teams);
}

async function createTeam(req, res) {
  const { name, initials, league = '', country } = req.body;
  
  const newTeam = { name, initials, league, country };
  await writeTeam(newTeam);
  return res.status(201).json(newTeam);
}

module.exports = {getTeams, createTeam};
