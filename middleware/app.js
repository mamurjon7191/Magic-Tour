const express = require("express");
const morgan = require("morgan");
const tourRouter = require("../router/tourRouter");
const userRouter = require("../router/userRouter");
const reviewRouter = require("../router/reviewRouter");

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/reviews", reviewRouter);

module.exports = app;
