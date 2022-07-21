const tourRouter = require("express").Router();
const tourController = require("../controller/tourController");

tourRouter
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.addTour);
tourRouter
  .route("/:id")
  .get(tourController.getOneTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = tourRouter;
