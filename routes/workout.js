const express = require("express");
const router = express.Router();
const workoutController = require("../controllers/workoutController");

router.get("/:id", workoutController.getWorkout);
router.get("/", workoutController.getAllWorkouts);

module.exports = router;