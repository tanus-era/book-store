const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller');
// const { validateBook, validateBookId } = require('../middleware/validation');

// GET all books
router.get('/', bookController.getAllBooks);

// GET specific book by ID
router.get('/:id', bookController.getBookById);

// CREATE new book
router.post('/', bookController.createBook);

// DELETE book by ID
router.delete('/:id', bookController.deleteBook);

module.exports = router;