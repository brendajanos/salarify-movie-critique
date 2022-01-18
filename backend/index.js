import express from "express";
import bodyParser from "body-parser";
import reviewsRoutes from "./routes/reviews.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use("/reviews", reviewsRoutes);

app.get("/", (req, res) => {
  console.log("test");
  res.send("Test");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
