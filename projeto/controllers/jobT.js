const jobsT = require('../models/JobType')
const async = require('async')
const Sequelize = require('sequelize')
const op = Sequelize.Op
module.exports = {
create: (req,res) =>
{
var jobsTData= {
  type : req.body.type,
  }
  jobsT.create(jobsTData)
  res.status(200).send()
},

jobsTAll: async (req,res) => {
  res.send( await jobsT.findAll() )
  },

update : async (req,res) => {
  if (req.body.id)
  {
  jobsT.update({type : req.body.type,
  }
  , ({ where: { id: req.body.id } }))
  res.status(200).json(req.body)
  }else{
  res.status(422).send('Field is missing')
  }
},
}
