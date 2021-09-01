const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}


assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'vetor esperado: [1, 2, 4]');
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'vetor esperado: [1, 2, 4]');

const array = [1, 2, 3, 4];
myRemove(array, 2);

assert.deepStrictEqual(array, [1, 2, 3, 4], 'O array não deve mudar.');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'O array não deve mudar');