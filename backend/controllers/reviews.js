import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("../data.json");

let reviews = data;

export const createReview = (req, res) => {
  const review = req.body;
  reviews.push(review);
  res.send(`review with the name ${review.name} added to the database`);
  console.log(reviews);
};

export const getReviews = (req, res) => {
  res.send(reviews);
};

export const getReview = (req, res) => {
  const { id } = req.params;

  const foundReview = reviews.find((review) => review.id === parseInt(id))
  res.send(foundReview);
};

export const deleteReview = (req, res) => {
  const { id } = req.params;

  reviews = reviews.filter((review) => review.id !== parseInt(id));
  res.send(`reviews with the name of ${id} deleted from the database`);
};

export const patchReview = (req, res) => {
  const { id } = req.params;
  const { name, director, year, stars, writers, review:description, ratings, imgUrl } =
    req.body;
  let review = reviews.find((review) => review.id === parseInt(id));

  
  if (name) {
    review.name = name;
  }

  if (director) {
    review.director = director;
  }

  if (year) {
    review.year = year;
  }
  if (stars) {
    review.stars = stars;
  }
  if (writers) {
    review.writers = writers;
  }
  if (description) {
    review.review = description;
  }

  if (ratings) {
    review.ratings = ratings;
  }
  if (imgUrl) {
    review.imgUrl = imgUrl;
  }
  

  res.send(`Review with the ${id} updated`);
};
