'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
   
    
  };
  Reservation.init({
    ReservationId: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true
    },
    UserId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      
    },
    Date:{
      type:DataTypes.DATE,
      allowNull:false
    },
    Price:{
      type:DataTypes.DOUBLE(5,2),
      allowNull:false
    },
    IsHighTraffic:{
        type: DataTypes.BOOLEAN,
        allowNull:false
    },
    PartySize:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    Tables:{
      type:DataTypes.STRING,
      allowNull:true
    }
  }, {
    sequelize,
    modelName: 'Reservation',
    tableName: 'Reservations',
    timestamps:false
  });
  
  
  return Reservation;
};