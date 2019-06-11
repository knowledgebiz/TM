const Sequelize = require('sequelize');
const db = require('../backend/app');
//Defines Experience_Level
module.exports = db.sequelize.define('experience_levels', {
  id:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true
    },
  experience_level:
  {
      type: Sequelize.INTEGER(9),
      allowNull: false,
      primaryKey: true
  }
},{
  timestamps: false
})
