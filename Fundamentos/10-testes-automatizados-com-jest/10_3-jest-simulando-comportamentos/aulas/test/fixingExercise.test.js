const math = require('../src/math');

describe('Testando funcionalidades do módulo math', () => {
  test('A função subtrair deve ser chamada', () => {
    const mockSubtrair = jest.spyOn(math, "subtrair");
  
    math.subtrair();
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
  });
  test('O resultado da função multiplicar deve ser 10', () => {
    const mockMultiplicar = jest.spyOn(math, "multiplicar")
                              .mockReturnValue(10);
    math.multiplicar();
    expect(mockMultiplicar).toHaveBeenCalled();
    expect(mockMultiplicar).toHaveBeenCalledTimes(1);
    expect(math.multiplicar()).toBe(10);
  });
  test('Função somar com implementação e retorno', () => {
    const mockSomar = jest.spyOn(math, "somar")
                        .mockImplementation((a, b) => a + b);
    math.somar(8, 8);
    expect(mockSomar).toHaveBeenCalled();
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar).toHaveBeenCalledWith(8, 8);
    expect(math.somar(8, 8)).toBe(16);
  });
  test('Função dividir deve ser chamada com diferentes parâmetros', () => {
    const mockDividir = jest.spyOn(math, "dividir")
                        .mockReturnValue(15)
                        .mockReturnValueOnce(2)
                        .mockReturnValueOnce(5);
  
    expect(mockDividir).toHaveBeenCalledTimes(0);
    
    expect(math.dividir()).toBe(2);
    expect(mockDividir).toHaveBeenCalledTimes(1);
    
    expect(math.dividir()).toBe(5);
    expect(mockDividir).toHaveBeenCalledTimes(2);
    
    expect(math.dividir()).toBe(15);
    expect(mockDividir).toHaveBeenCalledTimes(3);
  });  
  test('A função subtrair deve com valor padrão e depois restaurada', () => {
    
    let mockSubtrair = jest.spyOn(math, 'subtrair');
    mockSubtrair.mockClear();

    mockSubtrair.mockReturnValue(20);
    
    expect(mockSubtrair).toHaveBeenCalledTimes(0);

    expect(math.subtrair(5, 2)).toBe(20);
    expect(mockSubtrair).toHaveBeenCalledTimes(1);


    math.subtrair.mockRestore();
    expect(math.subtrair(10, 15)).toBe(-5);
  });
});  