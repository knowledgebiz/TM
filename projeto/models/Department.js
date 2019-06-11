const Sequelize = require('sequelize');
const db = require('../backend/app');
//Defines Department
module.exports = db.sequelize.define('department', {
  id:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true
    },
  department:
    {
      type:
      Sequelize.STRING,
      references: {model: 'department', key: 'department_id'}
  },
  active:{
    type:
    Sequelize.BOOLEAN,
    defaultValue: true
  }
},{
  timestamps: false
})

