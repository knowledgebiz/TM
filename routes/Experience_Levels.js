const express = require("express")
const expL = express.Router()
const cors = require('cors')
const controller = require('../projeto/controllers/expL.js');

expL.post('/exp', controller.create)
expL.patch('/exp', controller.update)
expL.get('/exp', controller.expLAll)
expL.delete('/exp', controller.delete)

module.exports = expL;