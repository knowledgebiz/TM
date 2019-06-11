const Vacancies = require('../models/Vacancies')
const async = require('async')
const Sequelize = require('sequelize')
const op = Sequelize.Op
module.exports = {
  create: (req,res) =>
  {
    var vacanciesData= {
      title: req.body.title,
      description: req.body.description,
      remote: req.body.remote,
      experience_levels_id: req.body.experience_levels_id,
      job_type_id: req.body.job_type_id,
      roles_id: req.body.roles_id,
      entities_id: req.body.entities_id
    }
          Vacancies.create(vacanciesData)
          res.status(200).send()

  },

  update : async (req,res) => {
    if (req.body.id && req.body.active)
      {
        Vacancies.update({active: req.body.active,  title: req.body.title,
          description: req.body.description,
          remote: req.body.remote,
          experience_levels_id: req.body.experience_levels_id,
          job_type_id: req.body.job_type_id,
          roles_id: req.body.roles_id,
          entities_id: req.body.entities_id
        }
        , ({ where: { id: req.body.id } }))
        res.status(200).json(req.body)

      }else{
        res.status(422).send('Field is missing')
      }
    },

vacaAll: async (req,res) => {
      res.send( await Vacancies.findAll() )
      },


    delete : async (req,res) => {
if( await Vacancies.findOne({ where: { [op.and]: [{id: req.body.id}]}})  !=null ){
     Vacancies.update({active: req.body.active}
    , ({ where: { id: req.body.id } }))
    res.status(200).json(req.body)
}else{
 res.status(404).send('Not Found')
      }
    }
}
