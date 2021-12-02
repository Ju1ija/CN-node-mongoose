const Movie = require("./movieModels");

exports.addMovie = async (movieObj) => {
  try {
    const movie = await new Movie(movieObj);
    await movie.save();
    console.log(`Successfully added ${movie.title} (${movie.release}).`);
  } catch (error) {
    console.log(error);
  }
}

exports.listMovies = async () => {
  try {
    console.log(await Movie.find({}));
  } catch (error) {
    console.log(error);
  }
}

// exports.filterMovies = async () => {
//   try {

//   } catch (error) {
//     console.log(error);
//   }
// }

exports.updateMovie = async (movieId, movieObj) => {
  try {
    await Movie.findByIdAndUpdate(movieId, movieObj);
    const movie = await Movie.findById(movieId);
    console.log(`${movie.title} (${movie.release}) has been updated.`);
  } catch (error) {
    console.log(error);
  }
}

exports.deleteMovie = async (movieId) => {
  try {
    const movie = await Movie.findById(movieId);
    console.log(`${movie.title} (${movie.release}) has been deleted.`);
    await Movie.deleteOne({ _id: movieId });
  } catch (error) {
    console.log(error);
  }
}