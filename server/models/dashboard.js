const mongoose = require('mongoose');

const DashboardSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    value:{
        type: Number,
        required: true
    },
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
    series:[
        {
            name: String,
            value: Number
        }
    ]
});

const Dashboard = module.exports = mongoose.model('Dashboard', DashboardSchema);