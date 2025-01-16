const Class = require('../models/Class');
const User = require('../models/User');

exports.addUserToClass = async (user, classId) => {
  try {
    // const user = await User.findByPk(userId); // Find user by ID
    const classInstance = await Class.findByPk(classId); // Find class by ID

    if (!user || !classInstance) {
      throw new Error('User or Class not found');
    }

    // Add the class to the user (creates the entry in the UserClass join table)
    const addedClass = await user.addClass(classInstance);
    return addedClass;
  } catch (error) {
    console.error('Error adding user to class:', error);
    throw error;
  }
};

exports.removeClassFromUser = async (userId, classId) => {
  try {
    // Find the user and class
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('User not found');
    }

    const cls = await Class.findByPk(classId);
    if (!cls) {
      throw new Error('Class not found');
    }

    // Remove the association
    await user.removeClass(cls); // Sequelize provides this method

    return { message: 'Class removed from user successfully' };
  } catch (error) {
    throw new Error(`Error removing class from user: ${error.message}`);
  }
};
