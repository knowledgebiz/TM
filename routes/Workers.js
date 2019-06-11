const express = require("express")
const workers = express.Router()
const cors = require('cors')
const async = require('async')
process.env.SECRET_KEY = 'secret'
const controller = require('../projeto/controllers/wrk.js');
workers.use(cors())

//Register
workers.post('/workers', controller.register )
//Login
workers.post('/workers' , controller.login)

//PROFILE
workers.get('/workers', controller.profile)

//Workers Update
workers.patch('/workers', controller.update )

workers.post('/workers', controller.delete )

//GET ALL
  //Gets all informations about the worker including passwords. This is used for testing.  
workers.get('/workers', controller.workers)
 
module.exports = workers;
