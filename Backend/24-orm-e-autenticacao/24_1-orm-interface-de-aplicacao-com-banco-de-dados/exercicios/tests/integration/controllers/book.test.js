const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../index');
const { Book } = require('../models');

describe('Busca todos os livros', () => {
  const findAllStub = stub(Book, 'findAll');
  describe('quando não existe nenhum livro cadastrado', () => {

    before(() => {
      findAllStub.resolves([]);
    });

    after(() => {
      findAllStub.reset();
      findAllStub.restore();
    });

    it('called Book.findAll', async () => {
      await chai.request(app)
        .get('/book');

      expect(Book.findAll.calledOnce).to.be.equals(true);
    });

    it('o status é 200', async () => {
      const result = await chai.request(app)
        .get('/book');

      expect(result.status).to.be.equals(200);
    });

    it('a resposta é um array', async () => {
      const result = await chai.request(app)
        .get('/book');

      expect(result.body).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const result = await chai.request(app)
        .get('/book');

      expect(result.body).to.be.empty;
    });
  });
  describe('quando existam livros cadastrados', () => {

    const data = [
      {
        "id": 1,
        "title": "Fundação",
        "author": "Isaac Asimov",
        "pageQuantity": 200,
        "createdAt": "2022-03-02T20:08:02.000Z"
      },
      {
        "id": 2,
        "title": "Duna",
        "author": "Frank Hebert",
        "pageQuantity": 400,
        "createdAt": "2022-03-02T20:08:02.000Z"
      }
    ]

    before(() => {
      findAllStub.resolves(data);
    });

    after(() => {
      findAllStub.restore();
    });

    it('o status é 200', async () => {
      const result = await chai.request(app)
        .get('/book');

      expect(result.status).to.be.equals(200);
    });

    it('a resposta é um array', async () => {
      const result = await chai.request(app)
        .get('/book');

      expect(result.body).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const result = await chai.request(app)
        .get('/book');

      expect(result.body).to.not.be.empty;
    });
   
    it('o array deve ter dois elementos', async () => {
      const result = await chai.request(app)
        .get('/book');

      expect(result.body).to.have.length(2);
    });
   
    it('cada elemento do array deve possuir as chaves "id", "title", "author", "pageQuantity", "createdAt"', async () => {
      const result = await chai.request(app)
        .get('/book');

      result.body.forEach(book => {
        expect(book).to.have.all.keys('id', 'title', 'author', 'pageQuantity', 'createdAt')
      })
    });
  })
});