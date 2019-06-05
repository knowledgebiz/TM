const Sequelize = require('sequelize');
const sequelize = require('../backend/app');
//Defines Position
module.exports = sequelize.define('position', {
  id:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true
    },
  position:
    {
      type:
      Sequelize.STRING(),
      references: {model: 'position', key: 'position_id'}
    },
  })
