import express from "express";
import { createMovie, getMovies,getMovie,deleteMovie,patchMovie} from "../controllers/movies.js";

const router = express.Router();


//create an endpoint to query movies, (name, year, image and the average rating)
router.get("/",getMovies);

//create an endpoint to add movies, input data should be validated backend side!
router.post("/", createMovie);

//create an endpoint to fetch details by movie
router.get("/:id",getMovie);

//delete movies
router.delete("/:id", deleteMovie);

//create and endpoint to update movies
router.patch("/:id", patchMovie)

export default router;