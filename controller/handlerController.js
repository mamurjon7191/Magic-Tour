const AppError = require("../utility/AppError");
const catchErrorAsync = require("../utility/catchErrorAsync");
const featureApi = require("../utility/featureApi");

const responseFunc = (res, statusCode, data) => {
  if (Array.isArray(data)) {
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

const getAll = catchErrorAsync(
  async (req, res, next, Model, option1, option2) => {
    let data = new featureApi(req.query, Model)
      .filter()
      .sort()
      .field()
      .pagination();
    if (option2) {
      data = await data.model.populate(option1).populate(option2);
      console.log(option2);
    } else if (option1) {
      data = await data.model.populate(option1);
    } else {
      data = await data.model;
    }

    console.log(data.length);

    responseFunc(res, 200, data);
  }
);
const getOne = catchErrorAsync(
  async (req, res, next, Model, option1, option2) => {
    if (option2) {
      data = await Model.findById(req.params.id)
        .populate(option1)
        .populate(option2);
    } else if (option1) {
      data = await Model.findById(req.params.id).populate(option1);
    } else {
      data = await Model.findById(req.params.id);
    }
    responseFunc(res, 200, data);
  }
);
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
