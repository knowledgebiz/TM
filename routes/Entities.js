const express = require("express")
const entity = express.Router()
const cors = require('cors')
const bootstrap = require('../migrations/bootstrap');
const Entity = require('../projeto/models/Entities')
entity.use(cors())
const controller = require('../projeto/controllers/ent.js');


//Register 
entity.post('/registerEntity', controller.register)

//Login
entity.post('/loginEntity', controller.login)

//PROFILE 
entity.get('/profileEntity', (req, res) =>{
  //Simple Verification
  const decoded = jwt.verify(req.headers[authorization], process.env.SECRET_KEY)
  Entity.findOne({
    where: {
    id: decoded.id
    }
  })
    .then(entity =>{
      if(entity) {
        res.status(200).json(entity)
      }else{
      res.status(404).send('Entity does not exist')
      }
    })
      .catch(err => {
      res.status(500).send('error:' + err)
      })
})


 entity.patch('/entity', controller.update )
 


//GET ALL
  //Just get's all from DB including passwords etc(This is used for testing)
entity.get('/entities', controller.entAll)

module.exports = entity;
