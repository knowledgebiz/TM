const express = require("express")
const roles = express.Router()
const cors = require('cors')
const controller = require('../projeto/controllers/role.js');

roles.post('/roles', controller.create)
roles.patch('/roles', controller.update)
roles.get('/roles', controller.roleAll)

module.exports = roles;