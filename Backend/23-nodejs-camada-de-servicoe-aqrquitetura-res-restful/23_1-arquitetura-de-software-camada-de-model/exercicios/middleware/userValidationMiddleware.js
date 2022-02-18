const userValidation = require('../validations/userValidations');

function userValidationMiddleware(req, res, next) {
  const { firstName, lastName, email, password } = req.body;
  const isNotValidMessage = userValidation(firstName, lastName, email, password);

  if (isNotValidMessage) {
    return res.status(400).json({
      error: true,
      message: isNotValidMessage,
    });
  }
  next();
}

module.exports = userValidationMiddleware