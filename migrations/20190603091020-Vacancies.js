'use strict';
//Create Vacancies 
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vacancies',{
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
},
down: (queryInterface, Sequelize) => {
  return queryInterface.dropTbale('vacancies');
  }
};
