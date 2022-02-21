const Joi = require('joi');

const cepValidation = Joi.string()
  .pattern(/^\d{5}-?\d{3}$/)
  .message('Cep inválido')
 
function validateCep(cep) {
  const { error }= cepValidation.validate(cep);
  return error;
} 

// console.log(validateCep('555555555555'))
module.exports = { validateCep };
