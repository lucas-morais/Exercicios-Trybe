const myRemove = (array, item) => {
  const copy = [...array];
  if(array.includes(item)) {
    copy.splice(array.indexOf(item), 1);
  }
  return copy;
};

module.exports = myRemove; 