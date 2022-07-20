const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  review: {
    type: Number,
    required: [true, "Siz reviewni kiritishingiz kerak!"],
  },
});

const Review = mongoose.model("users", reviewSchema);

module.exports = Review;

// {
//   "_id": "5c8a34ed14eb5c17645c9108",
//   "review": "Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti mattis praesent feugiat eu nascetur a tincidunt",
//   "rating": 5,
//   "user": "5c8a1dfa2f8fb814b56fa181",
//   "tour": "5c88fa8cf4afda39709c2955"
// },
