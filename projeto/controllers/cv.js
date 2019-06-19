const Cv = require('../models/CVS')
const async = require('async')
const Sequelize = require('sequelize')
const op = Sequelize.Op
module.exports = {
  create: (req,res) =>
  {
  var cvData= {
    cv : req.body.cv,
    workers_id: req.body.workers_id
  }

  //Makes a query where department = department
  Cv.findOne({
    where: {
    cv: req.body.cv
    }
  })
    .then(cv =>{
    //If successful, it will encrypt the worker data and send it to the BD.
    if(!cv){
      Cv.create(cvData)
      res.status(200).send()
    }else{
    //If goes wrong, the user will receive this message.
    res.status(405).json({error: "Curriculum already exists"})
    }
  })
    .catch(err =>{
      res.status(500).send('error: ' + err)
    })
  },
}
