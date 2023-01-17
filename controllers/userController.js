const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
    res.status(200).json("Get user wth id " + req.params.id);
});

router.put("/:id", (req, res) => {
    res.status(200).json("Update user with id " + req.params.id);
});

module.exports = router;