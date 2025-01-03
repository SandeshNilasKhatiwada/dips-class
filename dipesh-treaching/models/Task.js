const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config'); // Adjust path as needed

// Define the Task model
const Task = sequelize.define(
  'Task',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    class_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Classes', // Refers to the Class model
        key: 'id',
      },
      allowNull: false,
    },
    files: {
      type: DataTypes.STRING, // Can store file paths or URLs
      allowNull: true, // If you want the field to be optional
    },
  },
  {
    timestamps: true,
  },
);

module.exports = Task;
