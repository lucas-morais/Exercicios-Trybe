const connection = require('./connection');

async function getAll() {
  const [enderecos] = await connection.execute(`
    SELECT 
      *
    FROM
      ceps; 
  `);
  return enderecos;
}

async function getByCep(cep) {
  const [ceps] = await connection.execute(
    `
    SELECT 
      *
    FROM
      ceps
    WHERE
      cep = ?;
  `,
    [cep]
  );
  return ceps[0];
}


async function create(endereco) {
  const { cep, lograoduro, bairro, localidade, uf} = endereco
  const[res] = await connection.execute(`
    INSERT INTO
      ceps (cep, logradouro, bairro, localidade ,uf);
    VALUES
      (?, ?, ?, ?, ?)
  `, [cep, lograoduro, bairro, localidade, uf]);

  return res;
} 
module.exports = { getAll, getByCep, create };
