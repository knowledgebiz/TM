const express = require("express")
const vacancies = express.Router()
const cors = require('cors')
const controller = require('../projeto/controllers/vaca.js');

vacancies.post('/vacancies', controller.create)
vacancies.patch('/vacancies', controller.update)
vacancies.get('/vacancies', controller.vacaAll)
vacancies.post('/vacancies', controller.delete)

module.exports = vacancies;