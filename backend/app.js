const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const contactRoute = require("./routes/contact.route.js");

const app = express();

const allowedOrigins = [
  "https://portfolio-website-chi-gilt.vercel.app",
  "http://localhost:5173"
];

// Security & Gzip Compression
app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json({ limit: "10kb" }));

app.use("/api", contactRoute);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `${req.path} not found`,
  });
});

module.exports = app;