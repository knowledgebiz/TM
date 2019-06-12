const role = require('../models/Roles')
const async = require('async')
const Sequelize = require('sequelize')
const op = Sequelize.Op
module.exports = {
create: (req,res) =>
{
var roleData= {
  role : req.body.role,
}
  role.create(roleData)
  res.status(200).send()
},

roleAll: async (req,res) => {
  res.send( await role.findAll() )
  },

update : async (req,res) => {
  if (req.body.id)
  {
  role.update({role : req.body.role,
  }
  , ({ where: { id: req.body.id } }))
  res.status(200).json(req.body)
  }else{
  res.status(422).send('Field is missing')
  }
},
}
