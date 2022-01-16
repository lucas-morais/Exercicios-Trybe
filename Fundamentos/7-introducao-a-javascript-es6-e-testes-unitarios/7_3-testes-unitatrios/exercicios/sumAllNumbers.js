const assert = require('assert');

function sumAllNumbers(numbers) {
  return numbers.reduce((n1, n2) => n1 + n2);
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);