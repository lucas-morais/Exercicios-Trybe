const express = require('express');
const { cepValidationMiddleware } = require('../middlewares/cepMiddleware');
const cepController = require('../controllers/cepController');

const router = express.Router();

router.get('/', cepController.getAll);
router.get('/:cep', cepValidationMiddleware, cepController.getByCep);
router.post('/', cepController.create);


module.exports = router;