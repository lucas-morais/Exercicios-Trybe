const { Book } = require('../models');


async function getAll() {
  const books = await Book.findAll({
    order: [
      ['title'],
      ['created_at']
    ]
  });
  return books; 
}

async function getById(id) {
  const book = await Book.findByPk(id);
  return book; 
}

function formatBook(book) {
  return {
    title: book.title,
    author: book.author,
    pageQuantity: book.pageQuantity,
    createdAt: new Date(),
  }
}

async function create(book) {
  const newBook = formatBook(book)
  const bookCreated = await Book.create(newBook);
  return bookCreated; 
}


async function update(updateFields, id) {
  const updatedAt = new Date()
  const bookUpdated = await Book.update(
    {
      ...updateFields,
      updatedAt,
    },
    { where: { id }},
  );
  return bookUpdated; 
}
async function destroy(id) {
  const bookUpdated = await Book.destroy({
    where: {id}
  })
  return bookUpdated; 
}

async function getByAuthor(author) {
  const books = await Book.findAll(
    {
      where: { author }
    }
  )
  return books; 
}


module.exports = { getAll, getById, create, update, destroy, getByAuthor }