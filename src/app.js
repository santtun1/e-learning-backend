// src/app.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const recommendationRoutes = require("./routes/recommendationRoutes");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
  res.send("🎉 Backend is running! Use POST /api/recommend-courses");
});

// API routes
app.use("/api", recommendationRoutes);

module.exports = app;
