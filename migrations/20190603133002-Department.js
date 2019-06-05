'use strict';
//Create Department
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('department',{
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
        references: {model: 'department', key: 'department_id'}
      },
  })
},
down: (queryInterface, Sequelize) => {
  return queryInterface.dropTbale('department');
  }
};
