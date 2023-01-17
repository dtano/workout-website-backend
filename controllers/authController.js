const express = require("express");
const router = express.Router();
const userAuth = require("../middleware/userAuth");
const authService = require("../services/authService");

router.post("/register", userAuth.validateRegistrationDetails, authService.register);
router.post("/login", authService.login);
router.post("/logout", (req, res) => {
    // Don't know if necessary
});

module.exports = router;