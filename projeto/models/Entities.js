const Sequelize = require('sequelize');
const db = require('../backend/app');
//defines Entities
module.exports = db.sequelize.define('entities', {
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
  logo:
    {
      type:
      Sequelize.STRING,
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
  description:
    {
      type:
      Sequelize.STRING,
      allowNull: false,
    },
  website_url:
    {
      type:
      Sequelize.STRING,
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
  entities_types_id:
    {
      type:
      Sequelize.INTEGER,
      allowNull: false,
      references: {model: 'entities_types', key: 'entities_type_id'}
   }
})
