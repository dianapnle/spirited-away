'use strict';

const { SpotImage } = require('../models');

/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
module.exports = {
  async up (queryInterface, Sequelize) {
    await SpotImage.bulkCreate([
      {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-618297070744530980/original/a77deca1-0ab3-4f2c-8332-56ef9d16c60a.jpeg",
        preview: true
      },
      {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/51bb187d-4213-45cc-9888-fde25c51adc0.jpg",
        preview: false
      },
      {
        spotId: 2,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-901816412585412627/original/9f3ce1a0-5516-42fe-9094-79b5490f7b26.jpeg",
        preview: true
      },
      {
        spotId: 2,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-901816412585412627/original/52ccad7f-52b6-41b9-a718-f1cad08df63c.jpeg",
        preview: false
      }
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      url: { [Op.in]: ['https://a0.muscache.com/im/pictures/miso/Hosting-618297070744530980/original/a77deca1-0ab3-4f2c-8332-56ef9d16c60a.jpeg', 'https://a0.muscache.com/im/pictures/51bb187d-4213-45cc-9888-fde25c51adc0.jpg', 'https://a0.muscache.com/im/pictures/miso/Hosting-901816412585412627/original/9f3ce1a0-5516-42fe-9094-79b5490f7b26.jpeg', 'https://a0.muscache.com/im/pictures/miso/Hosting-901816412585412627/original/52ccad7f-52b6-41b9-a718-f1cad08df63c.jpeg'] }
    }, {});
  }
};
