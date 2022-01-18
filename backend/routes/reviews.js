import express from "express";
import { createReview, getReviews,getReview,deleteReview,patchReview} from "../controllers/reviews.js";

const router = express.Router();


//create an endpoint to query movies, (name, year, image and the average rating)
router.get("/",getReviews);

//create an endpoint to add movies, input data should be validated backend side!
router.post("/", createReview);

//create an endpoint to fetch details by movie
router.get("/:id",getReview);

//delete movies
router.delete("/:id", deleteReview);

//create and endpoint to update movies
router.patch("/:id", patchReview)

export default router;