const { create } = require('../service/user.service');
exports.createUser = async (req, res) => {
  try {
    const body = req.body;
    const user = await create(body);
    res.status(201).json({ status: true, message: 'User Created', data: user });
  } catch (error) {
    res.status(400).json({ status: false, message: error });
  }
};
