const express = require("express")
const cv = express.Router()
const controller = require('../projeto/controllers/cv.js');

cv.post('/cv', controller.create)


module.exports = cv;