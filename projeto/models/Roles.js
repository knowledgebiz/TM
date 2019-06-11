const Sequelize = require('sequelize');
const db = require('../backend/app');
//Define Role
module.exports = db.sequelize.define('roles', {
  id:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true
    },
  role:
    {
      type:
      Sequelize.STRING(70),
    },
  },{
    timestamps: false
  })
