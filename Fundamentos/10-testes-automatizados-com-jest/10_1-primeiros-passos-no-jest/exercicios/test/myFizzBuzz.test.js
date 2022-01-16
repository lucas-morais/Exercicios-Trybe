const myFizzBuzz = require('../src/myFizzBuzz.js');

describe('Test myFizzBuzz function', () => {
  it('If num is divisible by both 3 and 5, myFizzBuzz returns "fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('If num is divisible by 3, myFizzBuzz returns "fizz"', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('If num is divisible by 5, myFizzBuzz returns "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('If num is not divisible by 3 or 5, myFizzBuzz returns num', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  it('If typeof num is not "number", myFizzBuzz returns false', () => {
    expect(myFizzBuzz('9')).toBe(false);
  });
}) 