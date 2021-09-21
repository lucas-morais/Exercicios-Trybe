const techList = (array, name) => {
  if(array.length === 0) {
    return 'Vazio!'
  }
  return array.sort().map((element) => ({tech: element, name}));
};

module.exports = techList;