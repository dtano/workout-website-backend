const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require('sequelize');
const dotenv = require('dotenv').config();

const app = express();

// Middleware setting
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.json());

// Setup routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const workoutRoutes = require("./routes/workout");
const workoutEventRoutes = require("./routes/workoutEvent");
const weightHistoryRoutes = require("./routes/weightHistory");

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/workout", workoutRoutes);
app.use("/api/workout/event", workoutEventRoutes);
app.use("/api/weight", weightHistoryRoutes);

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