const tourRouter = require("express").Router();
const tourController = require("../controller/tourController");

tourRouter.route("/").get(tourController.getAllTours);

module.exports = tourRouter;
