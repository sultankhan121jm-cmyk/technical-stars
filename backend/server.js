// ============================================
// IMPORTS (All require statements at the top)
// ============================================


const path = require('path');


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


// ... (All your middleware and routes at the top) ...

// Use Contact Routes
app.use('/api/contact', contactRoutes);

// ============================================
// SERVE REACT FRONTEND
// ============================================

const path = require('path');

// Tell Express to serve files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// For any route that isn't an API, send the React index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
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
    });
});