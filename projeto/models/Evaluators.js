const Sequelize = require('sequelize');
const sequelize = require('../backend/app');
//Defines Evaluators
module.exports = sequelize.define('evaluators', {
  id:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true
    },
  })
