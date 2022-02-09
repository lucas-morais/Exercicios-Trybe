const { expect } = require('chai');

const positivoNegativoOuNeurto = require('../positivoNegativoOuNeutro');

describe('Função recebe um número e retorna se é positivo, negativo ou neutro', () => {
  describe('recebendo valor maior que zero', () => {
    it('deve retornar "positivo"', () => {
      const resultado = positivoNegativoOuNeurto(1);
      expect(resultado).to.be.equal('positivo');
    });
  });
  describe('recebendo valor menor que zero', () => {
    it('deve retornar "negativo"', () => {
      const resultado = positivoNegativoOuNeurto(1);
      expect(resultado).to.be.equal('positivo');
    });
  });
  describe('recebendo zero', () => {
    it('deve retornar "neutro"', () => {
      const resultado = positivoNegativoOuNeurto(1);
      expect(resultado).to.be.equal('positivo');
    });
  });
});

describe('Lança erro de acordo com o tipo de entrada', () => {
  describe('ao receber uma string', () => {
    it('deve lançar um erro', () => {
      expect(() => positivoNegativoOuNeurto('5')).to.throw(TypeError);
    });
  });
  describe('ao receber um número', () => {
    it('não deve lançar um erro', () => {
      expect(() => positivoNegativoOuNeurto(5)).not.to.throw();
    });
  });
});
