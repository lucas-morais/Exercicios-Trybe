const tokenValidation = require("../validations/btcValidation");

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if(!tokenValidation(token))
    return res.status(401).json({message: 'inválid token'})
  
  next(); 
}

module.exports = authMiddleware;