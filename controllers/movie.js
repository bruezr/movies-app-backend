const Movie = require('../models/movie');
const validate = require('../services/validator');

exports.getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.movieId);
    res.status(200).json(movie);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.createMovie = async (req, res, next) => {
  const validationResult = validate.validateMovie(req.body);

  try {
    if (!validationResult) {
      throw new Error('Validation error');
    }
    let movie = new Movie({
      title: req.body.title,
      description: req.body.description,
      release_date: req.body.release_date,
      stock: req.body.stock,
    });

    movie = await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.updateMovie = async (req, res, next) => {
  const validationResult = validate(req.body);

  try {
    if (!validationResult) {
      throw new Error('validation error');
    }
    const movie = await Movie.findByIdAndUpdate(
      req.params.movieId,
      {
        title: req.body.title,
        description: req.body.description,
        release_date: req.body.release_date,
        stock: req.body.stock,
      },
      { new: true }
    );
    res.status(200).json(movie);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.deleteMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findByIdAndRemove(req.params.movieId);
    res.status(200).json(movie);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
