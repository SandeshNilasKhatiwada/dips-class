const bcrypt = require('bcrypt');
const { create, update, pendingUser } = require('../service/user.service');

exports.createUser = async (req, res) => {
  try {
    const body = req.body;
    body.password = bcrypt.hashSync(body.password, 10);
    if (body.role == 'student') {
      body.is_verified = true;
    } else {
      body.is_verified = false;
    }
    const user = await create(body);
    res.status(201).json({ status: true, message: 'User Created', data: user });
  } catch (error) {
    res.status(400).json({ status: false, message: error });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const updatedData = await update(userData, id);
    res
      .status(200)
      .json({ status: true, message: 'User Updated', data: updatedData });
  } catch (error) {
    res.status(400).json({ status: false, message: error });
  }
};

exports.getPendingUsers = async (req, res) => {
  try {
    const pendingData = await pendingUser();
    res
      .status(200)
      .json({ status: true, message: 'All Pending Users', data: pendingData });
  } catch (error) {
    res.status(400).json({ status: false, message: error });
  }
};
