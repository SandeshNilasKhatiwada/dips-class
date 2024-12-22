const User = require('../model/User');

exports.create = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw ('Error occured:', error);
  }
};
