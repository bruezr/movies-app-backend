const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './.env' });

const jwtPrivateKey = process.env.JWT_PRIVATE_KEY;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    maxlength: 255,
    minlength: 5,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    maxlength: 1024,
    minlength: 5,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, jwtPrivateKey);
  return token;
};

module.exports = mongoose.model('User', userSchema);
