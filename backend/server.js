const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// ========== CORS ==========
const allowedOrigins = [
    'http://localhost:5173',
    'https://technicalstars.online',
    'https://www.technicalstars.online',
    process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.warn(`[CORS] Blocked: ${origin}`);
            callback(null, false);
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// ========== MIDDLEWARE ==========
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ========== ROUTES ==========
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'API is healthy',
        timestamp: new Date().toISOString()
    });
});

app.use('/api/contact', contactRoutes);

// ========== 404 ==========
app.use('/api', (req, res) => {
    res.status(404).json({
        success: false,
        message: `API Route not found: ${req.method} ${req.path}`
    });
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Not found. This is an API server only.'
    });
});

// ========== START SERVER ==========
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`✅ Backend running on port ${PORT}`);
        console.log(`✅ Environment: ${process.env.NODE_ENV || 'development'}`);
    });

    // Keep Render awake
    const RENDER_URL = process.env.RENDER_EXTERNAL_URL;
    if (RENDER_URL && process.env.NODE_ENV === 'production') {
        console.log(`✅ Keep-alive enabled for: ${RENDER_URL}`);
        setInterval(async () => {
            try {
                const res = await fetch(`${RENDER_URL}/api/health`);
                if (res.ok) {
                    console.log(`[Keep-Alive] Ping OK at ${new Date().toLocaleTimeString()}`);
                }
            } catch (e) {
                console.error(`[Keep-Alive] Ping failed:`, e.message);
            }
        }, 14 * 60 * 1000);
    }
}).catch(err => {
    console.error('❌ Database failed:', err);
    process.exit(1);
});