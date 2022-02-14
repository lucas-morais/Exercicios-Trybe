function tokenValidation(token) {
  return token.length === 12 && /[\d\w]{12}/.test(token);
}

module.exports = tokenValidation;