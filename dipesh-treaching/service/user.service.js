const Class = require('../models/Class');
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.create = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw ('Error occured:', error);
  }
};

exports.update = async (userData, comming_id) => {
  try {
    const [user] = await User.update(userData, { where: { id: comming_id } });

    if (user == 0) {
      throw 'Error: cannot find user';
    } else {
      return user;
    }
  } catch (error) {
    throw ('Error occured:', error);
  }
};

exports.login = async (email, password) => {
  try {
    // Step 1: Find the user by email
    const user = await User.findOne({ where: { email: email } });

    // Step 2: Check if user exists
    if (!user) {
      throw new Error('Error: cannot find email');
    }
    if (user.is_blocked) {
      throw new Error('Error: cannot login user is blocked');
    }
    if (!user.is_verified) {
      throw new Error('Error: User is not varified ');
    }

    // Step 3: Compare the provided password with the stored password (plaintext)
    if (
      bcrypt.compareSync(password, user.password) &&
      user.is_blocked == false
    ) {
      return user;
    } else {
      throw new Error('Error: Invalid password');
    }
  } catch (error) {
    // Handle error (email not found, password incorrect, etc.)
    return { success: false, message: error.message };
  }
};

exports.getAllUsers = async () => {
  try {
    const user = await User.findAll();
    return user;
  } catch (error) {
    throw ('Error occured:', error);
  }
};

exports.pendingUser = async () => {
  try {
    const user = await User.findAll({ where: { is_verified: false } });
    return user;
  } catch (error) {
    throw ('Error occured:', error);
  }
};

exports.getUserById = async (id) => {
  try {
    const user = await User.findByPk(id, {
      include: {
        model: Class, // Include the associated Class model
        through: { attributes: [] }, // Exclude the join table data (optional)
        attributes: ['id', 'class_name'], // Specify the Class fields you want to include
      },
    });

    if (!user) {
      throw 'User Not Found';
    }

    return user;
  } catch (error) {
    throw new Error(`Error occurred: ${error}`);
  }
};
