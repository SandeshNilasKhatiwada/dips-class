const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize with environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306, // Default port is 3306
    logging: false, // Set to true if you want SQL queries to be logged
  },
);

module.exports = sequelize;
