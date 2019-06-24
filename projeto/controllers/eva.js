const eva = require('../models/Evaluators')
const async = require('async')
const Sequelize = require('sequelize')
const op = Sequelize.Op
module.exports = {
create: (req,res) =>
{
var evaData= {
  workers_id : req.body.workers_id,
  }
  eva.create(evaData)
  res.status(200).send()
},

update : async (req,res) => {
  if (req.body.id)
  {
  eva.update({ workers_id: req.body.workers_id
  }
  , ({ where: { id: req.body.id } }))
  res.status(200).json(req.body)
  }else{
  res.status(422).send('Field is missing')
  }
},

evaall: async (req,res) => {
  res.send( await eva.findAll() )
  },


delete : async (req,res) => {
  if( await eva.findOne({ where: { [op.and]: [{id: req.body.id}]}})  !=null ){
  eva.destroy(({ where: { id: req.body.id } }))
  res.status(200).json(req.body)
  }else{
  res.status(404).send('Not Found')
  }
  }
}
