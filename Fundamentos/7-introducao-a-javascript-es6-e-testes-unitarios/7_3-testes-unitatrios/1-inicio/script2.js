const assert = require('assert');

const sum = (num1, num2) => num1 + num2;
const expected = sum(5, 4);

assert.equal(expected, 9, '5 + 4 = 9');
// assert.equal(expected, 10, '5 + 4 = 9');
assert.strictEqual(expected, 9, '5 + 4 = 9');
assert.notStrictEqual(expected, 5, 'Não pode ser igaual a 9');