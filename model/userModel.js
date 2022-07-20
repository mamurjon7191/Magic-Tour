const mongoose = require("mongoose");

const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Siz nameni kiritishingiz shart"],
    minlength: [3, "Siz eng kamida 3 ta symbol ishlata olasiz"],
    maxlength: [30, "Siz eng kopida 12 ta symbol ishlata olasiz"],
  },
  role: {
    type: String,
    required: [true, "Siz roleni kiritishingiz kerak"],
    default: "user",
  },
  active: {
    type: Boolean,
    default: true,
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    select: false,
    min: [8, "Parolingiz minimum 8 ta symboldan iborat bolishi keark"],
    validate: {
      validator: function (val) {
        return validator.isStrongPassword(val);
      },
      message: "Iltimos kuchliroq password qoying",
    },
  },
  // passwordConfirm: {
  //   type: String,
  //   required: [true, "Siz password Confirmni kiritishingiz shart"],
  //   validate: {
  //     validator: function (val) {
  //       return val == this.password;
  //     },
  //     message: "Parolingiz mos kelmayabdi iltimos qayta urinib koring",
  //   },
  // },
  email: {
    type: String,
    required: [true, "Siz emailni kiritishingiz shart"],
    unique: [true, "Bu emaildan oldin foydalanilgan"],
    lowercase: true,
    validate: {
      validator: function (val) {
        return validator.isEmail(val);
      },
      message: "Bunday email topilmadi iltimos qaytadan kiriting",
    },
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
