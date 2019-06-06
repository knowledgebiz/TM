const express = require("express")
const workers = express.Router()
const jwt = require("jsonwebtoken")
const cors = require('cors')
const bcrypt = require("bcryptjs")
const bootstrap = require('../migrations/bootstrap');
const Worker = require('../projeto/models/Workers')
const async = require('async')
process.env.SECRET_KEY = 'secret'
workers.use(cors())

//Register
workers.post('/register', (req, res) =>{
  //Workers Data
  var workerData= {
    name : req.body.name,
    email : req.body.email,
    password : req.body.password,
    active: req.body.active,
    entities_id: req.body.entities_id,
    type_id: req.body.type_id,
    position_id: req.body.position_id,
    department_id: req.body.department_id,
    teams_id: req.body.teams_id,
    experience_levels_id: req.body.experience_levels_id 
  }
  //Makes a query where email = email
  Worker.findOne({
    where: {
    email: req.body.email
    }
  })
  .then(worker =>{
    //If successful, it will encrypt the worker data and send it to the BD.
    if(!worker){
      const hash = bcrypt.hashSync(workerData.password, 10)
        workerData.password = hash
        Worker.create(workerData)
          .then(worker => {
          let token = jwt.sign(worker.dataValues, process.env.SECRET_KEY,{
           expiresIn: '30m'
          })
          res.status(200).json({token: token})
          })
            .catch(err =>{
              res.status(500).send('error: ' + err)
            })
    }else{
      //If goes wrong, the user will receive this message.
      res.status(405).json({error: "User already exists"})
    }
})
  .catch(err =>{
    res.status(500).send('error: ' + err)
  })
})

//Login
workers.post('/login' , (req,res) =>{

  Worker.findOne({
   where: {
    email: req.body.email
  }
})
  .then(worker => {
    if(bcrypt.compareSync(req.body.password, worker.password)) { 
      let token = jwt.sign(worker.dataValues, process.env.SECRET_KEY, {
        expiresIn: 1440
      })
        res.json({token: token})
    }else {
      res.status(404).send('user dont exist')
    }
  }).catch(err => {
      res.status(500).send('error:' + err)
    })
})

//PROFILE
workers.get('/profile', (req, res) =>{
  const decoded = jwt.verify(req.headers[authorization], process.env.SECRET_KEY)
  Worker.findOne({
    where: {
      id: decoded.id
    }
  })
  .then(worker =>{
    if(worker) {
      res.status(200).json(worker)
    }else{
      res.status(404).send('User does not exist')
    }
  })
  .catch(err => {
    res.status(500).send('error:' + err)
  })
})
/*
workers.post('/updateWorker' , (req,res) =>{

  Worker.findOne({
   where: {
    id: req.body.id
  }
})
  .then(worker => {
    if(req.body.name && req.body.id && req.body.email)) { 
      Worker.update({name: req.body.name, email: req.body.email })
      })
        res.json({})
    }else {
      res.status(404).send('user dont exist')
    }
  }).catch(err => {
      res.status(500).send('error:' + err)
    })
})
*/




//GET ALL
  //Gets all informations about the worker including passwords. This is used for testing.  
workers.get('/all', async (req,res) => {
  res.status(200).send( await Worker.findAll())
  })
 
module.exports = workers;
