'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        findLength(value) {
          if (value.length >= 4 && value.length <= 30) {
            throw new Error ("must be at least 4 characters but less than 30")
          }
        },
        isEmail: false
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        findLength(value) {
          if (value.length >= 3 && value.length <= 256) {
            throw new Error ("must be at least 3 characters and ")
          }
        },
        isEmail: true
      }
    },
    hashedPassword: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        findLength(value) {
          if (value.length === 60) {
            throw new Error ("must be 60 characters")
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
