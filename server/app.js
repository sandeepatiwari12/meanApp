var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors')
var path = require('path');
const router = express.Router(); // Creates a new router object.


var app = express();

// route
const authentication = require('./routes/authentication')(router); // Import Authentication Routes
const route = require('./routes/route')(router);

// Connect to mongoDB
mongoose.connect('mongodb://localhost:27017/contactlist');

// on connection 
mongoose.connection.on('connected', () => {
    console.log('connected to database mongodb @ 27017');
});

mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('Error in Database Connection:' + err);
    }
});

// port for server
var port = 3000;

// add middleware
app.use(cors({ origin: 'http://localhost:7200' })); // Allows cross origin in development only
app.use(cors());

// body parser
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json());

// static files
app.use(express.static(path.join(__dirname, 'public')));

// route use for api
app.use('/authentication', authentication); // Use Authentication routes in application
app.use('/api', route);

// home page for server
app.get('/', (req, res) => {
    res.send('foobar');
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});