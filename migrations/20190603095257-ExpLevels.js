'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('experience_levels',{
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
    
      },
      experience_level:{
        type: Sequelize.INTEGER(9),
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
    
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTbale('experience_levels');
  }
};
