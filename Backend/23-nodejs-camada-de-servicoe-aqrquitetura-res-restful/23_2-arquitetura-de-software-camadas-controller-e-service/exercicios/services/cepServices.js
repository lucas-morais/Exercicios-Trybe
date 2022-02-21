const Cep = require('../models/Cep');

errors = {
  notFound: { error: { code: 'notFound', message: 'CEP não encontrado' } },
};

function cepFormatterIn(cep) {
  return cep.replace('-', '');
}

function cepFormatterOut(cep) {
  const newCep = cep.split('');
  newCep.splice(5, 0, '-');
  return newCep.join('');
}

function enderecoFormatter(endereco) {
  return {
    cep: cepFormatterOut(endereco.cep),
    logradouro: endereco.logradouro,
    bairro: endereco.bairro,
    localidade: endereco.localidade,
    uf: endereco.uf,
  };
}

async function getAll() {
  const ceps = await Cep.getAll();
  return ceps;
}

async function getByCep(cep) {
  const endereco = await Cep.getByCep(cepFormatterIn(cep));
  if (!endereco) {
    return errors.notFound;
  }

  return enderecoFormatter(endereco);
}

async function createEndereco(endereco) {
  const newEndereco = enderecoFormatter(endereco);
  const res = await Cep.create(newEndereco);
  return res;
}
module.exports = { getByCep, createEndereco, getAll, cepFormatterIn };
