// migrations/YYYYMMDDHHMMSS-add-files-to-task.js

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Tasks', 'files', {
      type: Sequelize.STRING, // Use the same type as defined in the model
      allowNull: true, // Optional, you can make it `false` if required
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Tasks', 'files');
  },
};
