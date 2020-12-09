const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.postUser = async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json('Invalid email or password');

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword)
      return res.status(400).json('Invalid email or password');

    const token = user.generateAuthToken();

    res.json(token);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
