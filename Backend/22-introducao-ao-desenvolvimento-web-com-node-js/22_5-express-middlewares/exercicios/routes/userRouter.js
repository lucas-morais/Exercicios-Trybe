const express = require('express');
const { createUser, login } = require('../controllers/userController');
const { userValidationMiddleware, loginValidationMiddleware }= require('../middlewares/userValidationMiddleware');

const router = express.Router()



router.post('/register', userValidationMiddleware, createUser)
router.post('/login', loginValidationMiddleware, login)

module.exports = router;