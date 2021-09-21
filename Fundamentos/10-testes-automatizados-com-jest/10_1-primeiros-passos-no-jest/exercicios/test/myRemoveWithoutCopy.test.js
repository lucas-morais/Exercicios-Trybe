const myRemoveWithoutCopy = require('../src/myRemoveWithoutCopy.js');

describe('Function myRemoveWithoutCopy - return a copy from array without specific element.', () => {
  
  it('myRemoveWithoutCopy([1, 2, 3, 4], 3) retruns [1, 2, 4]', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 3)).toEqual([1, 2, 4]);
  });
  it('myRemoveWithoutCopy([1, 2, 3, 4], 3) do not retrun array [1, 2, 3, 4]', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('myRemoveWithoutCopy(array, 3) changes the array', () => {
    const array = [1, 2, 3, 4];
    myRemoveWithoutCopy(array, 3);
    expect(array).not.toEqual([1, 2, 3, 4]);
  });
  it('myRemove([1, 2, 3, 4], 5) retruns [1, 2, 3, 4]', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 5)).toEqual([1, 2, 3, 4]);
  });
});