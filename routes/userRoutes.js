const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");

router.post("/", userControllers.createUser);
router.get("/", userControllers.getAllUsers);
router.get("/:userId", userControllers.getUser);
router.patch("/:userId", userControllers.updateUser);

module.exports = router;
