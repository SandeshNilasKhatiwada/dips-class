const sequelize = require('../config/db.config');
const User = require('../model/User');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Sync all models
    await sequelize.sync({ force: true }); // Use `force: true` for development only
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
})();

// kiss => keep it simple and stupid
