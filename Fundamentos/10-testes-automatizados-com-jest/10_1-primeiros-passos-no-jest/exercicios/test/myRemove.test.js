const myRemove = require('../src/myRemove.js');
const array = [1, 2, 3, 4];
describe('Function myRemove - return a copy from array without specific element.', () => {
  
  it('myRemove([1, 2, 3, 4], 3) retruns [1, 2, 4]', () => {
    expect(myRemove(array, 3)).toEqual([1, 2, 4]);
  });
  it('myRemove(array, 3) do not retrun the same array', () => {
    expect(myRemove(array, 3)).not.toBe(array);
  });
  it('myRemove(array, 3) do not retrun the change the array', () => {
    myRemove(array, 3)
    expect(array).toEqual([1, 2, 3, 4]);
  });
  it('myRemove([1, 2, 3, 4], 5) retruns [1, 2, 3, 4]', () => {
    expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
  });
});