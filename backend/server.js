const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());

// API Routes
app.get('/api/health', (req, res) => {
    res.json({ success: true, message: 'API is healthy' });
});

app.use('/api/contact', contactRoutes);

// Serve React Frontend
const clientPath = path.join(__dirname, 'public');
app.use(express.static(clientPath));

app.use((req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'), (err) => {
        if (err) {
            console.error('Could not find index.html:', err);
            res.status(500).send('React build not found.');
        }
    });
});

// Start Server
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('Server is RUNNING on port ' + PORT);
        console.log('Looking for React files in: ' + clientPath);
    });
}).catch(err => {
    console.error('Database connection failed:', err);
});