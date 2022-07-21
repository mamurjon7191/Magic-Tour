const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  startLocation: {
    description: {
      type: String,
      required: [true, "Siz descriptionni kiritishingiz shart"],
    },
    type: {
      type: String,
      required: [true, "Siz typeni kiritishingiz shart"],
    },
    coordinates: [Number],
    address: {
      type: String,
      required: [true, "Siz addressni kiritishingiz shart"],
    },
  },
  ratingsAverage: {
    type: Number,
    required: [true, "Siz ratingsAverageni kiritishingiz shart"],
  },
  ratingsQuantity: {
    type: Number,
    required: [true, "Siz ratingsQuantity kiritishingiz shart"],
  },
  images: [String],
  startDates: [Date],
  name: {
    type: String,
    required: [true, "Siz nameni kiritishingiz shart"],
  },
  duration: {
    type: Number,
    required: [true, "Siz durationni kiritishingiz shart"],
  },
  maxGroupSize: {
    type: Number,
    required: [true, "Siz maxGroupSizeni kiritishingiz shart"],
  },
  difficulty: {
    type: String,
    required: true,
    enum: {
      values: ["easy", "difficult", "medium"],
      message: "Siz xato malumot kiritdingiz",
    },
  },
  guides: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "users",
    },
  ],
  price: {
    type: Number,
    required: [true, "Siz priceni kiritishingiz shart"],
  },
  summary: {
    type: String,
    required: [true, "Siz summaryni kiritishingiz shart"],
  },
  description: {
    type: String,
    required: [true, "Siz descriptionni kiritishingiz shart"],
  },
  imageCover: {
    type: String,
  },
  locations: [
    {
      description: {
        type: String,
        require: [true, "Siz descriptionni kiritishingiz kerak"],
      },
      type: {
        type: String,
        require: [true, "Siz typeni kiritishingiz kerak"],
      },
      day: {
        type: Number,
        require: [true, "Siz dayni kiritishingiz kerak"],
      },
      coordinates: [Number],
    },
  ],
});

tourSchema.virtual("reviews", {
  ref: "reviews", // collection nomi
  localField: "_id", // ozini id sini olib ketib
  foreignField: "tour", // tour fieldi bilan tekshiradi
});

const Tour = mongoose.model("tours", tourSchema);

module.exports = Tour;
