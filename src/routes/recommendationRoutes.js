const express = require("express");
const { recommendCourses } = require("../controllers/recommendationController");

const router = express.Router();

router.post("/recommend-courses", recommendCourses);

module.exports = router;
