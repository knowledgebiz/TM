const Sequelize = require('sequelize');
const sequelize = require('../backend/app');
module.exports = sequelize.define('evaluators', {
  id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey: true
  },
})
