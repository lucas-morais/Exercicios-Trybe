const express = require('express');
const rescue = require('express-rescue');
const { getTeams, createTeam } = require('../controllers/teamsController');
const teamsValidationMiddleware = require('../middlewares/teamsValidationMiddleware');

const router = express.Router();

router.get('/', getTeams);
router.post('/', teamsValidationMiddleware, rescue(createTeam));

module.exports = router;
