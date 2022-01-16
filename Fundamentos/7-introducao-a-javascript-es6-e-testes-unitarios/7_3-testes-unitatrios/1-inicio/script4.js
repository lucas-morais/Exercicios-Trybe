const assert = require('assert');

function division(x, y) {
  if (y === 0) {
    throw new Error('parâmetro y não pode ser 0');
  }
  return x / y;
}

assert.strictEqual(division(10, 2), 5);
assert.throws(() => {division(10, 0);}, /Error: parâmetro y não pode ser 0/);
//assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK
