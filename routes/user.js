const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const userAuth = require("../middleware/userAuth");

router.get("/:id", (req, res) => {
    userController.getUser(req, res, req.params.id);
});

router.put("/:id", userAuth.validateUpdateDetails, (req, res) => {
    userController.updateUser(req, res, req.params.id);
});

module.exports = router;