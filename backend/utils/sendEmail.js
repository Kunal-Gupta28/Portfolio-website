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
    });
  }
  return transporter;
};

const sendEmail = async ({ name, email, subject, message }) => {
  const mailer = getTransporter();

  return mailer.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    replyTo: email,

    subject: `📩 ${subject} | From ${name}`,

    text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Time: ${new Date().toLocaleString()}
    `,

    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin:auto; line-height:1.6;">
        <h2 style="color:#222;">📩 New Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <p><strong>Message:</strong></p>
        <div style="background:#f4f4f4;padding:12px;border-radius:6px;">
          ${message.replace(/\n/g, "<br/>")}
        </div>
        <hr />
        <p style="font-size:12px;color:#777;">
          Sent from your portfolio contact form
        </p>
      </div>
    `,
  });
};

module.exports = sendEmail;
