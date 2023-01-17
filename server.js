const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require('sequelize');
const dotenv = require('dotenv').config();

const app = express();

// Middleware setting
app.use(cors({
    origin: "http://localhost:8080"
}));
app.use(express.json());

// Setup routes
const authController = require("./controllers/authController");
const userController = require("./controllers/userController");
const workoutController = require("./controllers/workoutController");
const workoutEventController = require("./controllers/workoutEventController");
const weightHistoryController = require("./controllers/weightHistoryController");

app.use("/api/auth", authController);
app.use("/api/user", userController);
app.use("/api/workout", workoutController);
app.use("/api/workout/event", workoutEventController);
app.use("/api/weight", weightHistoryController);

// Sync db
const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;