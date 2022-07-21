const AppError = require("./AppError");

const catchErrorAsync = (funksiya) => {
  const catchError = (req, res, next, Model) => {
    funksiya(req, res, next, Model).catch((err) => {
      next(new AppError(err.message, err.statusCode));
    });
  };
  return catchError;
};

module.exports = catchErrorAsync;
