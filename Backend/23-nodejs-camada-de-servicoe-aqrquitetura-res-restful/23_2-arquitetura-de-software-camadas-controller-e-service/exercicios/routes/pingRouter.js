const express = require('express');
const { getPong } = require('../controllers/pingController');

const router = express.Router();
router.get('/', getPong);

module.exports = router;