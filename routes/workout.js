const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
    console.log("Get workout by workout id");
    // Should return workout details, and each exercise that it has
    res.status(200).json(`Get workout ${req.params.id}`);
});

module.exports = router;