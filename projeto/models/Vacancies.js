const Sequelize = require('sequelize');
const db = require('../backend/app');
//Define Vacancies
module.exports = db.sequelize.define('vacancies', {
  id:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true
    },
  title:
    {
      type:
      Sequelize.STRING,
      allowNull: false,
    },
  description:
    {
      type:
      Sequelize.STRING,
      allowNull: false
    },
  remote:
    {
      type:
      Sequelize.BOOLEAN,
      allowNull: false
    },
  active:
    {
      type:
      Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
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
    experience_levels_id: {
      type:
      Sequelize.INTEGER,
      references: {model: 'experience_levels', key: 'experience_levels_id'}
    },
    job_type_id: {
      type:
      Sequelize.INTEGER,
      references: {model: 'job_types', key: 'job_type_id'}
    },
    roles_id: {
      type:
      Sequelize.INTEGER,
      references: {model: 'roles', key: 'roles_id'}
    },
    entities_id:
  {
    type:
    Sequelize.INTEGER,
    allowNull: false,
    references: {model: 'entities', key: 'entities_id'}
  },
})
