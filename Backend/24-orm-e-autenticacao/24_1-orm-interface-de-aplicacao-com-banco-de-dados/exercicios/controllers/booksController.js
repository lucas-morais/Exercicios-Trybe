const BooksServices = require('../services/booksServices');
async function getAll(_req, res, next) {
  try{
    const books = await BooksServices.getAll();
    return res.status(200).json(books);
  } catch(e) {
    next(e);
  }
}

async function getById(req, res, next) {
  const { id } = req.params;
  try{
    const book = await BooksServices.getById(Number(id));
    return res.status(200).json(book);
  } catch(e) {
    next(e);
  }
}
async function create(req, res, next) {
  const {title, author, pageQuantity} = req.body;
  try{
    const book = await BooksServices.create({ title, author, pageQuantity});
    return res.status(200).json(book);
  } catch(e) {
    next(e);
  }
}

async function update(req, res, next) {
  const {id} = req.params;
  const {title, author, pageQuantity } = req.body;
  const updateFields = {title, author, pageQuantity}
  try{
    const updated = await BooksServices.update(updateFields, Number(id));
    if(!update) {
      return res.status(404).json({message: 'Book not found'})
    }
    return res.status(200).json({message: 'Book updated'});
  } catch(e) {
    next(e);
  }
}

async function destroy(req, res, next) {
  const {id} = req.params;
  
  try{
    const deleted = await BooksServices.destroy(Number(id));
    if(!deleted) {
      return res.status(404).json({message: 'Book not found'})
    }
    return res.status(200).json({message: 'Book deleted'});
  } catch(e) {
    next(e);
  }
}



module.exports = { getAll, getById, create, update, destroy }