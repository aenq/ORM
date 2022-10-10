'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos', [{
      title: 'Foto Pertama Milik User ID 1',
      caption: 'Ini foto pertama milik user id 1',
      image_url: 'http://fotopertama1.com',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Foto Kedua Milik User ID 1',
      caption: 'Ini foto Kedua milik user id 1',
      image_url: 'http://fotokedua1.com',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Foto ketiga Milik User ID 1',
      caption: 'Ini foto ketiga milik user id 1',
      image_url: 'http://fotoketiga1.com',
      UserId: 1,
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
