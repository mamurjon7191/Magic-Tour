const errController = (err, req, res, next) => {
  err.message = err.message || "Page is not defined";
  err.status = err.status || "Failed";
  err.statusCode = err.statusCode || 404;
  res.status(404).json({
    message: err.message,
    status: err.status,
    statusCode: err.statusCode,
    stack: err.stack,
  });
};
module.exports = errController;
