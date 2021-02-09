import axios from 'axios';

export default {
	// Gets a book from the Google Books API
	getBook: function(search) {
		return axios.get(`/api/book/?query=${search}`);
	},
	// Saves a book to the database
	saveBook: function(postData) {
		return axios.post('/api/books', postData);
	},
	// Gets all posts
	getSavedBooks: function() {
		return axios.get('/api/books');
	},
	// Deletes the post with the given id
	deletePost: function(id) {
		return axios.delete('/api/books/' + id);
	}
};
