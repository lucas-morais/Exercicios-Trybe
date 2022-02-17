const express = require('express');
const Authors = require('../models/Authors')

const router = express.Router();

router.get('/', async(req, res) => {
  const authors = await Authors.getAll();

  return res.status(200).json(authors);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Authors.findById(parseInt(id));
  if(!author) {
    return res.status(404).json({message: 'Not found'});
  }

  return res.status(200).json(author)
});

module.exports = router;
