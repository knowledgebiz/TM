'use strict';
//Create Roles
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('roles',{
    id:
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
      },
    role:
      {
        type: Sequelize.INTEGER(70),
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
    
      },
  })
},
down: (queryInterface, Sequelize) => {
  return queryInterface.dropTbale('roles');
  }
};
