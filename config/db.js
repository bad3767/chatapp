const mongoose = require('mongoose');

// MongoDB connection URL
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/mydatabase';
console.log('DB_URL: ', DB_URL);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Check if the connection is successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB database');
});

module.exports = db;
