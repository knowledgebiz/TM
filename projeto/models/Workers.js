const Sequelize = require('sequelize');
const db = require('../backend/app');
//Define Workers
module.exports = db.sequelize.define('Workers',
{
  id:
    {
      type: Sequelize.INTEGER(3),
      allowNull: false,
      autoIncrement:true,
      primaryKey: true
    },
  name:
    {
      type:
      Sequelize.STRING,
      allowNull: false,
    },
  email:
    {
      type:
      Sequelize.STRING,
      allowNull: false
    },
  password:
    {
      type:
      Sequelize.STRING,
      allowNull: false
    },
  active:
    {
      type:
      Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    entities_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: true,
      references: {model: 'entities', key: 'entities_id'}
    },
  createdAt:
    {
      type:
      Sequelize.DATE,
      allowNull: false
    },
  updatedAt:
    {
      type:
      Sequelize.DATE
    },
  teams_id:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: true,
      references: {model: 'teams', key: 'teams_id'}
    },
  type_id:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: true,
      references: {model: 'type', key: 'type_id'}
    },
  position_id:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: true,
      references: {model: 'position', key: 'position_id'}
    },
  department_id:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: true,
      references: {model: 'department', key: 'department_id'}
    },
  experience_levels_id:
    {
      type: Sequelize.INTEGER,
      defaultValue: true,
      allowNull: false,
      references: {model: 'experience_levels', key: 'experience_levels_id'}
    },
  })
