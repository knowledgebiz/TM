'use strict';
//Create CV
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cvs',{
    id:
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
    
      },
    createdAt:
      {
        type:
        Sequelize.DATE,
        allowNull: false,
      },
    cv:
      {
        type:
        Sequelize.TEXT,
      },
  })
},
down: (queryInterface, Sequelize) => {
  return queryInterface.dropTbale('cvs');
  }
};
