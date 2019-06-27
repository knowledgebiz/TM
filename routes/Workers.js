const express = require("express")
const workers = express.Router()
const cors = require('cors')
const async = require('async')
const controller = require('../projeto/controllers/wrk.js');
workers.use(cors())

//Register
workers.post('/workersr', controller.register)
//Login
workers.post('/workersl', controller.login)

//PROFILE
workers.get('/workersp', controller.profile)

//Workers Update
workers.patch('/workersu', controller.update)

workers.post('/workersd', controller.delete)

//GET ALL
//Gets all informations about the worker including passwords. This is used for testing.  
workers.get('/workersg', controller.workers)

module.exports = workers;
