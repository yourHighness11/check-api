const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  mycars: [{ type: mongoose.Types.ObjectId, ref: "Car" }],
});

module.exports = mongoose.model("User", UserSchema);
