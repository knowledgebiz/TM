const express = require("express")
const evaluators = express.Router()
const cors = require('cors')
const controller = require('../projeto/controllers/eva.js');

evaluators.post('/eva', controller.create)
evaluators.patch('/eva', controller.update)
evaluators.get('/eva', controller.evaall)
evaluators.delete('/eva', controller.delete)

module.exports = evaluators;