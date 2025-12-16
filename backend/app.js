const express = require("express");
const cors = require("cors");
const contactRoute = require("./routes/contact.route.js");

const app = express();

app.use(cors());

app.use(express.json());
console.log("CORS: allowing all origins (debug)");

app.use("/api", contactRoute);

// 404 handler – must be AFTER all routes
app.use((req, res) => {

  res.status(404).json({
    success: false,
    message: `${req.path} not found`,
  });
});

module.exports = app;
