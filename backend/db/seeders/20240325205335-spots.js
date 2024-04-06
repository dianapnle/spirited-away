'use strict';

const { Spot } = require('../models');

// /** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await Spot.bulkCreate([
      {
        ownerId: 1,
        address: "123 Disney Lane",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "App Academy",
        description: "Place where web developers are created",
        price: 123.00
      },
      {
        ownerId: 1,
        address: "Anaheim",
        city: "Anaheim",
        state: "California",
        country: "United States of America",
        lat: 33.812511,
        lng: -117.918976,
        name: "Disneyland",
        description: "Amusement Park",
        price: 130.00
      },
      {
        ownerId: 1,
        address: " 9119 Clairemont Mesa Blvd g",
        city: "San Diego",
        state: "California",
        country: "United States of America",
        lat: 32.715760,
        lng: -117.163820,
        name: "Finjan",
        description: "Good turkish coffee",
        price: 7.00
      }
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['App Academy', 'Disneyland', 'Finjan'] }
    }, {});
  }
};
