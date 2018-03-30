const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    created_date: { type: Date, default: Date.now }
});

const User = module.exports = mongoose.model('User', UserSchema);