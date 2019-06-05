const Sequelize = require('sequelize');
const sequelize = require('../backend/app');
module.exports = sequelize.define('teams', {
  id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey: true

  },
})
