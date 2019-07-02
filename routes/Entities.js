const express = require("express")
const entity = express.Router()
const cors = require('cors')
entity.use(cors())
const controller = require('../projeto/controllers/ent.js');


//Register 
entity.post('/entityr', controller.register)

//Login
entity.post('/entityl', controller.login)

//PROFILE 
entity.get('/entityp',controller.profile)

//Update Fields
entity.patch('/entityu', controller.update )

entity.post('/entityd', controller.delete)
 
//GET ALL
  //Just get's all from DB including passwords etc(This is used for testing)
entity.get('/entitya', controller.entAll)

module.exports = entity;
