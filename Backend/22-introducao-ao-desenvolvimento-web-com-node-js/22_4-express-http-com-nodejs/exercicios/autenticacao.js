module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if(token && token.length < 16)
    return res.status(401).json('Token inválido!')
  return next();
}