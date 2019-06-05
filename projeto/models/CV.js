const Sequelize = require('sequelize');
const sequelize = require('../backend/app');
//Defines CV
module.exports = sequelize.define('cv', {
  id:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true
    },
  createdAt:
    {
      type:
      Sequelize.DATE,
      allowNull: false,
    },
  cv:
    {
      type:
      Sequelize.TEXT,
    },
})
