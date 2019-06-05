const express = require("express")
const entity = express.Router()
const jwt = require("jsonwebtoken")
const cors = require('cors')
const bcrypt = require("bcryptjs")
const bootstrap = require('../migrations/bootstrap');
const Entity = require('../projeto/models/Entities')
const async = require('async')
process.env.SECRET_KEY = 'secret'
entity.use(cors())

//Register 
entity.post('/registerEntity', (req, res) =>{
  //Data about Entity
  var entityData  = {
      name : req.body.name,
      logo : req.body.logo,
      email: req.body.email,
      password: req.body.password,
      active: req.body.active,
      description: req.body.description,
      website_url: req.body.website_url,
      entities_types_id: req.body.entities_types_id,
      }
  //Searches for email = email
Entity.findOne({
      where: {
        email: req.body.email
      }
    })
  //After getting the email, this makes a verification 
  .then(entity =>{
    //If successful, it encrypts the password given by the company.
    if(!entity){
      const hash = bcrypt.hashSync(entityData.password, 10)
        entityData.password = hash
        /*At this point with all set and good, it will make a query to send all the data to the database, including 
        the token!*/
          Entity.create(entityData)
            .then(entity => {
              let token = jwt.sign(entity.dataValues, process.env.SECRET_KEY,{
                expiresIn: '30m'
  })
  res.json({token: token}) 
  })
  .catch(err =>{
    res.send('error: ' + err)
  })
  }else{
    //If the user is already in the database, this will be warning that the user will get.
    res.json({error: "Entity already exists"})
  }
})
  .catch(err =>{
    res.send('error: ' + err)
  })
})

//Login
entity.post('/loginEntity' , (req,res) =>{
 //Makes a query wich uses email = email 
  Entity.findOne({
    where: {
    email: req.body.email
  }
})
  .then(entity => {
    /* If successful, it will verify if the password provided by the company is the same as the one inside the database.
    If not goes down to User doesn't exist*/
    if(bcrypt.compareSync(req.body.password, entity.password)) {
      let token = jwt.sign(entity.dataValues, process.env.SECRET_KEY, {
        expiresIn: 1440
    })
    res.json({token: token})
    }else {
      res.send('Entity doesnt exist')
    }
})
  .catch(err => {
    res.send('error:' + err)
  })
})

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
        res.json(entity)
      }else{
      res.send('Entity does not exist')
      }
    })
      .catch(err => {
      res.send('error:' + err)
      })
})


//GET ALL
  //Just get's all from DB including passwords etc(This is used for testing)
entity.get('/allEntities', async (req,res) => {
  res.send( await Entity.findAll() )
  })

module.exports = entity;
