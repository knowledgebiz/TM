const Sequelize = require('sequelize');
const sequelize = require('../backend/app');
//Define Vacancies
module.exports = sequelize.define('vacancies', {
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
    }
})
