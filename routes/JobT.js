const express = require("express")
const jobsT = express.Router()
const cors = require('cors')
const controller = require('../projeto/controllers/jobT.js');

jobsT.post('/jobsT', controller.create)
jobsT.patch('/jobsT', controller.update)
jobsT.get('/jobsT', controller.jobsTAll)
module.exports = jobsT;