const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: [true, "Siz reviewni kiritishingiz kerak!"],
  },
  rating: {
    type: Number,
    required: [true, "Siz ratingni kiritishingiz kerak!"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
  },
  tour: {
    type: mongoose.Schema.ObjectId,
    ref: "tours",
  },
});

const Review = mongoose.model("reviews", reviewSchema);

module.exports = Review;

// {
//   "_id": "5c8a34ed14eb5c17645c9108",
//   "review": "Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti mattis praesent feugiat eu nascetur a tincidunt",
//   "rating": 5,
//   "user": "5c8a1dfa2f8fb814b56fa181",
//   "tour": "5c88fa8cf4afda39709c2955"
// },
