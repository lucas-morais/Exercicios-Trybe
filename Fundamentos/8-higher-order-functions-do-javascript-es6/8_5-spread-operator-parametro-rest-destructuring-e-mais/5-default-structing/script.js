const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;

console.log(nationality);

const position2D = [1.0, 2.0];
const [x, y, z = 0] = position2D;

console.log(x, y, z);