'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return Promise.all([
     queryInterface.createTable('User_Information',{
      InfoId:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false

      },
      UserId: {
        type:Sequelize.INTEGER,
        allowNull:true,
        references:{
          model:{
            tableName:'user_credentials'
          },
          key:'UserId'
        }
  
      },
      Name: {
        type:Sequelize.STRING(50),
        allowNull:false
      },
      PhoneNumber:{
          type: Sequelize.STRING(15),
          allowNull: false
      },
      Address: {
        type:Sequelize.STRING(50),
        allowNull:false
      },
      
      City: {
        type:Sequelize.STRING(30),
        allowNull:false
      },
      State: {
        type:Sequelize.STRING(2),
        allowNull:false
      },
      ZipCode: {
        type:Sequelize.STRING(10),
        allowNull:false
      },
      BillingAddress: {
          type:Sequelize.STRING(50),
          allowNull:true
        },
        
      BillingCity: {
          type:Sequelize.STRING(30),
          allowNull:true
        },
      BillingState: {
          type:Sequelize.STRING(2),
          allowNull:true
        },
      BillingZipCode: {
          type:Sequelize.STRING(10),
          allowNull:true
      },
      IsGuest: {
          type: Sequelize.BOOLEAN,
          allowNull: false
      }
     })
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
