const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController.js');

//Route to Fecth All Movies
router.get('/all-movies', movieController.getAllMovies);

//Route for creation of single movie
router.post('/create-movie', movieController.createMovie);

//Route for creation of multiple movie
router.post('/create-movies', movieController.createMultipleMovies);

//Route to update existing movie
router.put('/update-movie/:id', movieController.updateMovie);

//Route to delete existing movie
router.delete('/delete-movie/:id', movieController.deleteMovie);

module.exports = router;
