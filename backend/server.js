const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Allow your Vercel frontend to talk to this backend
app.use(cors({
    origin: ['http://localhost:5173', 'https://technicalstars.online'],
    credentials: true
}));

app.use(express.json());

// API Routes
app.get('/api/health', (req, res) => {
    res.json({ success: true, message: 'API is healthy' });
});

app.use('/api/contact', contactRoutes);

// 404 Handler (For API only)
app.use((req, res) => {
    res.status(404).json({ success: false, message: `API Route not found` });
});

// Start Server
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Backend API running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Database connection failed:', err);
});