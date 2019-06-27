const express = require("express")
const depart = express.Router()
const controller = require('../projeto/controllers/dpr.js');

depart.post('/departc', controller.create)
depart.patch('/departu', controller.update)
depart.get('/departa', controller.dprAll)
depart.post('/departd', controller.delete)

module.exports = depart;