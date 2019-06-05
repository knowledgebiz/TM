'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('position',{
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
    
      },
      position_id:{
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'position', key: 'position_id'}
    
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTbale('position');
  }
};
