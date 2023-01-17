const express = require("express");
const router = express.Router();

router.get("/:userId", (req, res) => {
    // Gets most recent user weight
    res.status(200).json(`User ${req.params.userId} recent weight: 75kg`);
});

router.get("/:userId/history", (req, res) => {
    // Gets the complete history of a user's weight
    res.status(200).json(`Full history of user ${req.params.userId}`);
});

router.post("/:userId", (req, res) => {
    // Creates a new weight change record
    res.status(200).json(`Create new weight change record for user ${req.params.userId}`);
});

module.exports = router;