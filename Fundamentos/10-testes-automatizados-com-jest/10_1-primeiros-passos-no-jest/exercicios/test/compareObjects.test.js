const { obj1, obj2, obj3, obj4 } = require('../src/compareObjects.js')

describe('Comparing objects...', () => {
  it('Objects are not the same', () => {
    expect(obj1).not.toBe(obj2);
  });
  it('Objects have the same content)', () => {
    expect(obj1).toEqual(obj2);
  });
  it('Objects have the same content(with different ordering)', () => {
    expect(obj1).toEqual(obj3);
  });
  it('Objects have the same properties', () => {
    expect(obj4).toHaveProperty(Object.keys(obj1)[0]);
    expect(obj4).toHaveProperty(Object.keys(obj1)[1]);
  });
});