// ============================================
// IMPORTS (All require statements at the top)
// ============================================

// Load environment variables from .env file
const dotenv = require('dotenv');
dotenv.config();

// Import express - this creates our server
const express = require('express');

// Import our database connection function
const connectDB = require('./config/db');

// Import Contact Routes
const contactRoutes = require('./routes/contactRoutes');

// Import CORS
const cors = require('cors');


// ============================================
// APP SETUP
// ============================================

// Create the express app
const app = express();


// ============================================
// MIDDLEWARE
// ============================================

// Allow React frontend to talk to our backend
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

// Convert incoming data to JSON
app.use(express.json());

// Simple logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});


// ============================================
// ROUTES
// ============================================

// Home route
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: '🎉 Backend is running!',
        version: '1.0.0'
    });
});

// API health check
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'API is healthy',
        database: 'Connected'
    });
});

// Use Contact Routes
app.use('/api/contact', contactRoutes);


// ============================================
// 404 HANDLER
// ============================================

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Cannot find ${req.method} ${req.path}`
    });
});


// ============================================
// START THE SERVER
// ============================================

connectDB().then(() => {
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log('');
        console.log('🚀 ==========================================');
        console.log(`🚀 Server running on: http://localhost:${PORT}`);
        console.log('🚀 ==========================================');
        console.log('');
        console.log('Available routes:');
        console.log(`   GET  http://localhost:${PORT}/`);
        console.log(`   GET  http://localhost:${PORT}/api/health`);
        console.log(`   POST http://localhost:${PORT}/api/contact`);
        console.log('');
    });
});