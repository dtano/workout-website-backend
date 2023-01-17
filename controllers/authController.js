const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json("Hello world");
});

router.post("/register", (req, res) => {
    res.status(200).json("Registered user");
});

router.post("/login", (req, res) => {
    res.status(200).json("Login user");
});

router.post("/logout", (req, res) => {
    // Don't know if necessary
});


module.exports = router;