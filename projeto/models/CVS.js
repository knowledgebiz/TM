const Sequelize = require('sequelize');
const db = require('../backend/app');
//Defines CV
module.exports = db.sequelize.define('cvs', {
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
