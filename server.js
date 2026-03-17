require('dotenv').config();
const express = require('express');
const cors = require('cors');
const studentRoutes = require('./src/routes/studentRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON bodies
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', studentRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', message: 'Server is running' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
