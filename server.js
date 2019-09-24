const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(morgan("morgan"));
app.use(cors());
app.use(helmet());

app.get("/movie", (req, res) => {
  res.send("Yay it worked!");
});

app.listen(8000, () => {
  console.log("Server started on PORT 8000");
});
