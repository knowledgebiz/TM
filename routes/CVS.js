const express = require("express")
const cv = express.Router()
const controller = require('../projeto/controllers/dpr.js');

cv.post(''
, controller.create)
cv.patch('/cv', controller.update)
cv.get('/cv', controller.All)
cv.delete('/cv', controller.delete)

module.exports = cv;