const math = require('../src/math');

describe('Mockando funcção com spy sem alterar a implementação', () => {
  test("#somar sem async/await", () => {
    // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
    const mockSomar = jest.spyOn(math, "somar");
  
    mockSomar(1, 2);
    expect(mockSomar).toHaveBeenCalled();
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar).toHaveBeenCalledWith(1, 2);
    expect(mockSomar(1, 2)).resolves.toBe(3);
    return expect(mockSomar(1, 2)).resolves.toBe(3);
  });
  
  test("#somar com async/await", async () => {
    // Como alternativa você pode usar async/await, nenhuma é superior a outra. Você pode combinar e apenas depende de qual estilo você acha que torna seus testes mais simples.
    const mockSomar = jest.spyOn(math, "somar");
  
    mockSomar(1, 2);
    expect(mockSomar).toHaveBeenCalled();
    expect(mockSomar).toHaveBeenCalledTimes(4);
    expect(mockSomar).toHaveBeenCalledWith(1, 2);
    await expect(mockSomar(1, 2)).resolves.toBe(3);
  });
});

describe('Utilizando spy, modificando implementação e restaurando a função', () => {
  test("#somar", () => {
    // testando a implementação original, o mock e a restauração da função original
  
    // implementação original
    expect(math.somar(1, 2)).resolves.toBe(3);
  
    // criando o mock e substituindo a implementação para uma subtração
    const mockSomar = jest
      .spyOn(math, "somar")
      .mockImplementation((a, b) => a - b);
  
    math.somar(5, 1);
    expect(mockSomar).toHaveBeenCalledTimes(7);
    expect(mockSomar(5, 1)).toBe(4);
    expect(mockSomar).toHaveBeenCalledTimes(8);
    expect(mockSomar).toHaveBeenLastCalledWith(5, 1);
  
    // restaurando a implementação original
    math.somar.mockRestore();
    expect(math.somar(1, 2)).resolves.toBe(3);
  });
});