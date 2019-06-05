const Sequelize = require('sequelize');
const sequelize = require('../backend/app');
//Define Type
module.exports = sequelize.define('type', {
  id:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true
    },
  type:
    {
      type:
      Sequelize.STRING(),
      references: {model: 'type', key: 'type_id'}
    },
  })
