const User = require("../models/User");

const createUser = async (req, res) => {
  const { name, age } = req.body;
  const user = new User({
    name,
    age,
    mycars: [],
  });
  await user.save((err) => {
    if (!err) {
      res.json({ message: "User created" });
    }
  });
};

const getAllUsers = async (req, res) => {
  await User.find({}).exec(function (err, results) {
    res.json({ USERS: results });
  });
};

const getUser = async (req, res) => {
  const userId = req.params.userId;
  await User.findById(userId).exec(function (err, results) {
    res.json({ USERS: results });
  });
};

const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const { name, age } = req.body;
  await User.findByIdAndUpdate(userId, {
    name,
    age,
  }).exec(function (err) {
    res.json({ message: "User updated." });
  });
};
module.exports = { createUser, getUser, getAllUsers, updateUser };
