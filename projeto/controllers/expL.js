const expL = require('../models/ExpLevels')
const async = require('async')
const Sequelize = require('sequelize')
const op = Sequelize.Op
module.exports = {
create: (req,res) =>
{
var expLData= {
  experience_level : req.body.experience_level,
  }
  //Makes a query where email = email
  expL.findOne({
  where: {
  experience_level: req.body.experience_level
  }
})
  .then(exp =>{
  //If successful, it will encrypt the worker data and send it to the BD.
  if(!exp){
  expL.create(expLData)
  res.status(200).send()
  }else{
  //If goes wrong, the user will receive this message.
  res.status(405).json({error: "Level of experience already exists"})
  }
})
  .catch(err =>{
  res.status(500).send('error: ' + err)
  })
},

update : async (req,res) => {
  if (req.body.id)
  {
  expL.update({experience_level: req.body.experience_level
  }
  , ({ where: { id: req.body.id } }))
  res.status(200).json(req.body)
  }else{
  res.status(422).send('Field is missing')
  }
},

expLAll: async (req,res) => {
  res.send( await expL.findAll() )
  },

delete : async (req,res) => {
  if( await expL.findOne({ where: { [op.and]: [{id: req.body.id}]}})  !=null ){
  expL.destroy({ where: { id: req.body.id } })
  res.status(200).json(req.body)
  }else{
  res.status(404).send('Not Found')
  }
}
}
