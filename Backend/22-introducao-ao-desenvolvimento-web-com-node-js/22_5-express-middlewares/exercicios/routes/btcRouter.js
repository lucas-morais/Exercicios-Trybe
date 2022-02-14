const express = require('express');
const rescue = require('express-rescue')
const authMiddleware = require('../middlewares/authMiddleware')
const getPrice = require('../controllers/btcController');

const router =  express.Router();

router.get('/price', authMiddleware, rescue(getPrice));


module.exports = router;