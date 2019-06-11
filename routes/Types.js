const express = require("express")
const types = express.Router()
const cors = require('cors')
const controller = require('../projeto/controllers/types.js');

types.post('/type', controller.create)
types.patch('/type', controller.update)

module.exports = types;