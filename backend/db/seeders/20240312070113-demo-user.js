"use strict";

const { User } = require("../models");
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate(
      [
        {
          email: "demo@gmail.com",
          username: "demousername",
          firstName: "DemoOne",
          lastName: "UserOne",
          hashedPassword: bcrypt.hashSync("ilikebananas1"),
        },
        {
          email: "user1@gmail.com",
          username: "randomuser1",
          firstName: "DemoTwo",
          lastName: "UserTwo",
          hashedPassword: bcrypt.hashSync("gojosenpai2"),
        },
        {
          email: "user5@gmail.com",
          username: "demouser5",
          firstName: "DemoThree",
          lastName: "UserThree",
          hashedPassword: bcrypt.hashSync("password3"),
        },
      ],
      { validate: true },
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Users";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        username: { [Op.in]: ["demousername", "randomuser1", "demouser5"] },
      },
      {},
    );
  },
};
