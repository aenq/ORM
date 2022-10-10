'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Photos', [
    {
      title: 'Foto Jadul',
      caption: 'Waktu itu foto ini diambil saat aku lagi main di kali',
      image_url: 'http://photojadul.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Foto Kenangan',
      caption: 'Foto bersama keluargaku waktu aku masih SD',
      image_url: 'http://photokenangan.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Foto Liburan',
      caption: 'AKu lagi di pantai with bestie',
      image_url: 'http://photoliburan.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Foto Malming',
      caption: 'Foto malmingan with ayang',
      image_url: 'http://photomalming.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
