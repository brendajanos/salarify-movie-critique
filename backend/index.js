import express from "express";
import bodyParser from "body-parser";
import moviesRoutes from "./routes/movies.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use("/movies", moviesRoutes);

app.get("/", (req, res) => {
  console.log("test");
  res.send("Test");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
