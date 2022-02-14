const teamValidate = require("../validations/teamsValidation")

function teamsValidationMiddleware(req, res, next) {
  const { name, initials, country} = req.body
  if(!teamValidate(name, initials, country))
    return res.status(400).json({message: 'invalida data'})
  
  next();
}

module.exports = teamsValidationMiddleware;