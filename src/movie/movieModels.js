const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  release: {
    type: Number,
    min: 1888,
    max: new Date().getFullYear(),
    required: true
  },
  actor: String,
  genre: String,
  rating: {
    type: Number,
    min: 0,
    max: 10
  }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;