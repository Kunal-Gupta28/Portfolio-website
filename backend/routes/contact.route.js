const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const { createContact } = require("../controllers/contact.controller");
const contactLimiter = require("../middlewares/contactLimiter");

router.post(
  "/contact",
  contactLimiter,
  body("name")
    .trim()
    .isString()
    .notEmpty()
    .withMessage("Name is required"),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Valid email is required"),

  body("subject")
    .trim()
    .isString()
    .notEmpty()
    .withMessage("Subject is required"),

  body("message")
    .trim()
    .isString()
    .notEmpty()
    .withMessage("Message is required"),

  createContact
);

module.exports = router;
