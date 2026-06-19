import nodemailer from "nodemailer";

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("⚠️  SMTP not configured — emails will be logged to console only");
    return null;
  }

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return transporter;
}

/**
 * Send an email. Falls back to console log if SMTP not configured.
 */
export async function sendMail({ to, subject, html, text }) {
  const transport = getTransporter();

  const mailOpts = {
    from: `"Technical Stars" <${process.env.SMTP_USER || "noreply@technicalstars.com"}>`,
    to,
    subject,
    html,
    text,
  };

  if (!transport) {
    console.log("\n📧 EMAIL (SMTP not configured — logged below):");
    console.log(`   To: ${to}`);
    console.log(`   Subject: ${subject}`);
    console.log(`   Body:\n${text}\n`);
    return { success: true, method: "console" };
  }

  try {
    const info = await transport.sendMail(mailOpts);
    console.log(`✅ Email sent: ${info.messageId}`);
    return { success: true, method: "smtp", messageId: info.messageId };
  } catch (error) {
    console.error("❌ Email send failed:", error.message);
    // Fallback to console log
    console.log(`📧 Fallback — To: ${to}, Subject: ${subject}`);
    return { success: true, method: "console-fallback", error: error.message };
  }
}
