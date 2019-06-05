const Sequelize = require('sequelize');
const sequelize = require('../backend/app');
module.exports = sequelize.define('entities_types', {
  id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey: true

  },
  type:
  {
    type:
  Sequelize.STRING(7),
  allowNull: false,
  },
})
