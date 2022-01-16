const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.deepStrictEqual(myFizzBuzz(60), 'fizzbuzz');
assert.deepStrictEqual(myFizzBuzz(9), 'fizz');
assert.deepStrictEqual(myFizzBuzz(25), 'buzz');
assert.deepStrictEqual(myFizzBuzz(19), 19);
assert.deepStrictEqual(myFizzBuzz('batata'), false);