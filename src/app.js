const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const recommendationRoutes = require("./routes/recommendationRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", recommendationRoutes);

module.exports = app;
