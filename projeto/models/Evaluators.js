const Sequelize = require('sequelize');
const db = require('../backend/app');
//Defines Evaluators
module.exports = db.sequelize.define('evaluators', {
  id:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true
    },
    workers_id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {model: 'workers', key: 'workers_id'}
    },
  },{
    timestamps: false
  })

