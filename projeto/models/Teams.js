const Sequelize = require('sequelize');
const db = require('../backend/app');
//Define Teams
module.exports = db.sequelize.define('teams', {
  id:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true
  },
  entities_id:
  {
    type:
    Sequelize.INTEGER,
    allowNull: false,
    references: {model: 'entities', key: 'entities_id'}
  }
},{
  timestamps: false
})
