const Entity = require('../models/Entities')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const async = require('async')
const Sequelize = require('sequelize')
const op = Sequelize.Op
process.env.SECRET_KEY = 'Blyat'
module.exports = {

update : async (req,res) => {
  if (req.body.name && req.body.email)
  {
  Entity.update({name: req.body.name ,  email: req.body.email, active: req.body.active,
  logo: req.body.logo, password: req.body.password, description: req.body.description,
  website_url: req.body.website_url, entities_types_id: req.body.entities_types_id
  }
  , ({ where: { id: req.body.id } }))
  res.status(200).json(req.body)
  }else{
  res.status(422).send('Field is missing')
  }
},

register: (req, res) => {
  //Workers Data
  var entData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    active: req.body.active,
    description: req.body.description,
    website_url: req.body.website_url,
    entities_types_id: req.body.entities_types_id,
  }
  //Makes a query where email = email
  Entity.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(ent => {
      //If successful, it will encrypt the worker data and send it to the BD.
      if (!ent) {
        /** daleixo update */
        bcrypt.hash(entData.password, 10, function (err, resultHash) {
          if (!err) {
            entData.password = resultHash;
            Entity.create(entData)
              .then(ent => {
                let tokenPayloadEntity = {
                  id: ent.dataValues.id,
                  name: ent.dataValues.name,
                  active: ent.dataValues.active
                }

                let token = jwt.sign(tokenPayloadEntity, process.env.SECRET_KEY, {
                  expiresIn: '30m'
                })
                res.status(200).json({ token: token })
              })
              .catch(err => {
                res.status(500).send('error: ' + err)
              })
          } else {

            res.status(500).send('Internal error');
          }
        })
        const hash = bcrypt.hashSync(entData.password, 10)

      } else {
        //If goes wrong, the user will receive this message.
        res.status(405).json({ error: "Entity already exists" })
      }
    })
    .catch(err => {
      res.status(500).send('error: ' + err)
    })
},

login: (req, res) => {
  Entity.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(ent => {
      if (bcrypt.compareSync(req.body.password, ent.dataValues.password)) {
        let tokenPayload = {
          id: ent.dataValues.id,
          name: ent.dataValues.name,
          active: ent.dataValues.active,
          description: ent.dataValues.description,
          entities_types_id: ent.dataValues.entities_types_id
        }
        let token = jwt.sign(tokenPayload, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.json({ token: token })
      } else {
        res.status(404).send('user doesnt exist')
      }
    })
    .catch(err => {
      res.status(500).send('error:' + err)
    })
},

profile: (req, res) =>{
  //Simple Verification
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  Entity.findOne({
  where: {
  id: decoded.id
  }
})
  .then(entity =>{
  if(entity) {
  res.status(200).json(entity)
  }else{
  res.status(404).send('Entity does not exist')
  }
})
  .catch(err => {
  res.status(500).send('error:' + err)
  })
},

delete : async (req,res) => {
  if( await Entity.findOne({ where: { [op.and]: [{id: req.body.id}]}})  !=null ){
  Entity.update({active: req.body.active}
  , ({ where: { id: req.body.id } }))
  res.status(200).json(req.body)
  }else{
  res.status(404).send('Not Found')
  }
},

entAll: async (req,res) => {
  res.send( await Entity.findAll() )
  },
}
