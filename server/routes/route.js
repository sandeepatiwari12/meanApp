const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');
const Book = require('../models/book');
const Dashboard = require('../models/dashboard');
const Nav = require('../models/navs');
const User = require('../models/user');


// APIs

// =============================================Loging User Data===========================================
// Retiving User Data
router.get('/loginUserData', (req, res, next) => {
    User.find(function (err, user){
        console.log('User Data', user);
        res.json(user);
    })
});

/* add User Data */
router.post('/loginUser', (req, res, next) => {
    let newUser = new User({
        fullname: req.body.fullname,
        phone: req.body.phone,
        email: req.body.email,
        userType: req.body.userType,
        address: req.body.address
    });
    newUser.save((err, user) => {
        if (err) {
            res.json({ msg: 'Failed to add User Data' })
        }
        else {

            res.json({ msg: ' User Data added succesfully' })
        }
    });
});

// =============================================NavBar==============================================
// Retiving Navbar Data
router.get('/navbarData', (req, res, next) => {
    Nav.find(function (err, navbar){
        console.log('Navbar Data', navbar);
        res.json(navbar);
    })
});

/* add Navbar Data */
router.post('/navbar', function (req, res, next) {
    Nav.create(req.body, function (err, post) {
        if (err) return next(err);
        console.log(body);
        res.json(post);
    });
});

// =============================================DashBoard==============================================

// Retiving Dashboard Data
router.get('/dashboardData', (req, res, next) => {
    Dashboard.find(function (err, dashboard){
        console.log('Dashboard Data', dashboard); 
        res.json(dashboard);
    })
});

// delete Dasboard Data
router.delete('/dashboard/:id', (req, res, next) => {
    Dashboard.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
});


/* UPDATE Dashboard Data */
router.put('/dashboard/:id', function (req, res, next) {
    Dashboard.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* add Dashboard Data */
router.post('/dashboard', function (req, res, next) {
    Dashboard.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});



// =============================================Contacts==============================================

// retriving Contact Data
router.get('/contacts', (req, res, next) => {
    Contact.find(function (err, contacts) {
        console.log('Contacts Data', contacts);
        res.json(contacts);
    });
});

// add Contact Data
router.post('/contact', (req, res, next) => {
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });
    newContact.save((err, contact) => {
        if (err) {
            res.json({ msg: 'Failed to add Contact' })
        }
        else {

            res.json({ msg: 'Contact added succesfully' })
        }
    });
});

// delete Contact Data
router.delete('/contact/:id', (req, res, next) => {
    Contact.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
});


// =============================================Books==============================================

/* SAVE BOOK */
router.post('/book', function (req, res, next) {
    let newBook = new Book({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        published_year: req.body.published_year,
        publisher: req.body.publisher,
        updated_date: req.body.updated_date
    });
    newBook.save((err, book) => {
        if (err) {
            res.json({ msg: 'Failed to Add Book' })
        }
        else {
            res.json({ msg: 'New Book Added Successfully' })
        }
    });
});

/* GET ALL BOOKS */
    // res.send('Retriving the Book lists');
router.get('/books', (req, res, next) => {
    Book.find(function (err, books) {
        res.json(books);
    });
});

/* GET SINGLE BOOK BY ID */
router.get('/book/:id', function (req, res, next) {
    res.send('Retriving the Book list by ID');
    Book.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE BOOK */
router.put('/book/:id', function (req, res, next) {
    Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE BOOK */
router.delete('/book/:id', function (req, res, next) {
    Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


// =============================================End Of API Calls==============================================

module.exports = router;