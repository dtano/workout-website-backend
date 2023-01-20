const express = require("express");
const router = express.Router();
const weightHistoryController = require("../controllers/weightHistoryController");
const userAuth = require("../middleware/userAuth");

router.get("/:userId", userAuth.doesUserExist, weightHistoryController.getCurrentWeight);
router.get("/:userId/history", userAuth.doesUserExist, weightHistoryController.getWeightHistory);
router.post("/:userId", userAuth.doesUserExist, weightHistoryController.updateWeightHistory);

module.exports = router;