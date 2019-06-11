'use strict';
//Create Evaluators
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('evaluators',{
      id:
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true   
      },
      workers_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'workers', key: 'workers_id'}
      },
  })
},
down: (queryInterface, Sequelize) => {
  return queryInterface.dropTbale('evaluators');
  }
};
