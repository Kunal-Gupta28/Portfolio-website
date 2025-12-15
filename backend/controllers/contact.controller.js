const Contact = require("../models/contact.model");

const createContact = async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log(name);

  if (!name || !email || !subject || !message) {
    res.status(400);
    throw new Error("All fields are required");
  }

  await Contact.create({
    name,
    email,
    subject,
    message,
  });

  res.status(201).json({
    success: true,
    message: "Message sent successfully",
  });
};

module.exports = {
  createContact,
};
