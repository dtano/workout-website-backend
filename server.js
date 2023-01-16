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

app.use("/api/auth", authController);

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