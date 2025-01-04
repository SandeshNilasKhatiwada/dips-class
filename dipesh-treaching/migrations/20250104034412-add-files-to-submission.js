'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Submissions', 'files', {
      type: Sequelize.STRING, // Use the same type as defined in the model
      allowNull: true, // Optional, you can make it `false` if required
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Submissions', 'files');
  },
};
