"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Booking.belongsTo(models.Spot, { foreignKey: "spotId" });
      Booking.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Booking.init(
    {
      spotId: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      startDate: {
        type: DataTypes.DATE,
        validate: {
          isAfter(value) {
            //convert date object value into a string
            const userDateString = value.toISOString();
            //take off the z of the string and make another date object with same time as current
            const modifiedValue = new Date(
              userDateString.substring(0, userDateString.length - 1),
            );
            //new Date () gives current time with time stamp, dateString gives the date only without time, then create another date object with it
            //to normalize both and compare
            let current = new Date(new Date().toDateString());
            if (modifiedValue < current) {
              throw new Error("startDate cannot be in the past");
            }
          },
        },
      },
      endDate: {
        type: DataTypes.DATE,
        validate: {
          isGreaterThanstartDate(value) {
            //both values should be in utc time
            if (value <= this.startDate) {
              throw new Error("endDate cannot be on or before startDate");
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Booking",
    },
  );
  return Booking;
};
