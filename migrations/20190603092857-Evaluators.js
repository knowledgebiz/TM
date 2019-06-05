'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('evaluators',{
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
    
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTbale('evaluators');
  }
};
