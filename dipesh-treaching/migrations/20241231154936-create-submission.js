// migrations/YYYYMMDDHHMMSS-create-submission.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Submissions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: Sequelize.ENUM('process', 'approve', 'delete'),
        allowNull: false,
        defaultValue: 'process',
      },
      submission_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // Refers to the Users table
          key: 'id',
        },
        allowNull: false,
      },
      task_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tasks', // Refers to the Tasks table
          key: 'id',
        },
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Submissions');
  },
};
