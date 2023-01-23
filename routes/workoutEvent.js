const express = require("express");
const router = express.Router();
const userWorkoutController = require("../controllers/workoutEventController");
const userAuth = require("../middleware/userAuth");

router.get("/:userId", userAuth.doesUserExist, userWorkoutController.getAllUserWorkouts);
router.post("/:userId", userAuth.doesUserExist, userWorkoutController.createWorkoutEvent);
router.get("/:userId/report", userAuth.doesUserExist, userWorkoutController.getWorkoutHistoryReport);

module.exports = router;