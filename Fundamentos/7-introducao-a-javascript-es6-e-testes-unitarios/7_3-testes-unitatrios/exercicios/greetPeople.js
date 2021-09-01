const assert = require('assert');

const greetPeople = (people) => {
  let greeting = [];
  
  if (typeof people === 'string') {
    greeting.push(`Hello ${people}`);
  } else {
  
    for (const person of people) {
      greeting.push(`Hello ${person}`);
    }
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(greetPeople(parameter[0]), [result[0]]);
assert.deepStrictEqual(greetPeople(parameter), result);