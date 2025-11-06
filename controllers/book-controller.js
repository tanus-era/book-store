const fs = require('fs').promises;
const path = require('path');

const booksFilePath = path.join(__dirname, '../data/book-data.json');

// Helper function to read books from file
const readBooksFromFile = async () => {
  try {
    const data = await fs.readFile(booksFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, return empty array
    return [];
  }
    // console.log("readBooksFromFile called");
};

// Helper function to write books to file
const writeBooksToFile = async (books) => {
//   await fs.writeFile(booksFilePath, JSON.stringify(books, null, 2));
};

// Generate unique ID
const generateId = () => {
//   return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const bookController = {
  // Get all books
  getAllBooks: async (req, res) => {
    console.log("getAllBooks called begin");
    try {
      const books = await readBooksFromFile();
      res.json({
        success: true,
        count: books.length,
        data: books
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to fetch books'
      });
    }
    console.log("getAllBooks called");
  },

  // Get specific book by ID
  getBookById: async (req, res) => {
    // try {
    //   const books = await readBooksFromFile();
    //   const book = books.find(b => b.id === req.params.id);
      
    //   if (!book) {
    //     return res.status(404).json({
    //       success: false,
    //       error: 'Book not found'
    //     });
    //   }

    //   res.json({
    //     success: true,
    //     data: book
    //   });
    // } catch (error) {
    //   res.status(500).json({
    //     success: false,
    //     error: 'Failed to fetch book'
    //   });
    // }
    console.log("getBookById called");
  },

  // Create new book
  createBook: async (req, res) => {
    // try {
    //   const books = await readBooksFromFile();
    //   const newBook = {
    //     id: generateId(),
    //     title: req.body.title,
    //     author: req.body.author,
    //     isbn: req.body.isbn,
    //     price: req.body.price,
    //     publicationYear: req.body.publicationYear,
    //     genre: req.body.genre,
    //     description: req.body.description,
    //     createdAt: new Date().toISOString()
    //   };

    //   books.push(newBook);
    //   await writeBooksToFile(books);

    //   res.status(201).json({
    //     success: true,
    //     message: 'Book created successfully',
    //     data: newBook
    //   });
    // } catch (error) {
    //   res.status(500).json({
    //     success: false,
    //     error: 'Failed to create book'
    //   });
    // }
    console.log("createBook called");
  },

  // Delete book by ID
  deleteBook: async (req, res) => {
    // try {
    //   const books = await readBooksFromFile();
    //   const bookIndex = books.findIndex(b => b.id === req.params.id);
      
    //   if (bookIndex === -1) {
    //     return res.status(404).json({
    //       success: false,
    //       error: 'Book not found'
    //     });
    //   }

    //   const deletedBook = books.splice(bookIndex, 1)[0];
    //   await writeBooksToFile(books);

    //   res.json({
    //     success: true,
    //     message: 'Book deleted successfully',
    //     data: deletedBook
    //   });
    // } catch (error) {
    //   res.status(500).json({
    //     success: false,
    //     error: 'Failed to delete book'
    //   });
    // }
    console.log("deleteBook called");
  }
};

module.exports = bookController;