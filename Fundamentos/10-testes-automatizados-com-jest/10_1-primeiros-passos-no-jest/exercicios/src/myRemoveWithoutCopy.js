const myRemoveWithoutCopy = (array, item) => {
  if(array.includes(item)) {
    array.splice(array.indexOf(item), 1);
  }
  return array;
};

module.exports = myRemoveWithoutCopy; 