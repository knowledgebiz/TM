const Worker = require('../models/Workers')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const async = require('async')
const Sequelize = require('sequelize')
const op = Sequelize.Op
module.exports = {
  register: (req, res) => {
    //Workers Data
    var workerData = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      active: req.body.active,
      entities_id: req.body.entities_id,
      type_id: req.body.type_id,
      position_id: req.body.position_id,
      department_id: req.body.department_id,
      teams_id: req.body.teams_id,
      experience_levels_id: req.body.experience_levels_id
    }
    //Makes a query where email = email
    Worker.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(worker => {
        //If successful, it will encrypt the worker data and send it to the BD.
        if (!worker) {
          /** daleixo update */
          bcrypt.hash(workerData.password, 10, function (err, resultHash) {
            if (!err) {
              workerData.password = resultHash;
              Worker.create(workerData)
                .then(worker => {
                  let tokenPayload = {
                    id: worker.dataValues.id,
                    name: worker.dataValues.name,
                    active: worker.dataValues.active
                  }

                  let token = jwt.sign(tokenPayload, process.env.SECRET_KEY || 'awesomesecret', {
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
          const hash = bcrypt.hashSync(workerData.password, 10)

        } else {
          //If goes wrong, the user will receive this message.
          res.status(405).json({ error: "User already exists" })
        }
      })
      .catch(err => {
        res.status(500).send('error: ' + err)
      })
  },

  update: async (req, res) => {
    if (req.body.id) {
      Worker.update({
        name: req.body.name, email: req.body.email, active: req.body.active,
        password: req.body.password, entities_id: req.body.entities_id,
        type_id: req.body.type_id,
        position_id: req.body.position_id,
        department_id: req.body.department_id,
        teams_id: req.body.teams_id,
        experience_levels_id: req.body.experience_levels_id
      }
        , ({ where: { id: req.body.id } }))
      res.status(200).json(req.body)
    } else {
      res.status(422).send('Field is missing')
    }
  },

  login: (req, res) => {
    Worker.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(worker => {
        if (bcrypt.compareSync(req.body.password, worker.dataValues.password)) {
          let tokenPayload = {
            id: worker.dataValues.id,
            name: worker.dataValues.name,
            active: worker.dataValues.active
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

  profile: (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    Worker.findOne({
      where: {
        id: decoded.id
      }
    })
      .then(worker => {
        if (worker) {
          res.status(200).json(worker)
        } else {
          res.status(404).send('User does not exist')
        }
      })
      .catch(err => {
        res.status(500).send('error:' + err)
        console.log(authorization)
        console.log(SECRET_KEY)
      })
  },

  delete: async (req, res) => {
    if (await Worker.findOne({ where: { [op.and]: [{ id: req.body.id }] } }) != null) {
      Worker.update({ active: req.body.active }
        , ({ where: { id: req.body.id } }))
      res.status(200).json(req.body)
    } else {
      res.status(404).send('Not Found')
    }
  },

  workers: async (req, res) => {
    res.status(200).send(await Worker.findAll())
  }
}

//InnerJoins
// const response = db.sequelize.query("select id from department as Department", {type: Sequelize.QueryTypes.SELECT})


