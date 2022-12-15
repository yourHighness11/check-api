const { default: mongoose } = require("mongoose");

const CarSchema = mongoose.Schema({
  name:String,
  creator: { type: mongoose.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Car", CarSchema);
