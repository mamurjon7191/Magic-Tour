const User = require("../model/userModel");

const {
  getAll,
  getOne,
  addOne,
  updateOne,
  deletaOne,
} = require("./handlerController");

const getAllUsers = (req, res, next) => {
  getAll(req, res, next, User);
};
const getOneUser = (req, res, next) => {
  getOne(req, res, next, User);
};
const addUser = (req, res, next) => {
  addOne(req, res, next, User);
};
const updateUser = (req, res, next) => {
  updateOne(req, res, next, User);
};
const deleteUser = (req, res, next) => {
  deletaOne(req, res, next, User);
};

module.exports = {
  getAllUsers,
  getOneUser,
  addUser,
  updateUser,
  deleteUser,
};
