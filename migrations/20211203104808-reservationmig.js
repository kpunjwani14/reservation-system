'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all( [queryInterface.createTable('Reservations',{
      ReservationId: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
      },
      UserId: {
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:'user_information'
          },
          key:'InfoId'
        }
        
      },
      Date:{
        type:Sequelize.DATE,
        allowNull:false
      },
      Price:{
        type:Sequelize.DOUBLE(5,2),
        allowNull:false
      },
      IsHighTraffic:{
          type: Sequelize.BOOLEAN,
          allowNull:false
      },
      CreditCardNumber:{
          type:Sequelize.STRING(16),
          allowNull:false
      },
      CreditCardExpiration:{
          type:Sequelize.DATE,
          allowNull: false
      },
      CreditCardSecurityCode:{
          type:Sequelize.STRING(3),
          allowNull: false
      }
    })])
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
