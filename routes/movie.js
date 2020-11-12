const express = require('express');
const movieController = require('../controllers/movie');
const router = express.Router();

router.get('/movies', movieController.getMovies);

router.get('/movie/:movieId', movieController.getMovie);

router.post('/movie', movieController.createMovie);

router.put('/movie/:movieId', movieController.updateMovie);

router.delete('/movie/:movieId', movieController.deleteMovie);

module.exports = router;
