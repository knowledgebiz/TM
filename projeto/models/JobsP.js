const Sequelize = require('sequelize');
const sequelize = require('../backend/app');
module.exports = sequelize.define('jobs_preferences', {
  id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey: true

  },
  fav_techs:
  {
    type:
  Sequelize.STRING,
  },
  disliked_techs:
  {
    type:
    Sequelize.STRING,
  },
  prefered_industries:
  {
    type:
  Sequelize.STRING,
  },
  unwanted_industries:
  {
    type:
  Sequelize.STRING,
  defaultValue: true
  },
})
