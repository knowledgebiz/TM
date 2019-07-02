const express = require("express")
const entitiesT = express.Router()
const cors = require('cors')
const controller = require('../projeto/controllers/entT.js');

entitiesT.post('/entitiesc', controller.create)
entitiesT.patch('/entitiesu', controller.update)
entitiesT.get('/entitiesa', controller.typeAll)
entitiesT.delete('/entitiesd', controller.delete)

module.exports = entitiesT;