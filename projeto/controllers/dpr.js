const Department = require('../models/Department')
const async = require('async')
const Sequelize = require('sequelize')
const op = Sequelize.Op
module.exports = {
  create: (req,res) =>
{

var departmentData= {
  department : req.body.department,
}

//Makes a query where department = department
Department.findOne({
  where: {
  department: req.body.department
  }
})
  .then(depart =>{
  //If successful, it will encrypt the worker data and send it to the BD.
  if(!depart){
    Department.create(departmentData)
    res.status(200).send()
  }else{
  //If goes wrong, the user will receive this message.
  res.status(405).json({error: "Department already exists"})
  }
})
  .catch(err =>{
    res.status(500).send('error: ' + err)
  })
},

update : async (req,res) => {
  if (req.body.id)
  {
  Department.update({active: req.body.active, department: req.body.department
  }
  , ({ where: { id: req.body.id } }))
  res.status(200).json(req.body)
  }else{
  res.status(422).send('Field is missing')
  }
},

dprAll: async (req,res) => {
  res.send( await Department.findAll() )
  },

delete : async (req,res) => {
  if( await Entity.findOne({ where: { [op.and]: [{id: req.body.id}]}})  !=null ){
  Department.update({active: req.body.active}
  , ({ where: { id: req.body.id } }))
  res.status(200).json(req.body)
  }else{
  res.status(404).send('Not Found')
  }
}
}
