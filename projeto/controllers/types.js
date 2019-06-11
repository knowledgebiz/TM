const types = require('../models/Types')
const async = require('async')
const Sequelize = require('sequelize')
const op = Sequelize.Op
module.exports = {
  create: (req,res) =>
  {
    var typesData= {
      type : req.body.type,

    }

          types.create(typesData)
          res.status(200).send()

  },

  update : async (req,res) => {
    if (req.body.id)
      {
        types.update({type : req.body.type,
        }
        , ({ where: { id: req.body.id } }))
        res.status(200).json(req.body)

      }else{
        res.status(422).send('Field is missing')
      }
    },

}
