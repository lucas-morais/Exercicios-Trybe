const service = require('../src/service.js');


describe('Mockando rgbColor', () => {
  test("Se a função é chamada", () => {
    
    service.randomRgbColor = jest.fn();

    service.randomRgbColor();
    expect(service.randomRgbColor).toHaveBeenCalled();
  });
  test("Se a função é chamada e possui o retorno esperado", () => {
    
    service.randomRgbColor = jest.fn().mockReturnValue('rgb(255, 255, 255)');

    service.randomRgbColor();
    expect(service.randomRgbColor).toHaveBeenCalled();
    expect(service.randomRgbColor()).toBe('rgb(255, 255, 255)');
  });
  test("Qauntas vezes a função mockada foi chamada", () => {
    // testando quantas vezes a função foi chamada e qual seu retorno
    service.randomRgbColor = jest
      .fn()
      .mockReturnValue('default value')
      .mockReturnValueOnce('first call')
      .mockReturnValueOnce('second call');
  
    expect(service.randomRgbColor).toHaveBeenCalledTimes(0);
  
    expect(service.randomRgbColor()).toBe("first call");
    expect(service.randomRgbColor).toHaveBeenCalledTimes(1);
  
    expect(service.randomRgbColor()).toBe("second call");
    expect(service.randomRgbColor).toHaveBeenCalledTimes(2);
  
    expect(service.randomRgbColor()).toBe("default value");
    expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
  });
});