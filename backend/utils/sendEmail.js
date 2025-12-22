const nodemailer = require("nodemailer");

let transporter;

const getTransporter = () => {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });
  }
  return transporter;
};

const sendEmail = async ({ subject, text, html }) => {
  const mailer = getTransporter();

  return mailer.sendMail({
    from: `"Contact Form" <${process.env.MAIL_FROM}>`,
    to: process.env.ADMIN_EMAIL,
    subject,
    text,
    html,
  });
};

module.exports = sendEmail;
