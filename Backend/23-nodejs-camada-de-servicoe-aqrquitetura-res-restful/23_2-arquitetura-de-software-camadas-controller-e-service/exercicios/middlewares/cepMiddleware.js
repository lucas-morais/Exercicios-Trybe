const { validateCep } = require('../validations/cepValidations');

function cepValidationMiddleware(req, res, next) {
  const { cep } = req.params;
  const error = validateCep(cep);
  if (error) {
    message = {
      error: {
        code: 'invalid cep',
        message: error.message,
      },
    };
    const status = 400;
    return res.status(status).json(message);
  }

  next();
}

function checkIfCepExists(_req, res, next) {
  
}

module.exports = { cepValidationMiddleware, };
