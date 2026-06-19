const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true,
    },
    phone: {
        type: String,
        required: [true, 'Please enter your phone number'],
        trim: true,
    },
    service: {
        type: String,
        required: [true, 'Please select a service'],
        trim: true,
    },
    message: {
        type: String,
        required: [true, 'Please enter a message'],
        trim: true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Contact', contactSchema);