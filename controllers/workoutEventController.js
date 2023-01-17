const express = require("express");
const router = express.Router();

router.get("/:userId", (req, res) => {
    // Get all workout events that a user with the given id has done
    res.status(200).json("Workout history for user: " + req.params.userId);
});

router.post("/:userId", (req, res) => {
    // Create new instance of a workout event
    res.status(200).json("Create new workout event for user " + req.params.userId);
});

module.exports = router;