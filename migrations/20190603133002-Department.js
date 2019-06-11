'use strict';
//Create Department
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('departments',{
    id:
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
    
      },
    department_id:
      {
        type: Sequelize.STRING,
        references: {model: 'departments', key: 'department_id'}
      },
      active:{
        type: Sequelize.BOOLEAN,
        deafultValue: true
      }
  })
},
down: (queryInterface, Sequelize) => {
  return queryInterface.dropTbale('departments');
  }
};
