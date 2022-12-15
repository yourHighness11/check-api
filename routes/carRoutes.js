const express = require("express");
const router = express.Router();
const carControllers = require("../controllers/carControllers");

router.post("/", carControllers.createCar);
router.delete("/:carId", carControllers.deleteCar);
router.get("/:creatorId", carControllers.getCar);

module.exports = router;
