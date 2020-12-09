const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './.env' });

const jwtPrivateKey = process.env.JWT_PRIVATE_KEY;

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) return res.status(401).send('Access denied');

  try {
    const decoded = jwt.verify(token, jwtPrivateKey);
    req.user = decoded;
    next();
  } catch (error) {
    error.statusCode = 400;
    error.message = 'Invalid Token';
    next(error);
  }
};
