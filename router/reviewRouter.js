const reviewRouter = require("express").Router();
const reviewController = require("../controller/reviewController");

reviewRouter.route("/").get(reviewController.getAllReviews);

module.exports = reviewRouter;
