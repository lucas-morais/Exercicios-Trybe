function validateString(string) {
  return string && typeof string === 'string'
}

function validateRequiredField(value, name) {
  return !validateString(value) && `campo '${name}' é obrigatório`; 
}

function validateFirstName(firstName) {
  return validateRequiredField(firstName, 'firstName');
}

function validateLastName(lastName) {
  return validateRequiredField(lastName, 'lastName');
}

function validateEmail(email) {
  return validateRequiredField(email, 'email');
}

function validatePassword(password) {
  const message = validateRequiredField(password, 'password');
  if(message) {
    return message
  }
  return password.length < 6 && 'O campo \'password\' deve ter pelo menos 6 caracteres'
}


function userValidation(firstName, lastName, email, password) {
  
  const validationArray = [
    validateFirstName(firstName),
    validateLastName(lastName),
    validateEmail(email),
    validatePassword(password),
  ];
  return validationArray.find((validation) => validation);
}

module.exports = userValidation;