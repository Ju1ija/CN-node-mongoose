const mongoose = require("mongoose");
const Movie = require("./movieModels");

exports.addMovie = async (movieObj) => {
  try {
    const movie = await new Movie(movieObj);
    await movie.save();
    console.log(`Successfully added ${movie.title} (${movie.release}).`);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

exports.listMovies = async () => {
  try {
    console.log(await Movie.find({}));
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

exports.filterMovies = async (value1, value2) => {
  try {
    let matches = [];

    switch (value1) {
      case "released before":
        matches = await Movie.find({ release: { $lt: value2 } });
        break;
      case "released after":
        matches = await Movie.find({ release: { $gte: value2 } });
        break;
      case "rated above":
        matches = await Movie.find({ rating: { $gte: value2 } });
        break;
      case "rated below":
        matches = await Movie.find({ rating: { $lt: value2 } });
        break;
      default:
        const movieObj = {}
        movieObj[value1] = value2;
        matches = await Movie.find(movieObj);
    }
    console.log(matches.length === 0 ? "No matches found." : matches);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

exports.updateMovie = async (movieId, movieObj) => {
  try {
    await Movie.findByIdAndUpdate(movieId, movieObj);
    const movie = await Movie.findById(movieId);
    console.log(`${movie.title} (${movie.release}) has been updated.`);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

exports.deleteMovie = async (movieId) => {
  try {
    const movie = await Movie.findById(movieId);
    console.log(`${movie.title} (${movie.release}) has been deleted.`);
    await Movie.deleteOne({ _id: movieId });
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}