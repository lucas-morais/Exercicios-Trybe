function errorMiddleware(err, _req, res, _next) {
  console.log(err.message);
  return res.status(500).json({message: 'Algo deu errado'});
}

module.exports = errorMiddleware