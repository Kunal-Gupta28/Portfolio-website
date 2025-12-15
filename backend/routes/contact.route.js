const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { createContact } = require("../controllers/contact.controller");

router.post(
    "/",
    body("name").isString().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("subject").isString().notEmpty().withMessage("Subject is required"),
    body("message").isString().notEmpty().withMessage("Message is required"),
    createContact
);

module.exports = router;
