'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('job_type',{
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
    
      },
      type:{
        type: Sequelize.INTEGER(45),
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
    
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTbale('job_type');
  }
};
