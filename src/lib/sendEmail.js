import nodemailer from "nodemailer";


const createFreshTransporter = () => {
  // Port 587 + STARTTLS is significantly faster than port 465 SSL for Gmail
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = port === 465; // only true for port 465
  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 10000,
    greetingTimeout: 8000,
    socketTimeout: 10000,
    pool: false, // serverless: no persistent pool
  });
};

export async function sendEmail({ name, email, subject, message }) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("⚠️ SMTP_PASS is missing in .env.local! Please add your Google App Password to receive real emails.");
    return false;
  }

  const mailer = createFreshTransporter();
  const formattedDate = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  const emailSubject = `[Portfolio Inquiry] ${subject} — ${name}`;

  const plainTextContent = `
NEW PORTFOLIO INQUIRY
----------------------------------------
SENDER: ${name}
EMAIL: ${email}
SUBJECT: ${subject}
DATE: ${formattedDate}

MESSAGE:
${message}
----------------------------------------
Direct Reply: mailto:${email}
  `.trim();

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${emailSubject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #050507; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f5f3ef; -webkit-font-smoothing: antialiased;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #050507; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="640" border="0" cellspacing="0" cellpadding="0" style="max-width: 640px; background-color: #0b0b0e; border: 1px solid #1e1e24; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
          
          <!-- Header Bar -->
          <tr>
            <td style="padding: 28px 32px; background-color: #0f0f13; border-bottom: 2px solid #ff5e24;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: 700; color: #ff824d; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 4px;">
                      KUNAL GUPTA &bull; PORTFOLIO DISPATCH
                    </span>
                    <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                      New Direct Message Received
                    </h1>
                  </td>
                  <td align="right" valign="top">
                    <span style="display: inline-block; padding: 6px 12px; border-radius: 20px; background-color: rgba(255, 94, 36, 0.12); border: 1px solid rgba(255, 94, 36, 0.3); font-family: 'Courier New', Courier, monospace; font-size: 10px; color: #ff824d; font-weight: 700; text-transform: uppercase; tracking: 1px;">
                      VERIFIED FORM
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sender Details Grid -->
          <tr>
            <td style="padding: 32px 32px 20px 32px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 14px; padding: 20px;">
                <tr>
                  <td width="50%" valign="top" style="padding-bottom: 14px;">
                    <span style="font-family: 'Courier New', Courier, monospace; font-size: 10px; color: #73737c; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">
                      SENDER NAME
                    </span>
                    <span style="font-size: 15px; font-weight: 700; color: #ffffff;">
                      ${name}
                    </span>
                  </td>
                  <td width="50%" valign="top" style="padding-bottom: 14px;">
                    <span style="font-family: 'Courier New', Courier, monospace; font-size: 10px; color: #73737c; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">
                      RETURN EMAIL
                    </span>
                    <a href="mailto:${email}" style="font-size: 15px; font-weight: 700; color: #ff824d; text-decoration: none;">
                      ${email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td width="50%" valign="top">
                    <span style="font-family: 'Courier New', Courier, monospace; font-size: 10px; color: #73737c; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">
                      PURPOSE / SUBJECT
                    </span>
                    <span style="font-size: 14px; font-weight: 600; color: #e4e4e7;">
                      ${subject}
                    </span>
                  </td>
                  <td width="50%" valign="top">
                    <span style="font-family: 'Courier New', Courier, monospace; font-size: 10px; color: #73737c; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">
                      DISPATCH TIMESTAMP
                    </span>
                    <span style="font-family: 'Courier New', Courier, monospace; font-size: 12px; color: #a1a1aa;">
                      ${formattedDate}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Body Container -->
          <tr>
            <td style="padding: 0 32px 32px 32px;">
              <span style="font-family: 'Courier New', Courier, monospace; font-size: 10px; color: #ff824d; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; display: block; margin-bottom: 10px;">
                MESSAGE BODY
              </span>
              <div style="background-color: #121216; border-left: 3px solid #ff5e24; border-top: 1px solid rgba(255,255,255,0.06); border-right: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06); border-radius: 0 12px 12px 0; padding: 22px 24px; font-size: 15px; line-height: 1.7; color: #d4d4d8; font-weight: 400; white-space: pre-wrap;">${message}</div>
            </td>
          </tr>

          <!-- CTA Action Row -->
          <tr>
            <td style="padding: 0 32px 32px 32px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <a href="mailto:${email}?subject=Re:%20${encodeURIComponent(subject)}" style="display: inline-block; padding: 14px 28px; background-color: #ff5e24; color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; font-weight: 700; text-decoration: none; border-radius: 10px; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(255, 94, 36, 0.35);">
                      Reply to ${name} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #070709; border-top: 1px solid #18181c; text-align: center;">
              <p style="margin: 0; font-family: 'Courier New', Courier, monospace; font-size: 11px; color: #73737c;">
                System Dispatch &bull; Kunal Gupta Portfolio Web Application
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  return mailer.sendMail({
    from: `"Kunal Gupta Portfolio" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
    replyTo: email,
    subject: emailSubject,
    text: plainTextContent,
    html: htmlContent,
  });
}
