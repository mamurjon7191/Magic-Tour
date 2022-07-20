const mongoose = require("mongoose");
// const dotenv = require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL, () => {
  console.log("DB is connected");
});
