const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GEMINI_API_KEY } = require("../config/dotenvConfig");

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

const generateCourseRecommendations = async (interests, pastCourses) => {
  const prompt = `
    🎓 Student Interests: ${interests.join(", ")}
    📘 Past Enrollments: ${pastCourses.length ? pastCourses.join(", ") : "None"}

    Based on the interests and past enrollments above, suggest 5 personalized online courses.
    🔹 Use short bullet points.
    🔹 Mention course names and topics.
    🔹 Keep responses crisp, clear, and engaging.
  `;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (err) {
    console.error("Gemini API Error:", err);
    return "Could not fetch course recommendations.";
  }
};

module.exports = { generateCourseRecommendations };
