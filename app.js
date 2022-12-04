const express = require('express');
const errorMiddleware = require("./middleware/error")
const app = express();
app.use(express.json());

//Routes Imports
const products = require('./routes/productRoute');

app.use("/api/v1", products)

//Middleware for Errors
app.use(errorMiddleware);


module.exports = app;