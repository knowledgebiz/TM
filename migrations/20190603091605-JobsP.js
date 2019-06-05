'use strict';
//Create Jobs_Preferences
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('jobs_preferences',{
    id:
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
    
      },
    fav_techs:
      {
        type:
        Sequelize.STRING,
      },
    disliked_techs:
      {
        type:
        Sequelize.STRING,
      },
    prefered_industries:
      {
        type:
        Sequelize.STRING,
      },
    unwanted_industries:
      {
        type:
        Sequelize.STRING,
        defaultValue: true
      }
  })
},
down: (queryInterface, Sequelize) => {
  return queryInterface.dropTbale('jobs_preferences');
  }
};
