const { login } = require('../service/user.service');
const { generateJWT } = require('../utils/jwt.work');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await login(email, password);
    token = generateJWT(data);

    res.status(200).json({ status: true, data: data, token: token });
  } catch (error) {
    throw ('Error occured:', error);
  }
};
