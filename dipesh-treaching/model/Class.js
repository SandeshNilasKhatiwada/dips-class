const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config'); // Import sequelize instance

// Define the Class model
const Class = sequelize.define(
  'Class',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    class_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class_code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = Class;
