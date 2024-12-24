const { login } = require('../service/user.service');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await login(email, password);
    res.status(200).json({ status: true, data: data });
  } catch (error) {
    throw ('Error occured:', error);
  }
};
