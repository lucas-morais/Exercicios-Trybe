function rootNotFoundMiddleware(req, res, next) {
  next({ 
    code: 'Not found',
    status: 404, 
    message: 'Opsss, route not found!' 
  });
}

module.exports = rootNotFoundMiddleware;