const Contact = require("../models/contact.model");
const { validationResult } = require("express-validator");
const sendEmail = require("../utils/SendEmail");
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

    await Contact.create({ name, email, subject, message });

    // Send email (non-blocking safety)
    sendEmail({
      subject: `📩 New Contact from Portfolio: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
      `,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    }).catch(err => {
      console.error("Email failed:", err.message);
    });

    return res.status(201).json({
      success: true,
      message: "Message received successfully",
    });

  } catch (err) {
    console.error("error" + err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = { createContact };
