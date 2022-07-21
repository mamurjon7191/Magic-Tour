const userRouter = require("express").Router();
const userController = require("../controller/userController");

userRouter
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.addUser);
userRouter
  .route("/:id")
  .get(userController.getOneUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRouter;
