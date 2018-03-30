const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken'); // Compact, URL-safe means of representing claims to be transferred between two parties.
const config = require('../config/database'); // Import database configuration

const Contact = require('../models/contacts');
const Book = require('../models/book');
const Dashboard = require('../models/dashboard');
const Nav = require('../models/navs');
const User = require('../models/user');


module.exports = (router) => {
// APIs

// =============================================NavBar==============================================
// Retiving Navbar Data
router.get('/navbarData', (req, res) => {
    Nav.find({}, (err, navbar) => {
        if(err) {
            res.json({success : false, message: err});
        } else {
            if (!navbar) {
                res.json({success: false, message: 'No Navbar Data Found'});
            } else {
                console.log(navbar);
                res.json({success: true, navbar: navbar});
            }
        }
    });
    // .sort({ '_id': -1});
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
router.get('/dashboardData', (req, res) => {
    Dashboard.find({}, (err, dashboard) => {
        if(err) {
            res.json( { success: false, message: err});
        } else {
            if(!dashboard) {
                res.json( { success: false, message: 'No Dashboard Data Found'});
            } else {
                console.log(dashboard);
                res.json( { success: true, dashboard: dashboard});
            }
        }
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
    Contact.find({}, (err, contacts) => {
        if (err) {
            res.json( { success: false, message: err});
        } else {
            if (!contacts) {
                res.json({ success: false, message: 'No Contact List Data Found'});
            } else {
                console.log(contacts);
                res.json( { success: true, contacts: contacts});
            }
        }
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
router.delete('/contact/:id', (req, res) => {
    // Contact.remove({ _id: req.params.id }, function (err, result) {
    //     if (err) {
    //         res.json(err);
    //     }
    //     else {
    //         res.json(result);
    //     }
    // })

    if(!req.params.id) {
        res.json( { success: false, message: 'No Id Provided'});
    } else {
        Contact.findOne ( { _id: req.params.id}, (err, contact) => {
            if(err) {
                res.json( { success: false, message: 'Invalid ID'});
            } else {
                if(!contact) {
                    res.json( { success: false, message: 'Contact was not Found'});
                } else {
                    // todo remove contact from database
                    contact.remove((err) => {
                        if(err) {
                            res.json( { success: false, message: err});
                        } else {
                            // console.log(contacts);
                            res.json({ success: true, message: 'Contact is Deleted'});
                        }
                    });
                }
            }
        });
    }
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

return router;
// =============================================End Of API Calls==============================================
}
// module.exports = (router);