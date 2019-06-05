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
  console.log(req.body)
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

  Worker.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(worker =>{
    if(!worker){
      const hash = bcrypt.hashSync(workerData.password, 10)
      workerData.password = hash
      Worker.create(workerData)
      .then(worker => {
       let token = jwt.sign(worker.dataValues, process.env.SECRET_KEY,{
         expiresIn: '30m'
       })
      res.json({token: token})
      })
      .catch(err =>{
        res.send('error: ' + err)
      })

      }else{
        res.json({error: "User already exists"})
      }
  })
  .catch(err =>{
    res.send('error: ' + err)
  })
})

//Login
workers.post('/login' , (req,res) =>{
  console.log(req.body.password)
  console.log(req.body.email)
  
Worker.findOne({
  where: {
  email: req.body.email
  }
}).then(worker => {
  if(bcrypt.compareSync(req.body.password, worker.password)) {
    
    let token = jwt.sign(worker.dataValues, process.env.SECRET_KEY, {
      expiresIn: 1440
    })
    res.json({token: token})

  }else {
    res.send('user doensnt exist')
  }
}).catch(err => {
  res.send('error:' + err)
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
      res.json(worker)
    }else{
      res.send('User does not exist')
    }
  })
  .catch(err => {
    res.send('error:' + err)
  })
})


//GET ALL
workers.get('/all', async (req,res) => {
    res.send( await Workers.findAll())
  })
 
module.exports = workers;
