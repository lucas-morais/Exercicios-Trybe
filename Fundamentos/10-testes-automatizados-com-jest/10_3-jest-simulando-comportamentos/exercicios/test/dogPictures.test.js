const dogPictures = require('../src/dogPictures');

describe('Testando requisição da api', () => {
  const apiURL = jest.spyOn( dogPictures, 'fetchDog');
  afterEach(apiURL.mockReset);
  test('Testando se a requisição foi bem sucedida', () => {
    apiURL.mockResolvedValue('request sucess');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('request sucess');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });
  test("testando se a requisção falhou", async () => {
    apiURL.mockRejectedValue('request failed');

    expect(apiURL).toHaveBeenCalledTimes(0);
    expect(apiURL()).rejects.toMatch('request failed');
    expect(apiURL).toHaveBeenCalledTimes(1);
  });
})