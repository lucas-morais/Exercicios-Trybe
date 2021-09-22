const getUserName = require('../src/getUserName.js');

const id = 3;

describe('Testing getUserName', () => {
  it('Should return "Mark" when the id is 1', () => {
    return getUserName(1).then((name) => {
      expect(name).toBe('Mark');
    });
  })
  it('Should return Paul when the is 2', () => {
    return getUserName(2).then((name) => {
      expect(name).toBe('Paul');
    });
  })
  it('Should throw an error when the id does not exist', () => {
    expect.assertions(1);
    return getUserName(id).catch((error) => {
      expect(error.message).toMatch(`User with ${id} not found.`);
    });
  })
}); 

describe('Testing getUserName - resolves/rejects', () => {
  it('Should return "Mark" when the id is 1', () => {
    return expect(getUserName(1)).resolves.toBe('Mark');
  });
  it('Should return Paul when the is 2', () => {
    return expect(getUserName(2)).resolves.toBe('Paul');
  });
  it('Should throw an error when the id does not exist', () => {
    return expect(getUserName(id)).rejects.toEqual(new Error (`User with ${id} not found.`));
  });
});

describe('Testing getUserName - async/await', () => {
  it('Should return "Mark" when the id is 1', async () => {
    await expect(getUserName(1)).resolves.toBe('Mark');
  });
  it('Should return Paul when the is 2', async () => {
    await expect(getUserName(2)).resolves.toBe('Paul');
  });
  it('Should throw an error when the id does not exist', async () => {
    
    expect.assertions(1);
    await expect(getUserName(id)).rejects.toEqual(new Error (`User with ${id} not found.`));
  });
});