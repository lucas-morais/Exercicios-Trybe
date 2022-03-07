'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Books', [
     {
      title: 'Fundação',
      author: 'Isaac Asimov',
      page_quantity: 200,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
     },
     {
      title: 'Duna',
      author: 'Frank Hebert',
      page_quantity: 400,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
     },
    ]);
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
