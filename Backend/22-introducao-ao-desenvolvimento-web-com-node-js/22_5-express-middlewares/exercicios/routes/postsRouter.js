const express = require('express');
const { getPostById, getPosts } = require('../controllers/postsController');
const postIdValidate = require('../middlewares/postMiddleware');

const router = express.Router()

router.get('/', getPosts)
router.get('/:id', postIdValidate, getPostById)
module.exports = router;