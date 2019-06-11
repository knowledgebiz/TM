const Sequelize = require('sequelize');
const db = require('../backend/app');
//Defines Jobs_Preferences
module.exports = db.sequelize.define('jobs_preferences', {
  id:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true
    },
  fav_techs:
    {
      type:
      Sequelize.STRING,
    },
  disliked_techs:
    {
      type:
      Sequelize.STRING,
    },
  prefered_industries:
    {
      type:
    Sequelize.STRING,
    },
  unwanted_industries:
    {
      type:
    Sequelize.STRING,
    },
    workers_id:
      {
        type:
        Sequelize.INTEGER,
        references: {model: 'workers', key: 'workers_id'}
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
      role_id: {
        type:
        Sequelize.INTEGER,
        references: {model: 'roles', key: 'role_id'}
      },
},{
  timestamps: false
})
