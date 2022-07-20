const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL, () => {
  console.log("DB is connected");
});

const fs = require("fs");
const Tour = require("../model/tourModel");
const Review = require("../model/reviewModel");
const User = require("../model/userModel");

const tourData = JSON.parse(
  fs.readFileSync("./dev-data/data/tours.json", "utf-8")
);
const userData = JSON.parse(
  fs.readFileSync("./dev-data/data/users.json", "utf-8")
);
const reviewData = JSON.parse(
  fs.readFileSync("./dev-data/data/reviews.json", "utf-8")
);

const addData = async (req, res, next) => {
  try {
    // const tour = await Tour.create(tourData);
    const user = await User.create(userData);
    // const review = await Review.create(reviewData);
    console.log("Fayllar yozildi");
  } catch (err) {
    console.log(err.message);
  }
};

const deleteData = async (req, res, next) => {
  try {
    const tour = await Tour.deleteMany();
    const user = await User.deleteMany();
    const review = await Review.deleteMany();
    console.log("Fayllar Ochirildi");
  } catch (err) {
    console.log(err.message);
  }
};

addData();
