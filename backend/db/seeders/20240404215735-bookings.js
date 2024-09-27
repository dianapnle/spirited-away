"use strict";
const { Booking } = require("../models");

// /** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
  async up(queryInterface, Sequelize) {
    await Booking.bulkCreate([
      {
        spotId: 1,
        userId: 2,
        startDate: "2024-04-01",
        endDate: "2024-04-03",
      },
      {
        spotId: 1,
        userId: 2,
        startDate: "2024-04-04",
        endDate: "2024-04-07",
      },
      {
        spotId: 1,
        userId: 3,
        startDate: "2024-08-05",
        endDate: "2024-08-07",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Bookings";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        startDate: {
          [Op.in]: [
            new Date("2024-04-01"),
            new Date("2024-04-04"),
            new Date("2024-08-05"),
          ],
        },
      },
      {},
    );
  },
};
