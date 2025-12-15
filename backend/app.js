const express = require("express");
const cors = require("cors");
const contactRoute = require("./routes/contact.route");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();

app.use(express.json());

app.use(cors());



app.use("/api/contact", contactRoute);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
