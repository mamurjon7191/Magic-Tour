const AppError = require("./AppError");

const catchErrorAsync = (funksiya) => {
  const catchError = (req, res, next, Model, option1, option2) => {
    funksiya(req, res, next, Model, option1, option2).catch((err) => {
      next(new AppError(err.message, err.statusCode));
    });
  };
  return catchError;
};

module.exports = catchErrorAsync;
