// src/app.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { generateCourseRecommendations } = require("./services/geminiService");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Optional: Root test route
app.get("/", (req, res) => {
  res.send("🎉 Backend is running! Use POST /api/recommend-courses");
});

// Course Recommendation API
app.post("/api/recommend-courses", async (req, res) => {
  try {
    const { interests, pastCourses } = req.body;

    if (!interests || interests.length === 0) {
      return res.status(400).json({ error: "Interests are required" });
    }

    const recommendation = await generateCourseRecommendations(
      interests,
      pastCourses || []
    );
    res.json({ recommendation });
  } catch (err) {
    console.error("Recommendation Error:", err);
    res.status(500).json({ error: "Failed to generate recommendations" });
  }
});

module.exports = app;
