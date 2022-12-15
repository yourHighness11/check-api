const { default: mongoose } = require("mongoose");
const HttpError = require("../models/http-error");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/cars-project"
    );
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
