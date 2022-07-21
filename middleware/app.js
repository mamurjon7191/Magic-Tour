const express = require("express");
const morgan = require("morgan");
const tourRouter = require("../router/tourRouter");
const userRouter = require("../router/userRouter");
const reviewRouter = require("../router/reviewRouter");
const errController = require("../controller/errController");
const AppError = require("../utility/AppError");

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/reviews", reviewRouter);

app.use("*", (req, res, next) => {
  next(new AppError("Bunday page topilmadi", 404));
});

app.use(errController);

module.exports = app;
