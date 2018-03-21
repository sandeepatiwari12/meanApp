const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');
const Book = require('../models/book');

// retriving Data
router.get('/contacts', (req, res, next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    });
});

// add Contact
router.post('/contact', (req, res, next)=>{
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });
    newContact.save((err, contact)=>{
        if(err){
            res.json({msg: 'Failed to add Contact'})
        }
        else{

            res.json({msg: 'Contact added succesfully'})
        }
    });
});

// delete Contact
router.delete('/contact/:id', (req, res, next)=>{
    Contact.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
});

/* SAVE BOOK */
router.post('/book', function(req, res, next) {
    let newBook = new Book({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        published_year: req.body.published_year,
        publisher: req.body.publisher,
        updated_date: req.body.updated_date
    });
    newBook.save((err, book) =>{
        if (err) {
            res.json({msg: 'Failed to Add Book'})
        }
        else {
            res.json({msg: 'New Book Added Successfully'})
        }
    });
  });

/* GET ALL BOOKS */
router.get('/books', (req, res, next)=>{
    // res.send('Retriving the Book lists');
    Book.find(function (err, books) {
      res.json(books);
    });
  });

/* GET SINGLE BOOK BY ID */
router.get('/book/:id', function(req, res, next) {
    res.send('Retriving the Book list by ID');
    Book.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

/* UPDATE BOOK */
router.put('/book/:id', function(req, res, next) {
    Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

/* DELETE BOOK */
router.delete('/book/:id', function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;