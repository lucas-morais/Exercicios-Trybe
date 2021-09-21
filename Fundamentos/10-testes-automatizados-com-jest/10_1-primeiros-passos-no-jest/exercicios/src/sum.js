const sum = (a, b) => {
  if(typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  throw new Error('parameters must be numbers');
}

module.exports = sum;