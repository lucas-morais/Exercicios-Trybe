const string = require('../src/string');
const FRASE = 'String de Teste';


describe('Testando funções com nova implementações', () => {

  test('Função toUpper deve retornar string em caixa baixa', () => {
    const mockToUpper = jest.spyOn(string, 'toUpper')
                          .mockImplementation((string) => string.toLowerCase());
    string.toUpper(FRASE);
    expect(mockToUpper).toHaveBeenCalledTimes(1);
    expect(mockToUpper).toHaveBeenCalledWith(FRASE);
    expect(string.toUpper(FRASE)).toBe(FRASE.toLowerCase())
  });
  test('Função first deve retornar a última letra da string ', () => {
    const mockFirst = jest.spyOn(string, 'first')
                          .mockImplementation((string) => string[string.length -1]);
    
    string.first(FRASE);
    expect(mockFirst).toHaveBeenCalledTimes(1);
    expect(mockFirst).toHaveBeenCalledWith(FRASE);
    expect(string.first(FRASE)).toBe(FRASE[FRASE.length - 1]);
  });
  test('Função join deve receber três strings e concatená-las', () => {
    const mockJoin = jest.spyOn(string, 'join')
                          .mockImplementation((string1, string2, string3) => string1.concat(string2).concat(string3));
    
    string.join('fizz', 'buzz', 'fizzbuzz');
    expect(mockJoin).toHaveBeenCalledTimes(1);
    expect(mockJoin).toHaveBeenCalledWith('fizz', 'buzz', 'fizzbuzz');
    expect(string.join('fizz', 'buzz', 'fizzbuzz')).toBe('fizzbuzzfizzbuzz');
  });
});

describe('Testando restauração de funções', () => {
  test('A função toUpper deve retornar uma string em caixa baixa e depois retornar ao seu padrão', () => {
    const mockToUpper = jest.spyOn(string, 'toUpper');
    
    mockToUpper.mockClear();
    
    string.toUpper(FRASE);
    expect(mockToUpper).toHaveBeenCalledTimes(1);
    expect(mockToUpper).toHaveBeenCalledWith(FRASE);
    expect(string.toUpper(FRASE)).toBe(FRASE.toLowerCase())

    string.toUpper.mockRestore();
    expect(string.toUpper(FRASE)).toBe(FRASE.toUpperCase());
  })
}); 