
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

  };
  UserInformation.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true

    },
    InfoId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PhoneNumber: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    Address: {
      type: DataTypes.STRING(50),
      allowNull: false
    },

    City: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    State: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ZipCode: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    BillingAddress: {
      type: DataTypes.STRING(50),
      allowNull: true
    },

    BillingCity: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    BillingState: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    BillingZipCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    IsGuest: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Points: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    CreditCard: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    SecCode: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    Expiration: {
      type: DataTypes.STRING(5),
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'UserInformation',
    tableName: 'User_Information',
    timestamps: false
  });
  UserInformation.associate = (model) => {
    UserInformation.Reservations = UserInformation.hasMany(model.Reservation, {
      foreignKey: 'UserId',
      allowNull: false
    })
    
  }

  return UserInformation;
};