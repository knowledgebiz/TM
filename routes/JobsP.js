const express = require("express")
const jobsP = express.Router()
const cors = require('cors')
const controller = require('../projeto/controllers/jobP.js');

jobsP.post('/jobsP', controller.create)
jobsP.patch('/jobsP', controller.update)
jobsP.get('/jobsP', controller.jobsPAll)

module.exports = jobsP;