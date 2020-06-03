// This file offers a set of api routes

// Dependencies
const path = require('path');
const db = require('../models');

module.exports = function(app) {
	// Each of the below routes will do a different CRUD operation.

	// GET route to get user and their watchlist
	app.get('/api/books', (req, res) => {
		db.Book
			.find({})
			.then((data) => {
				res.json(data);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	});

	// POST route to add stock to watchlist
	app.post('/api/books', ({ body }, res) => {
		db.Book
			.create(body)
			.then((data) => {
				res.json(data);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	});

	app.delete('/api/books/:id', (req, res) => {
		db.Book
			.deleteOne({ _id: req.params.id })
			.then((data) => {
				res.json(data);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	});
};
