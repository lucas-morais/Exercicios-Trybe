const sum = require('../src/sum.js');

describe('Test return of function sum()', () => {
  it('Result of sum(4, 5) is 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Result of sum(4, 5) is 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Result of sum(4, 5) is 9', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  it('Result of sum(4, 5) is 9', () => {
    expect(() => { sum(4, '5')} ).toThrow('parameters must be numbers');
  });

});