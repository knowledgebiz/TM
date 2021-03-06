const Sequelize = require('sequelize');
const db = require('../backend/app');
//Defines Position
module.exports = db.sequelize.define('positions', {
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
  },{
    timestamps: false
  })
