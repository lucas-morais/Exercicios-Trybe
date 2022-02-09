const { expect } = require('chai');

const calculaSituacao = require('../exemplo1/calculaSitucao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(5);
    expect(resposta).to.be.equals('reprovado');
  });
});
describe('Quando a média for maior que 7', () => {
  it('retorna "aprovado"', () => {
    const resposta = calculaSituacao(8);
    expect(resposta).to.be.equals('aprovado');
  });
});
describe('Quando a média for igual a 7', () => {
  it('retorna "aprovado"', () => {
    const resposta = calculaSituacao(7);
    expect(resposta).to.be.equals('aprovado');
  });
});
