const MovieModel = require('../models/movieModel.js');

//get All Movies
const getAllMovies = async (req, res) => {
    try {
      const movies = await MovieModel.find({});
      if(movies.length === 0){
        return res.status(404).json({message:'No movies found'});
      }
      res.status(200).json({message:'Movies fetched Successfully',movie:movies});
    } catch (error) {
      res.status(500).json({ error: 'Error while fetching Movies' });
    }
  };

//Create a single movie at a time
const createMovie = async (req, res) => {
    const { name, img, summary } = req.body;
  
    try {
      const newMovie = new MovieModel({ name, img, summary });
      const savedMovie = await newMovie.save();
      res.status(201).json({message:'Movie created successfully',movie:savedMovie});
    } catch (error) {
      res.status(500).json({ error: 'An Error Occurred while saving movie' });
    }
  };


//create multiple movies at a single time
const createMultipleMovies = async (req, res) => {
    try {
      const moviesData = req.body;
      const savedMovies = await MovieModel.insertMany(moviesData);
      res.status(201).json({message:'Movies created successfully',movie:savedMovies});
    } catch (error) {
      res.status(500).json({ error: 'An Error Occurred while saving movies' });
    }
  };


//update the existing movie
const updateMovie = async (req, res) => {
  const { name, img, summary } = req.body;
  const movieId = req.params.id;
try{
  const updatedMovie = await MovieModel.findByIdAndUpdate(
    movieId,
    { name, img, summary },
    { new: true })
    res.status(201).json({message:'Movie updated successfully',updatedMovie:updatedMovie});
}
    catch(error){
        res.status(500).send("An Error Occurred while updating the movie");
    }
    
};

//delete existing movie
const deleteMovie = async (req, res) => {
    const movieId = req.params.id;
    try {
      await MovieModel.findByIdAndRemove(movieId);
      res.json({ message: 'Movie deleted successfully' });
    } catch (error) {
      res.status(500).send("An Error Occurred while Deleting the Movie");
    }
  };

module.exports = {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  createMultipleMovies,
};
