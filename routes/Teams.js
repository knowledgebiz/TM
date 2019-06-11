const express = require("express")
const teams = express.Router()
const cors = require('cors')
const controller = require('../projeto/controllers/teams.js');

teams.post('/teams', controller.create)
teams.patch('/teams', controller.update)
teams.delete('/teams', controller.delete)

module.exports = teams;