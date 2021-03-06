'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('types',{
    id:
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
    
      },
        type_id:
      {
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'types', key: 'type_id'}
      },
  })
},
down: (queryInterface, Sequelize) => {
  return queryInterface.dropTbale('types');
  }
};
