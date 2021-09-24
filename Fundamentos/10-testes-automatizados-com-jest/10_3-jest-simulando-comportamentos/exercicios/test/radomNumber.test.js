const random = require('../src/random');

describe('Testando função que gera númeor aleatório de 0 a 100', () => {
  afterEach(()=>{
    random.randomNumber.mockReset();
  });
  
  test('Retorno padrão é 10', () => {
    random.randomNumber = jest.fn().mockReturnValue(10);
    random.randomNumber();

    expect(random.randomNumber).toHaveBeenCalled();
    expect(random.randomNumber).toHaveBeenCalledTimes(1);
    expect(random.randomNumber()).toBe(10);
  })

  test('Modificando o a implementação da função', () => {
    random.randomNumber.mockClear()
    random.randomNumber.mockImplementation((a, b) => a/b);
    
    random.randomNumber(10, 5);
    expect(random.randomNumber).toHaveBeenCalled();
    expect(random.randomNumber).toHaveBeenCalledTimes(1);
    expect(random.randomNumber).toHaveBeenCalledWith(10, 5);
    expect(random.randomNumber(10, 5)).toBe(2);
  });
  test('Implementação que recebe três parâmetros e retorna a multiplicação', () => {
    random.randomNumber.mockClear()
    random.randomNumber.mockImplementation((a, b, c) => a * b * c);
    
    random.randomNumber(10, 5, 2);
    expect(random.randomNumber).toHaveBeenCalled();
    expect(random.randomNumber).toHaveBeenCalledTimes(1);
    expect(random.randomNumber).toHaveBeenCalledWith(10, 5, 2);
    expect(random.randomNumber(10, 5, 2)).toBe(100);
  })
  test('Implementação que recebe um parâmtro e retorna o dobro', () => {
    random.randomNumber.mockClear()
    random.randomNumber.mockImplementation((a) => a * 2);
    
    random.randomNumber(10);
    expect(random.randomNumber).toHaveBeenCalled();
    expect(random.randomNumber).toHaveBeenCalledTimes(1);
    expect(random.randomNumber).toHaveBeenCalledWith(10);
    expect(random.randomNumber(10)).toBe(20);
  })

}); 