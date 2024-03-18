// Import required modules
const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests

// Define routes
const indexRoutes = require('./routes/indexRoutes');
const userRoutes = require('./routes/userRoutes');

// Use routes
app.use('/', indexRoutes);
app.use('/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
