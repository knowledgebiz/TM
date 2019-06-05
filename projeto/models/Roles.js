const Sequelize = require('sequelize');
const sequelize = require('../backend/app');
module.exports = sequelize.define('roles', {
  id:{
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
})
