const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../api/app');


const { User } = require('../../app');
const { User: userMock } = require('./mock');

chai.use(chaiHttp);

describe('Insere um novo registro', () => {
  let createRequest = {};
  let firstUserList = [];
  let secondUserList = [];

  const newUser = {
    username: 'jane',
    password: 'senha123'
  }
  before(async () => {
    sinon.stub(User, 'create')
    .callsFake(userMock.findAll)

    firstUserList = await chai
      .request(server)
      .get('/api/users')
      .then(({body}) => body);
    createRequest = await chai
      .request(server)
      .post('/api/users')
      .send(newUser);
    secondUserList = await chai
      .request(server)
      .get('/api/users')
      .then(({body}) => body);

      await chai
      .request(server)
      .get('/api/users')
      .then(({body}) => body);
  });

  after(() => {
    User.create.restore();
  })
  it('firstUserList: A primeira requisição GET para a rota deve retornar 2 registros', () => {
    expect(firstUserList).to.have.length(2);
  });

  it('createRequest: A requisição POST para a rota retorna o código de status 201', () => {
    expect(createRequest).to.have.status(201);
  });

  it('createRequest: A requisição deve retornar um objeto no corpo da resposta', () => {
    expect(createRequest.body).to.be.a('object');
  });

  it('createRequest: O objeto possui a propriedade "message"', () => {
    expect(createRequest.body)
      .to.have.property('message');
  });

  it('createRequest: A propriedade "message" possui o texto "Novo usuário criado com sucesso"',
    () => {
      expect(createRequest.body.message)
        .to.be.equal('Novo usuário criado com sucesso');
    }
  );

  it('secondUserList: A segunda requisição GET para rota deve retornar, por tanto, 3 registros', () => {
      expect(secondUserList).to.have.length(3);
  });

  it('secondUserList: O registro criado deve corresponder ao enviado na requisição POST', () => {
      expect(secondUserList[2]).to.contain(newUser);
  })
})