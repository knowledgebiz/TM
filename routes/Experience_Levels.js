const express = require("express")
const expL = express.Router()
const cors = require('cors')
const controller = require('../projeto/controllers/expL.js');

expL.post('/expc', controller.create)
expL.patch('/expu', controller.update)
expL.get('/expa', controller.expLAll)
expL.delete('/expd', controller.delete)

module.exports = expL;