const express = require("express")
const positions = express.Router()
const cors = require('cors')
const controller = require('../projeto/controllers/pos.js');

positions.post('/position', controller.create)
positions.patch('/position', controller.update)
positions.get('/position', controller.posAll)

module.exports = positions;