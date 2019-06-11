const express = require("express")
const entitiesT = express.Router()
const cors = require('cors')
const controller = require('../projeto/controllers/entT.js');

entitiesT.post('/entities', controller.create)
entitiesT.patch('/entities', controller.update)
entitiesT.get('/entities', controller.typeAll)
entitiesT.delete('/entities', controller.delete)

module.exports = entitiesT;