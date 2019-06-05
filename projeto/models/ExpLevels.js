const Sequelize = require('sequelize');
const sequelize = require('../backend/app');
module.exports = sequelize.define('experience_levels', {
  id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey: true
  },
  experience_level:{
    type: Sequelize.INTEGER(9),
    allowNull: false,
    autoIncrement:true,
    primaryKey: true
  }
})
