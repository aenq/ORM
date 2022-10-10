'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos', [{
      title: 'Foto Pertama Milik User ID 2',
      caption: 'Ini foto pertama milik User ID 2',
      image_url: 'http://fotopertama2.com',
      UserId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Foto Kedua Milik User ID 2',
      caption: 'Ini foto Kedua milik User ID 2',
      image_url: 'http://fotokedua2.com',
      UserId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Foto ketiga Milik User ID 2',
      caption: 'Ini foto ketiga milik User ID 2',
      image_url: 'http://fotoketiga2.com',
      UserId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
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
