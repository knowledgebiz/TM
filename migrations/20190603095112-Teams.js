'use strict';
//Create Teams
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('teams',{
      id:
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement:true,
          primaryKey: true
       },
      entities_id:
        {
          type:
          Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'entities', key: 'entities_id'}
        }
    })
  },
down: (queryInterface, Sequelize) => {
  return queryInterface.dropTbale('teams');
  }
};
