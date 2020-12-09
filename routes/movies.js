const express = require('express');
const movieController = require('../controllers/movie');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', movieController.getMovies);

router.get('/:movieId', movieController.getMovie);

router.post('/', auth, movieController.createMovie);

router.put('/:movieId', auth, movieController.updateMovie);

router.delete('/:movieId', auth, movieController.deleteMovie);

module.exports = router;
