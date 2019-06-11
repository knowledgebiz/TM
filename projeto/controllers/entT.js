const entitiesT = require('../models/Entities_Types')
const async = require('async')
const Sequelize = require('sequelize')
const op = Sequelize.Op
module.exports = {
  create: (req,res) =>
  {
    var entitiesTData= {
      type : req.body.type,
    }
    //Makes a query where email = email
    entitiesT.findOne({
      where: {
      type: req.body.type
      }
    })
    .then(entities =>{
      //If successful, it will encrypt the worker data and send it to the BD.
      if(!entities){
          entitiesT.create(entitiesTData)
          res.status(200).send()
      }else{
        //If goes wrong, the user will receive this message.
        res.status(405).json({error: "Type already exists"})
      }
  })
    .catch(err =>{
      res.status(500).send('error: ' + err)
    })
  },

  update : async (req,res) => {
    if (req.body.id)
      {
        entitiesT.update({ type: req.body.type
        }
        , ({ where: { id: req.body.id } }))
        res.status(200).json(req.body)

      }else{
        res.status(422).send('Field is missing')
      }
    },

typeAll: async (req,res) => {
      res.send( await entitiesT.findAll() )
      },


    delete : async (req,res) => {
if( await entitiesT.findOne({ where: { [op.and]: [{id: req.body.id}]}})  !=null ){
     entitiesT.destroy(({ where: { id: req.body.id } }))
    res.status(200).json(req.body)
}else{
 res.status(404).send('Not Found')
      }
    }
}
