'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Spot.hasMany(models.SpotImage, {foreignKey: "spotId"});
      Spot.belongsTo(models.User, {foreignKey: "ownerId", as: "Owner"});
      Spot.hasMany(models.Review, {foreignKey: "spotId"});
      Spot.hasMany(models.Booking, {foreignKey: "userId"});
    }
  }
  Spot.init({
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlphanumeric: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false,
      isNumeric: true,
      validate: {
        min: {args: [-90], msg: "Latitude must be within -90 and 90"},
        max: {args: [90], msg: 'Latitude must be within -90 and 90'}
      }
    },
    lng: {
      type: DataTypes.FLOAT,
      allowNull: false,
      isNumeric: true,
      validate: {
        min: {args: [-180], msg: "Longitude must be within -180 and 180"},
        max: {args: [180], msg: 'Longitude must be within -180 and 180'}
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true,
      validate: {
        len: {args:[0,49], msg: "Name must be less than 50 characters"}
    }
  },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      isNumeric: true,
      validate: {
        min: {args: ["0.0"], msg: "Price per day must be positive"}
      }
    }
  }, {
    sequelize,
    modelName: 'Spot',
    validate: true
  });
  return Spot;
};
