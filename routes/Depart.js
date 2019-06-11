const express = require("express")
const depart = express.Router()
const controller = require('../projeto/controllers/dpr.js');

depart.post('/depart', controller.create)
depart.patch('/depart', controller.update)
depart.get('/depart', controller.dprAll)
depart.post('/depart', controller.delete)

module.exports = depart;