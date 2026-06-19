import { Router } from "express";
import { sendMail } from "../services/email.js";

const router = Router();

/**
 * POST /api/contact
 * Receives contact form submissions and sends email notification.
 */
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, phone, service, message } = req.body;

    // ─── Validation ───
    const errors = {};

    if (!firstName || firstName.trim().length < 2) {
      errors.firstName = "First name is required (min 2 characters)";
    }
    if (!lastName || lastName.trim().length < 2) {
      errors.lastName = "Last name is required (min 2 characters)";
    }
    if (!phone || !/^(\+966|05)\d{8}$/.test(phone.trim())) {
      errors.phone = "Phone must start with +966 or 05 and be 10 digits";
    }
    if (!service || !service.trim()) {
      errors.service = "Please select a service";
    }
    if (!message || message.trim().length < 10) {
      errors.message = "Message is required (min 10 characters)";
    }

    // Sanitize inputs
    if (firstName) firstName = firstName.trim().slice(0, 100);
    if (lastName) lastName = lastName.trim().slice(0, 100);
    if (phone) phone = phone.trim();
    if (service) service = service.trim().slice(0, 200);
    if (message) message = message.trim().slice(0, 2000);

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    // ─── Build Email ───
    const recipient = process.env.CONTACT_EMAIL || "info@technicalstars.com";
    const subject = `New Inquiry from ${firstName} ${lastName} — ${service}`;
    const timestamp = new Date().toLocaleString("en-SA", { timeZone: "Asia/Riyadh" });

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <div style="background: #2563EB; color: white; padding: 20px 24px; border-radius: 12px 12px 0 0;">
          <h2 style="margin: 0; font-size: 18px;">New Contact Form Submission</h2>
          <p style="margin: 4px 0 0; opacity: 0.8; font-size: 13px;">${timestamp}</p>
        </div>
        <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; width: 120px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                <a href="tel:${phone}" style="color: #2563EB; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Service</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #374151; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #1f2937; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>
        </div>
        <div style="margin-top: 16px; text-align: center;">
          <a href="https://wa.me/966551895625?text=Hi, I'm ${encodeURIComponent(firstName)} ${encodeURIComponent(lastName)}. ${encodeURIComponent(message.slice(0, 100))}"
             style="display: inline-block; background: #25D366; color: white; padding: 10px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
            💬 Reply on WhatsApp
          </a>
        </div>
        <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 24px;">
          Technical Stars — Riyadh, Saudi Arabia
        </p>
      </div>
    `;

    const text = `
New Contact Form Submission
─────────────────────────
Time:    ${timestamp}
Name:    ${firstName} ${lastName}
Phone:   ${phone}
Service: ${service}
Message: ${message}
─────────────────────────
    `.trim();

    // ─── Send ───
    const result = await sendMail({ to: recipient, subject, html, text });

    return res.status(200).json({
      success: true,
      message: "Thank you! We'll contact you within 60 minutes.",
      emailSent: result.method,
    });

  } catch (error) {
    console.error("❌ Contact form error:", error);
    return res.status(500).json({
      success: false,
      error: "Something went wrong. Please try calling us directly.",
    });
  }
});

export { router as contactRouter };
