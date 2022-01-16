const hydrate = (bebidas) => {
  const glasses =  bebidas.match(/(\d+)/g).reduce((acc, number) => {
    return acc + parseInt(number);
  }, 0);
  const plural = glasses > 1 ? 's' : '';
  return `${glasses} copo${plural} de água`;
}

module.exports = hydrate;
