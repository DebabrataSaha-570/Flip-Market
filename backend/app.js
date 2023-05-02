const express = require("express");
const cors = require("cors");
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//Route imports
const product = require("./routes/productRoute");

app.use("/api/v1", product);

module.exports = app;
