const connection = require('./connection');

function serialize(user) {
  return { 
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name, 
    email: user.email,
  }
}



async function create( firstName, lastName, email, password ) {

  const [info] = await connection.execute(
    `INSERT INTO users (first_name, last_name, email, password)
      VALUES (?, ?, ?, ?)
    `,
    [firstName, lastName, email, password]
  );
  
  return { id: info.insertId, firstName, lastName, email} ;
}

async function getAll() {
  const [users] = await connection.execute(
    `SELECT
      id, first_name, last_name, email
    FROM
      users  
    `
  );
  return users.map(serialize)
}

async function getById(id) {
  const [user] = await connection.execute(
    `SELECT
      id, first_name, last_name, email
    FROM
      users
    WHERE
      id = ?
    `, [id]
  );
  return serialize(user[0]);
}

async function getById(id) {
  const [user] = await connection.execute(
    `SELECT
      id, first_name, last_name, email
    FROM
      users
    WHERE
      id = ?
    `, [id]
  );
  return serialize(user[0]);
}

async function update(firstName, lastName, email, password, id) {
  const [user] = await connection.execute(
    `UPDATE
      users
    SET
      first_name = ?, 
      last_name = ?, 
      email = ?,
      password = ?
    WHERE
      id = ?
    `, [firstName, lastName, email, password, id]
  );
  return user.affectedRows ? {
    id, firstName,lastName, email
  } : false;
}

module.exports = {
  create,
  getAll,
  getById,
  update
}