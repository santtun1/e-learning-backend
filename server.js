const app = require("./src/app");
const { PORT } = require("./src/config/dotenvConfig");

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log("🎉 Ready to recommend courses based on student interests!");
});
