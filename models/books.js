// Require mongoose
const mongoose = require('mongoose');

// Create schema variable
const Schema = mongoose.Schema;

const booksSchema = new Schema({
	title: {
		type: String,
		trim: true,
		required: 'Enter the name for the book'
	},
	authors: {
		type: String,
		trim: true,
		required: 'Enter the author(s) of the book'
	},
	image: {
		type: String,
		trim: true
	},
	link: {
		type: String,
		trim: true
	}
});

const Books = mongoose.model('Books', booksSchema);

module.exports = Books;
