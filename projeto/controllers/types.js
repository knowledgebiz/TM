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
typesall: async (req,res) => {
  res.send( await types.findAll() )
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
delete : async (req,res) => {
  if( await team.findOne({ where: { [op.and]: [{id: req.body.id}]}})  !=null ){
  types.destroy({ where: { id: req.body.id } })
  res.status(200).json(req.body)
  }else{
  res.status(404).send('Not Found')
  }
  }
}
