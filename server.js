const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const DATA = require("./movieData.json");

const app = express();

app.use(morgan("morgan"));
app.use(cors());
app.use(helmet());

app.get("/movie", (req, res) => {
  let response = DATA;

  // Validate correct data
  if (req.query.genre) {
    response = response.filter(movie =>
      movie.genre.toLowerCase().includes(req.query.genre.toLowerCase())
    );
  }
  if (req.query.country) {
    response = response.filter(movie =>
      movie.country.toLowerCase().includes(req.query.country.toLowerCase())
    );
  }
  if (req.query.avg_vote) {
  }

  res.json(response);
});

app.listen(8000, () => {
  console.log("Server started on PORT 8000");
});
