'use strict';
//Creates Workers
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('workers',
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
  createdAt:
    {
      type:
      Sequelize.DATE,
      allowNull: false
    },
  updatedAt:
    {
      type: Sequelize.DATE
    },
  type_id:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {model: 'type', key: 'type_id'}
    },
  teams_id:
    {
      type: Sequelize.INTEGER,
      references: {model: 'teams', key: 'teams_id'}
    },
  position_id:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {model: 'position', key: 'position_id'}
    },
  department_id:
    {
      type: Sequelize.INTEGER,
      references: {model: 'department', key: 'department_id'}
    },
  experience_levels_id:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {model: 'experience_levels', key: 'experience_levels_id'}
    }, 
    entities_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {model: 'entities', key: 'entities_id'}
    }, 
})
    },
down: (queryInterface, Sequelize) => {
  return queryInterface.dropTbale('workers');
  }
};
