const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');


const nomeDoArquivo = 'arquivo.txt';
const conteudo = 'teste'
const escreveArquivo = require('../escreveArquivo')


describe('Função que realiza escrita de arquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  })
  after(() => {
    fs.writeFileSync.restore();
  })
  describe('se a escrita foi bem sucedida', () => {
    it('deve retornar uma string', () => {
      const resultado = escreveArquivo(nomeDoArquivo, conteudo)
      expect(resultado).to.be.a('string');
    })
    it('deve retornar o valor "ok"', () => {
      const resultado = escreveArquivo(nomeDoArquivo, conteudo)
      expect(resultado).to.be.equal('ok');
    })
  
  })
})