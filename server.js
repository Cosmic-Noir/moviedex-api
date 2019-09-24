const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helment");

const app = express();

app.use(morgan("morgan"));
app.use(cors());
app.use(helmet());

app.listen(8000, () => {
  console.log("Server started on PORT 8000");
});
