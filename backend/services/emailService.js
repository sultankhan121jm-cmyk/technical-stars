const { Resend } = require('resend');

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// This function sends an email to YOU when someone contacts you
const sendContactNotification = async (contactData) => {
    try {
        const { name, phone, service, message } = contactData;

        // Send the email
        const response = await resend.emails.send({
            from: 'Technical Stars <onboarding@resend.dev>', // Resend's default sender
            to: [process.env.OWNER_EMAIL], // Sends to your email
            subject: `🚨 New Lead: ${service} - ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #1e40af;">New Contact Form Submission</h2>
          <p>You have a new inquiry from your website!</p>
          
          <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #1e40af; margin-top: 15px;">
            <p><strong>👤 Name:</strong> ${name}</p>
            <p><strong>📞 Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>❄️ Service:</strong> ${service}</p>
            <p><strong>💬 Message:</strong> ${message}</p>
          </div>

          <p style="margin-top: 20px; color: #666; font-size: 14px;">
            Call them back as fast as possible to get the job! 🚀
          </p>
        </div>
      `,
        });

        console.log('📧 Email sent successfully!');
        return response;
    } catch (error) {
        console.error('❌ Failed to send email:', error);
    }
};

module.exports = { sendContactNotification };