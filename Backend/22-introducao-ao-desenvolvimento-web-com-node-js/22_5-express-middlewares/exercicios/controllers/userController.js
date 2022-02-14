const createToken = require('../services/createToken')
function createUser(req, res) {
  // const { username, email, password } = req.body 
  return res.status(201).json({ message: 'userCreated'});
}

function login(req, res) {
  const token = createToken(6)
  return res.status(200).json({token});

}

module.exports = { createUser, login }