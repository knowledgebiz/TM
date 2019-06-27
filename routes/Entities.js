const express = require("express")
const entity = express.Router()
const cors = require('cors')
entity.use(cors())
const controller = require('../projeto/controllers/ent.js');


//Register 
entity.post('/entity', controller.register)

//Login
entity.post('/entityL', controller.login)

//PROFILE 
entity.get('/entityP',controller.profile)

//Update Fields
entity.patch('/entity', controller.update )

entity.post('/entity', controller.delete)
 
//GET ALL
  //Just get's all from DB including passwords etc(This is used for testing)
entity.get('/entity', controller.entAll)

module.exports = entity;
