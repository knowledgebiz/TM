const team = require('../models/Teams')
const async = require('async')
const Sequelize = require('sequelize')
const op = Sequelize.Op
module.exports = {
  create: (req,res) =>
  {
    var teamsData= {
      entities_id: req.body.entities_id
    }

          team.create(teamsData)
          res.status(200).send()

  },
  teamsAll: async (req,res) => {
    res.send( await team.findAll() )
    },

  update : async (req,res) => {
    if (req.body.id)
      {
        team.update({role : req.body.entities_id          ,
        }
        , ({ where: { id: req.body.id } }))
        res.status(200).json(req.body)

      }else{
        res.status(422).send('Field is missing')
      }
    },
    delete : async (req,res) => {
      if( await team.findOne({ where: { [op.and]: [{id: req.body.id}]}})  !=null ){
           team.destroy({ where: { id: req.body.id } })
          res.status(200).json(req.body)
      }else{
       res.status(404).send('Not Found')
            }
          }
}
