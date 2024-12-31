const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config'); // Import sequelize instance
const Class = require('./Class'); // Import Class model

// Define the User model
const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('supervisor', 'student', 'admin'),
      allowNull: false,
      defaultValue: 'student',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_blocked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
);

// Many-to-Many relationship between User (student) and Class
User.belongsToMany(Class, {
  through: 'UserClass', // This is the join table
  foreignKey: 'user_id',
  otherKey: 'class_id',
});

Class.belongsToMany(User, {
  through: 'UserClass',
  foreignKey: 'class_id',
  otherKey: 'user_id',
});

module.exports = User;
