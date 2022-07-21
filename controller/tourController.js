const catchErrorAsync = require("../utility/catchErrorAsync");
const Tour = require("../model/tourModel");

const {
  getAll,
  getOne,
  addOne,
  updateOne,
  deletaOne,
} = require("./handlerController");

const option1 = {
  path: "guides",
  select: "name",
};
const option2 = {
  path: "reviews",
};

const getAllTours = async (req, res, next) => {
  getAll(req, res, next, Tour, option1, option2);
};

const getOneTour = (req, res, next) => {
  getOne(req, res, next, Tour, option1, option2);
};

const addTour = (req, res, next) => {
  addOne(req, res, next, Tour);
};

const updateTour = (req, res, next) => {
  updateOne(req, res, next, Tour);
};

const deleteTour = (req, res, next) => {
  deletaOne(req, res, next, Tour);
};

module.exports = {
  getAllTours,
  getOneTour,
  addTour,
  updateTour,
  deleteTour,
};

// const getAllTours = catchErrorAsync(async (req, res, next) => {
//   // 1.----------------Filter----------------

//   // a.Basic filter
//   // const data = await Tour.find(req.query);

//   // b.Advanced filter
//   // duration[gt]=20 userdan shunaqa yiziladi
//   // duration[?gt]=20 biz uni oldiga soroq qoyib jonatamiza

//   const rootQuery = ["field", "pagination", "filter", "sort"];

//   let query = { ...req.query };

//   rootQuery.forEach((val) => {
//     delete query[val];
//   });

//   query = JSON.stringify(query);

//   query = query.replace(/\bgt|gte|lt|lte\b/g, (val) => `$${val}`);

//   query = JSON.parse(query);

//   let data = Tour.find(query);

//   // 2.----------------Sorting----------------

//   if (req.query.sort) {
//     // ?sort=duration,rating ni user yozsa biz sortni ichiga shuni vergulsiz qilib tashash kerak
//     const boshJoylikQuery = req.query.sort.split(",").join(" ");
//     data = data.sort(boshJoylikQuery);
//   }

//   // 3.----------------field----------------
//   if (req.query.field) {
//     // field ham sortga oxshaydi urlga user vergul bilan yozadi lekin biz fieldni ichiga boshjoy tashab kiritishimiz kerak
//     const boshJoylikQuery = req.query.field.split(",").join(" ");
//     data = data.select(boshJoylikQuery);
//   }
//   // 4.----------------pagination----------------
//   if (req.query.page) {
//     const page = req.query.page || 1;
//     const limit = req.query.limit || 5;
//     data = data.skip((page - 1) * limit).limit(limit);
//   }
//   //------------------------------------------------------------

//   data = await data;

//   res.status(200).json({
//     message: "ishladi",
//     result: data.length,
//     data: data,
//   });
// });
