const User = require('../model/User');

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

    // Step 3: Compare the provided password with the stored password (plaintext)
    if (user.password === password && user.is_blocked == false) {
      return user;
    } else {
      throw new Error('Error: Invalid password');
    }
  } catch (error) {
    // Handle error (email not found, password incorrect, etc.)
    return { success: false, message: error.message };
  }
};
