const Sequelize = require('sequelize');
const db = require('../backend/app');
//Defines Job_Types
module.exports = db.sequelize.define('job_type', {
  id:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true
    },
  type:
    {
      type:
      Sequelize.STRING(45),
    },

  },{
    timestamps: false
  })
