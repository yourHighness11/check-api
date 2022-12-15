const { default: mongoose } = require("mongoose");
const Car = require("../models/Car");
const User = require("../models/User");

const createCar = async (req, res) => {
  const { name, creator } = req.body;
  const newCar = new Car({
    name,
    creator,
  });

  let user;

  try {
    user = await User.findById(creator);
    // console.log(user);
    await newCar.save();
    user.mycars.push(newCar);
    await user.save();
    res.json({ message: "Car created" });
  } catch (error) {
    console.log(error);
  }
};

const getCar = async (req, res) => {
  const creatorId = use.params.creatorId;
  await Car.findOne({ creator: creatorId }).exec(function (err, results) {
    res.json({ CARS: results });
  });
};

const deleteCar = async (req, res) => {
  let car;
  try {
    const carId = req.params.carId;
    car = await Car.findById(carId).populate("creator");

    await car.remove();
    car.creator.mycars.pull(car);
    await car.creator.save();
    res.json({ message: "Car deleted" });
  } catch (error) {}
};

module.exports = { createCar, getCar, deleteCar };
