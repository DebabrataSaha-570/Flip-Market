const express = require("express");
const cors = require("cors");
const app = express();

const errorMiddleware = require("./middleware/error");

//middleware
app.use(cors());
app.use(express.json());

//Route imports
const product = require("./routes/productRoute");

app.use("/api/v1", product);

//Middleware for error
app.use(errorMiddleware);

module.exports = app;
