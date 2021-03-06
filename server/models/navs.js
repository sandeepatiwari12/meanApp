const mongoose = require('mongoose');

const NavSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    created_date: { type: Date, default: Date.now }
});

const Nav = module.exports = mongoose.model('Nav', NavSchema);