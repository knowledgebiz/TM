const pos = require('../models/Positions')
const async = require('async')
const Sequelize = require('sequelize')
const op = Sequelize.Op
module.exports = {
  create: (req,res) =>
  {
    var posData= {
      position : req.body.position,

    }

          pos.create(posData)
          res.status(200).send()

  },
  posAll: async (req,res) => {
    res.send( await pos.findAll() )
    },

  update : async (req,res) => {
    if (req.body.id)
      {
        pos.update({position : req.body.position,
        }
        , ({ where: { id: req.body.id } }))
        res.status(200).json(req.body)

      }else{
        res.status(422).send('Field is missing')
      }
    },

}
