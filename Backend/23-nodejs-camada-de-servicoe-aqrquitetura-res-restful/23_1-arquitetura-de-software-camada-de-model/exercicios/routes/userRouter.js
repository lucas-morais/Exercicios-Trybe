const express = require('express');
const userController = require('../controller/userController');
const userValidationMiddleware = require('../middleware/userValidationMiddleware');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById)
router.post('/', userValidationMiddleware, userController.createUser);
router.put('/:id', userValidationMiddleware, userController.updateUser)

module.exports = router;
