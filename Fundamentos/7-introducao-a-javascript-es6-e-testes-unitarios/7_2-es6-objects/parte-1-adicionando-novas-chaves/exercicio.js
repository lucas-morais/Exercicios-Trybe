function createObject(object, key, value) {
  object[key] = value;
  return object;
  
}

const firstObject = {
  firstName: 'Ringo'
}

const newKey = 'lastName';
const newValue = 'Starr'

const newObject = createObject(firstObject, newKey, newValue);
console.log(newObject);
