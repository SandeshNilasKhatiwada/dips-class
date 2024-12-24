const { create, update } = require('../service/user.service');
exports.createUser = async (req, res) => {
  try {
    const body = req.body;
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
