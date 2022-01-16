const searchEmployee = require('../src/searchEmployee.js');

describe('Testa a função searchEmployee', () => {
  it('Testa se a função searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Testa se searchEmplyee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Testa busca por id e firstName', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });
  it('Testa busca por id e lastName', () => {
    expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
  });
  it('Testa busca por id e specialities', () => {
    expect(searchEmployee('5569-4', 'specialities'))
      .toEqual(['Frontend', 'Redux', 'React', 'CSS']);
  });
  it('Testa se busca por id inexistente lança erro', () => {
    expect(() => {searchEmployee('1234-5', 'firstName')}).toThrow();
  });
  it('Testa se busca por id inexistente lança erro: "ID não identificada"', () => {
    expect(() => {searchEmployee('1234-5', 'firstName')})
      .toThrow('ID não identificada');
  });
  it('Testa se busca por parâmetro inexistente lança erro', () => {
    expect(() => {searchEmployee('8579-6', 'sports')}).toThrow();
  });
  it('Testa se busca por parâmetro inexistente lança erro: "ID não identificada"', () => {
    expect(() => {searchEmployee('8579-6', 'sports')})
      .toThrow('Informação indisponível');
  });
})