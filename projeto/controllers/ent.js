const Entity = require('../models/Entities')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const async = require('async')
process.env.SECRET_KEY = 'secret'
module.exports = {

update : async(req,res) => {
    if (req.body.name && req.body.email )
      {
        console.log('query', req.query);
        console.log('---' , req.body)
        console.log('params', req.params);
        Entity.update({name: req.body.name ,  email: req.body.email
        }
        , ({ where: { id: req.body.id } }))

        console.log(JSON.stringify(req.body))
        res.status(200).json(req.body)

      }else{
        res.status(422).send('Field is missing')
      }

    },
entAll: async (req,res) => {
      res.send( await Entity.findAll() )
      },

register:      (req, res) =>{
        //Data about Entity
        var entityData  = {
            id: req.body.id,
            name : req.body.name,
            logo : req.body.logo,
            email: req.body.email,
            password: req.body.password,
            active: req.body.active,
            description: req.body.description,
            website_url: req.body.website_url,
            entities_types_id: req.body.entities_types_id,
            }
        //Searches for email = email
      Entity.findOne({
            where: {
              email: req.body.email
            }
          })
        //After getting the email, this makes a verification
        .then(entity =>{
          //If successful, it encrypts the password given by the company.
          if(!entity){
            const hash = bcrypt.hashSync(entityData.password, 10)
              entityData.password = hash
              /*At this point with all set and good, it will make a query to send all the data to the database, including
              the token!*/
                Entity.create(entityData)
                  .then(entity => {
                    let token = jwt.sign(entity.dataValues, process.env.SECRET_KEY,{
                      expiresIn: '30m'
        })
        res.status(200).json({token: token})
        })
        .catch(err =>{
          res.status(500).send('error: ' + err)
        })
        }else{
          //If the user is already in the database, this will be warning that the user will get.
          res.status(405).json({error: "Entity already exists"})
        }
      })
        .catch(err =>{
          res.status(500).send('error: ' + err)
        })
      },

login: (req,res) =>{
      //Makes a query wich uses email = email
       Entity.findOne({
         where: {
         email: req.body.email
       }
     })
       .then(entity => {
         /* If successful, it will verify if the password provided by the company is the same as the one inside the database.
         If not goes down to Entity doesn't exist*/
         if(bcrypt.compareSync(req.body.password, entity.password)) {
           let token = jwt.sign(entity.dataValues, process.env.SECRET_KEY, {
             expiresIn: 1440
         })
         res.status(200).json({token: token})
         }else {
           res.status(404).send('Entity doesnt exist')
         }
     })
       .catch(err => {
         res.status(500).send('error:' + err)
       })
     }
    }
