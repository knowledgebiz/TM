const jobsP = require('../models/JobsP')
const async = require('async')
const Sequelize = require('sequelize')
const op = Sequelize.Op
module.exports = {
create: (req,res) =>
{
var jobsPData= {
  fav_techs : req.body.fav_techs,
  disliked_techs: req.body.disliked_techs,
  prefered_industries: req.body.prefered_industries,
  unwanted_industries: req.body.unwanted_industries,
  workers_id: req.body.workers_id,
  role_id: req.body.role_id,
  experience_levels_id:req.body.experience_levels_id,
  job_type_id:req.body.job_type_id
  }
  jobsP.create(jobsPData)
  res.status(200).send()
  },

update : async (req,res) => {
  if (req.body.id)
  {
  jobsP.update({fav_techs : req.body.fav_techs,
  disliked_techs: req.body.disliked_techs,
  prefered_industries: req.body.prefered_industries,
  unwanted_industries: req.body.unwanted_industries,
  workers_id: req.body.workers_id,
  department_id:req.body.department_id,
  experience_levels_id:req.body.experience_levels_id,
  position_id:req.body.position_id,
  type_id:req.body.type_id
  }
  , ({ where: { id: req.body.id } }))
  res.status(200).json(req.body)
  }else{
  res.status(422).send('Field is missing')
  }
},

jobsPAll: async (req,res) => {
  res.send( await jobsP.findAll() )
  },
}
