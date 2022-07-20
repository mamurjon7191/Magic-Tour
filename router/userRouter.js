const userRouter = require("express").Router();
const userController = require("../controller/userController");

userRouter.route("/").get(userController.getAllUsers);

module.exports = userRouter;
