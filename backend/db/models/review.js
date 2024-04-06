'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsToMany(models.Spot, {foreignKey: "spotId"});
      Review.belongsToMany(models.User, {foreignKey: "userId"});
      Review.hasMany(models.ReviewImage, {foreignKey: "reviewId"});
    }
  }
  Review.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {args: 1, msg: "Stars must be an integer from 1 to 5"},
        max: {args: 5, msg: 'Stars must be an integer from 1 to 5'}
      }
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
