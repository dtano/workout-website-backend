const express = require("express");
const router = express.Router();
const userAuth = require("../middleware/userAuth");
const authController = require("../controllers/authController");

router.post("/register", userAuth.validateRegistrationDetails, authController.register);
router.post("/login", authController.login);

module.exports = router;