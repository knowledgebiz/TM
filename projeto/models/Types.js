const Sequelize = require('sequelize');
const db = require('../backend/app');
//Define Type
module.exports = db.sequelize.define('types', {
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
      references: {model: 'types', key: 'type_id'}
    },
  },{
    timestamps: false
  })
