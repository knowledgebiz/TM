'use strict';
//create Entities_Types
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('entities_types',{
    id:
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
      },
    type:
      {
        type:
        Sequelize.STRING(7),
        allowNull: false,
      },
  })
},
down: (queryInterface, Sequelize) => {
  return queryInterface.dropTbale('entities_types');
  }
};
