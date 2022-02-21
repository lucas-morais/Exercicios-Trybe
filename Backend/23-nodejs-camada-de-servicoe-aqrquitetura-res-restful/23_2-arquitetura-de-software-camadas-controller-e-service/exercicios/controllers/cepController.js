const cepServices = require('../services/cepServices');

async function getByCep(req, res) {
  const { cep } = req.params;
  const cepInfo = await cepServices.getByCep(cep);

  if(cepInfo.error) {
    return res.status(404).json(cepInfo.error)
  }
  
  return res.status(200).json(cepInfo);
}

async function getAll(_req, res) {
  const enderecos = await cepServices.getAll();
  return res.status(200).json(enderecos);
}

async function create(req, res) {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const newEndereco = { cep, logradouro, bairro, localidade, uf };
  await cepServices.createEndereco(newEndereco);
  return res.status(201).json(newEndereco);
}

module.exports = { getByCep, getAll, create };
