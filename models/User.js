// models/User.js
const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    // Add more fields as needed...
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;

// Export CRUD operations for the User model
module.exports.createUser = async function createUser(userData) {
    return await User.create(userData);
};

module.exports.getUserById = async function getUserById(userId) {
    return await User.findById(userId);
};

module.exports.updateUser = async function updateUser(userId, userData) {
    return await User.findByIdAndUpdate(userId, userData, { new: true });
};

module.exports.deleteUser = async function deleteUser(userId) {
    return await User.findByIdAndDelete(userId);
};
