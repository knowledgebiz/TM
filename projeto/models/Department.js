const Sequelize = require('sequelize');
const sequelize = require('../backend/app');
//Defines Department
module.exports = sequelize.define('department', {
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
      Sequelize.STRING(),
      references: {model: 'department', key: 'department_id'}
  },
})
