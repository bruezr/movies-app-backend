const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 255,
  },
  description: {
    type: String,
    required: true,
  },
  release_date: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Movie', movieSchema);
