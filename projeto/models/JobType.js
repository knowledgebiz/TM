const Sequelize = require('sequelize');
const sequelize = require('../backend/app');
module.exports = sequelize.define('job_type', {
  id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey: true

  },
  type:
  {
    type:
  Sequelize.STRING(45),
  },
})
