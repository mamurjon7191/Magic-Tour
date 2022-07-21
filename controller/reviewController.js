const Review = require("../model/reviewModel");

const {
  getAll,
  getOne,
  addOne,
  updateOne,
  deletaOne,
} = require("./handlerController");

const getAllReviews = (req, res, next) => {
  getAll(req, res, next, Review);
};
const getOneReview = (req, res, next) => {
  getOne(req, res, next, Review);
};
const addReview = (req, res, next) => {
  addOne(req, res, next, Review);
};
const updateReview = (req, res, next) => {
  updateOne(req, res, next, Review);
};
const deleteReview = (req, res, next) => {
  deletaOne(req, res, next, Review);
};

module.exports = {
  getAllReviews,
  getOneReview,
  addReview,
  updateReview,
  deleteReview,
};
