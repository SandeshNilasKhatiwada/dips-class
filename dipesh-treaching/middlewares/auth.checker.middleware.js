const { verifyJWT } = require('../utils/jwt.work');

exports.authChecker = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    token = token.split(' ')[1];
    req.user = verifyJWT(token);
    next();
  } catch (error) {
    res.status(403).json({ status: false, message: 'user foebidden' });
  }
};
