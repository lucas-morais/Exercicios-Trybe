function nameValidation(name) {
  return name.length > 5;
}

function initialsValidation(initials) {
  const isUperCase = initials === initials.toUpperCase();
  return initials.length > 1 && initials.length <= 3 && isUperCase;
}

function conutryValidation(country) {
  return country.length > 3;
}

function teamValidate(name, initials, country) {
  const validationArray = [
    nameValidation(name),
    initialsValidation(initials),
    conutryValidation(country),
  ];

  return validationArray.every((validation) => validation);
}

module.exports = teamValidate;
