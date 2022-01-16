const assert = require('assert');

const greaterThanTen = (array) => {
  let results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const otherParamenter = [5, 9, 1];
const result = [32, 21];

assert.strictEqual(typeof greaterThanTen, 'function');
greaterThanTen(parameter);
assert.deepStrictEqual(parameter, [4, 10, 32, 9, 21]);
assert.deepStrictEqual(greaterThanTen(parameter), result);
assert.deepStrictEqual(greaterThanTen(otherParamenter), []);