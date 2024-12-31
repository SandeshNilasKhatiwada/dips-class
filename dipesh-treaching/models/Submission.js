// models/Submission.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config'); // Import sequelize instance
const User = require('./User'); // Import User model
const Task = require('./Task'); // Import Task model

// Define the Submission model
const Submission = sequelize.define(
  'Submission',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.ENUM('process', 'approve', 'delete'),
      allowNull: false,
      defaultValue: 'process', // Default to 'process'
    },
    submission_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // The date the submission is made
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users', // Refers to the User model
        key: 'id',
      },
      allowNull: false,
    },
    task_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tasks', // Refers to the Task model
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    timestamps: true, // To include createdAt and updatedAt fields
  },
);

// Associations
User.hasMany(Submission, { foreignKey: 'user_id' });
Task.hasMany(Submission, { foreignKey: 'task_id' });
Submission.belongsTo(User, { foreignKey: 'user_id' });
Submission.belongsTo(Task, { foreignKey: 'task_id' });

module.exports = Submission;
