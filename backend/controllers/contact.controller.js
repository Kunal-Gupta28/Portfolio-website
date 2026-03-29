const Contact = require("../models/contact.model");
const { validationResult } = require("express-validator");
const sendEmail = require("../utils/sendEmail");
const sanitize = require("../utils/sanitize");

const createContact = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Invalid input",
    });
  }

  try {
    let { name, email, subject, message } = req.body;

    // Sanitize inputs
    name = sanitize(name);
    email = sanitize(email);
    subject = sanitize(subject);
    message = sanitize(message);

    // Save to DB
    await Contact.create({ name, email, subject, message });

    // Send email
    sendEmail({
      name,
      email,
      subject,
      message,
    }).catch((err) => {
      console.error("Email failed:", err.message);
    });

    return res.status(201).json({
      success: true,
      message: "Message received successfully",
    });
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = { createContact };
