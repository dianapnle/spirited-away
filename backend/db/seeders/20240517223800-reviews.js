"use strict";

const { Review } = require("../models");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    Review.bulkCreate(
      [
        {
          userId: 2,
          spotId: 1,
          review: "best spot I've ever visited :D",
          stars: 5,
          createdAt: new Date("2024-03-15T10:00:00"),
          updatedAt: new Date("2024-03-15T10:00:00"),
        },
        {
          userId: 3,
          spotId: 1,
          review: "was not bad! AC did not work tho",
          stars: 3,
          createdAt: new Date("2024-04-15T10:00:00"),
          updatedAt: new Date("2024-04-15T10:00:00"),
        },
        {
          userId: 3,
          spotId: 2,
          review: "DONT STAY HERE IT WAS TERRRIBLEEE STUFF WAS DIRTY",
          stars: 1,
          createdAt: new Date("2024-02-15T10:00:00"),
          updatedAt: new Date("2024-02-15T10:00:00"),
        },
      ],
      { validate: true },
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Reviews";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        createdAt: { [Op.lte]: new Date("2024-04-15T10:00:00") },
      },
      {},
    );
  },
};
