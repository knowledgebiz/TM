const Sequelize = require('sequelize');
const sequelize = require('../backend/app');
//Defines Job_Types
module.exports = sequelize.define('job_type', {
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
  })
