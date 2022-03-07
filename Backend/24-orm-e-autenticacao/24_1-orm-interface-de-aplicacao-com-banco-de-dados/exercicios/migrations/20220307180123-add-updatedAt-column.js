'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('Books', 'updated_at', {
    type: Sequelize.DATE,
    default: null,
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Books', 'updated_at');
  }
};
