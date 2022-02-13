function emailValidation(email) {
  return /(\S+)(@)([\w\d]+).com/.test(email);
}

function usernameValidation(username) {
  return username.length > 3; 
}

function passwordValidation(password) {
  if(!Number(password)) {
    return false
  }
  return (password.length >= 4 && password.length <=8); 
}


function validateUser(username, email, password) {
  const validationArray = [
    emailValidation(email),
    usernameValidation(username),
    passwordValidation(password),
  ]
  return validationArray.every((validation) => validation);
}

function validateLogin(email, password) {
  const validationArray = [
    emailValidation(email),
    passwordValidation(password),
  ];
  return validationArray.every((validation) => validation);
}

module.exports = { validateUser, validateLogin };