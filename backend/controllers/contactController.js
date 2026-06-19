const Contact = require('../models/Contact');
const { sendContactNotification } = require('../services/emailService');

const submitContact = async (req, res) => {
    try {
        const { name, phone, service, message } = req.body;

        // 1. Save to database
        const contact = await Contact.create({
            name,
            phone,
            service,
            message
        });

        // 2. Send email notification (We don't use 'await' here so the user gets the success message instantly)
        sendContactNotification(contact);

        // 3. Send success to React
        res.status(201).json({
            success: true,
            message: 'Message sent successfully!',
            data: contact
        });

    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                message: messages[0]
            });
        }

        res.status(500).json({
            success: false,
            message: 'Server Error. Please try again later.'
        });
    }
};

module.exports = { submitContact };