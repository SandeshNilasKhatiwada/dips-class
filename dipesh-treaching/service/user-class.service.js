const Class = require('../model/Class');

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
