const numeros = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    if(typeof array[index] !== 'number'){
      
      return false;
    }
  }
  return true;
};

numeros([1, 2, 3, 4])

module.exports = numeros
