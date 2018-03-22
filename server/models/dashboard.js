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
    series:[
        {
            name: String,
            value: Number
        }
    ]
});

const Dashboard = module.exports = mongoose.model('Dashboard', DashboardSchema);