const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true });
const jsonMovieSchema = require('./movieSchema.json');
const jsonUserSchema = require('./userSchema.json');

exports.validateMovie = ajv.compile(jsonMovieSchema);

exports.validateUser = ajv.compile(jsonUserSchema);
