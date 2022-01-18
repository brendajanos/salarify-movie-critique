import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("../data.json");

let movies = data;

export const createMovie = (req, res) => {
  const movie = req.body;
  movies.push({ ...movie });
  res.send(`Movie with the name ${movie.name} added to the database`);
};

export const getMovies = (req, res) => {
  res.send(movies);
};

export const getMovie = (req, res) => {
  const { id } = req.params;

  const foundMovie = movies.find((movie) => movie.id === id);
  res.send(foundMovie);
};

export const deleteMovie = (req, res) => {
  const { name } = req.params;

  movies = movies.filter((movie) => movie.name !== name);
  res.send(`Movie with the name of ${name} deleted from the database`);
};

export const patchMovie = (req, res) => {
  const { id } = req.params;
  const { name, director, year, stars, writers, review, ratings, imgUrl } =
    req.body;
  const movie = movies.find((movie) => movie.id === id);

  if (name) {
    movie.name = name;
  }

  if (director) {
    movie.director = director;
  }

  if (year) {
    movie.year = year;
  }
  if (stars) {
    movie.stars = stars;
  }
  if (writers) {
    movie.writers = writers;
  }
  if (review) {
    movie.review = review;
  }

  if (ratings) {
    movie.ratings = ratings;
  }
  if (imgUrl) {
    movie.imgUrl = imgUrl;
  }

  res.send(`Movie with the ${id} updated`);
};
