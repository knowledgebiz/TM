'use strict';
//Create Position 
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('positions',{
    id:
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true 
      },
    position_id:
      {
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'positions', key: 'position_id'}
    
      },
  })
},
down: (queryInterface, Sequelize) => {
  return queryInterface.dropTbale('positions');
  }
};
