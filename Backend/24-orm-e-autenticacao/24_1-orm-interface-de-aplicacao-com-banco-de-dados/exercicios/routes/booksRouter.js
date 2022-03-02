const express = require('express');
const res = require('express/lib/response');
const BooksController = require('../controllers/booksController');

const router = express.Router();

router.get('/', BooksController.getAll);
router.get('/:id', BooksController.getById);
router.post('/', BooksController.create);
router.put('/:id', BooksController.update);
router.delete('/:id', BooksController.destroy);

module.exports = router;