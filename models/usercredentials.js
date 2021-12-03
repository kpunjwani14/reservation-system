'use strict';
const {
  Model
} = require('sequelize');

module.exports =
    (sequelize, DataTypes) => {
        class UserCredentials extends Model { 
            
        }

        UserCredentials.init({
            // Model attributes are defined here
            UserId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true

            },
            Email: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            Password: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            

            
        }, {

            sequelize, // We need to pass the connection instance
            modelName: 'UserCredentials',// We need to choose the model name
            tableName: 'User_Credentials',
            timestamps:false
        });
        UserCredentials.associate = (model) =>{
            UserCredentials.Info = UserCredentials.hasOne(model.UserInformation,{
            foreignKey:'UserId',
            allowNull:true
          })
          
        
        }
        
        return UserCredentials
    }

