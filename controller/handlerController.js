const AppError = require("../utility/AppError");
const catchErrorAsync = require("../utility/catchErrorAsync");
const featureApi = require("../utility/featureApi");

const responseFunc = (res, statusCode, data) => {
  if (Array.isArray(data)) {
    console.log(1);
    res.status(statusCode).json({
      status: "succes",
      data: data.length,
      data: data,
    });
  } else {
    res.status(statusCode).json({
      status: "success",
      data: data,
    });
  }
};

const getAll = catchErrorAsync(async (req, res, next, Model) => {
  let data = new featureApi(req.query, Model)
    .filter()
    .sort()
    .field()
    .pagination();

  data = await data.model;
  console.log(data.length);
  res.status(200).json({
    status: "success",
    data: data.length,
    data: data,
  });
});
const getOne = catchErrorAsync(async (req, res, next, Model) => {
  const data = await Model.findById(req.params.id);
  responseFunc(res, 200, data);
});
const addOne = catchErrorAsync(async (req, res, next, Model) => {
  const data = await Model.create(req.body);
  responseFunc(res, 201, data);
});
const updateOne = catchErrorAsync(async (req, res, next, Model) => {
  const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
    validator: true,
    new: true,
  });
  responseFunc(res, 202, data);
});
const deletaOne = catchErrorAsync(async (req, res, next, Model) => {
  const data = await Model.findByIdAndDelete(req.params.id);
  responseFunc(res, 204, data);
});

module.exports = {
  getAll,
  getOne,
  addOne,
  updateOne,
  deletaOne,
};
