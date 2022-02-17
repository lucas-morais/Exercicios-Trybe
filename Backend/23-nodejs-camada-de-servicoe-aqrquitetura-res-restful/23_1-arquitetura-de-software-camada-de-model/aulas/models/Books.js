const connection = require('./connection')

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
})

const getAll = async () => {
  const [books] = await connection.execute(
    `SELECT 
      id, title, author_id
    FROM
      books
    `
  );
  return books.map(serialize);
};

const getBooksByAuthorId = async (id) => {
  const [books] = await connection.execute(
    `SELECT 
      id, title
    FROM
      books
    WHERE
      author_id = ${id}
    `
  );
  return books
}

module.exports  = {
  getAll,
  getBooksByAuthorId
};