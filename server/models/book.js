var mongoose = require('mongoose');


var BookSchema = new mongoose.Schema({
  isbn: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  published_year: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  created_date: { type: Date, default: Date.now }
});

const Book = module.exports = mongoose.model('Book', BookSchema);