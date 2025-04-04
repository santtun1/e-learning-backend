const { generateCourseRecommendations } = require("../services/geminiService");

const recommendCourses = async (req, res) => {
  try {
    const { interests, pastCourses } = req.body;

    if (!interests || interests.length === 0) {
      return res.status(400).json({ error: "Interests are required" });
    }

    const recommendation = await generateCourseRecommendations(interests, pastCourses || []);
    res.json({ recommendation });
  } catch (err) {
    console.error("Recommendation Error:", err);
    res.status(500).json({ error: "Failed to generate recommendations" });
  }
};

module.exports = { recommendCourses };
