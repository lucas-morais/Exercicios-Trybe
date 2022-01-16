const { encode, decode } = require('../src/myCodec.js');

describe('Testing encode and decode functions', () => {
  it('Test if encode and decode are fucnctions', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('Test if the function encode converts vowels to numbers', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('Test if the function decode converts vowels to numbers', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('Test if consonants can not be converted', () => {
    expect(encode('qwrtypsdfghjklçzxcvbnm')).toBe('qwrtypsdfghjklçzxcvbnm');
    expect(decode('qwrtypsdfghjklçzxcvbnm')).toBe('qwrtypsdfghjklçzxcvbnm');
  });
  it('Test if origial and returned strings have the same length', () => {
    const test = 'this is a test'
    expect(encode(test)).toHaveLength(test.length);
    expect(decode(test)).toHaveLength(test.length);
    expect(decode(encode(test))).toHaveLength(test.length);
  });

})