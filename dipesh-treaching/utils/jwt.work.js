const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.generateJWT = (user) => {
  // JWT payload containing user information
  const payload = {
    id: user.id,
    username: user.username,
    role: user.role,
    email: user.email,
    is_blocked: user.is_blocked,
    is_verified: user.is_verified,
  };

  // JWT options: expiresIn specifies the token's expiration time (e.g., 1 hour)
  const options = {
    expiresIn: '1h',
  };

  // Generate and return the JWT
  const token = jwt.sign(payload, process.env.SECRET_KEY, options);
  return token;
};

exports.verifyJWT = (token) => {
  try {
    // Verify the JWT using the secret key
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return decoded;
  } catch (err) {
    throw ('error occured:', err.message);
  }
};
