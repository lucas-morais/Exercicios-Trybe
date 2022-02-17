const express = require('express');
const Books = require('../models/Books');

const router = express.Router();

router.get('/', async (req, res) => {
  const books = await Books.getAll();
  return res.status(200).json(books);
});

router.get('/:authorId', async (req, res) => {
  const { authorId } = req.params;
  
  const books = await Books.getBooksByAuthorId(parseInt(authorId));
  return res.status(200).json(books);
});

module.exports = router;