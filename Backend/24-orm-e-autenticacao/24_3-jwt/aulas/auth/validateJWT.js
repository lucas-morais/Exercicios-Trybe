const jwt = require('jsonwebtoken');

const { User } = require('../models');


const secret = 'seusecretdetoken';

module.exports = async(req, res, next) => {
  const token = req.headers.authorization;

  
  if(!token) {
    return res.status(401).json({ error: 'Token não encontrado'});
  }
  
  try {
    const decoded = jwt.verify(token, secret);

    const user = await User.findOne({ 
      where: { username: decoded.data.username},
      raw: true
    })
    if(!user) {
      return res.status(401).json({ message: 'Erro ao procurar usuário do token'});
    }

    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({ error: error.message })
  }
}