const { validateUser, validateLogin }= require("../validations/userValidation");

function userValidationMiddleware(req, res, next) {
  const { username, email, password } = req.body;
  if(!validateUser(username, email, password))
    return res.status(400).json({message: 'invalid data'})
  
  next();
}

function loginValidationMiddleware(req, res, next) {
  const { email, password } = req.body;
  if(!validateLogin(email, password))
    return res.status(400).json({message: 'invalid data'})
  
  next();
}

module.exports =  { userValidationMiddleware, loginValidationMiddleware };