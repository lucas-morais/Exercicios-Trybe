const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../models/connection')
const MoviesModel = require('../../models/movieModel');


describe('Insere um novo filme no BD', () =>{
  const payloadMovie = {
    title: 'Example movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999
  }

  before(async () => {
    const execute = [{ insertedId: 1}]
    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  })
  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);
      expect(response).to.be.an('object');
    })
    it('tal objeto possui o "id" do novo filme', async () => {
      const response = await MoviesModel.create(payloadMovie);
      expect(response).to.be.a.property('id');
    })
  })
});

describe('Busca um filme no BD pelo "id"', () => {
  
})
