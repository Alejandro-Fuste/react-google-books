const axios = require('axios');
const BASE_URI = 'https://www.googleapis.com/books/v1/volumes?q=';
const apiKey = process.env.API_KEY;

module.exports = {
	getBook: (query) => {
		// const { searchTerm = 'Harry Potter' } = query;

		return axios.get(`${BASE_URI}${query}+intitle:${query}&key=${apiKey}`, {
			params: {
				query
			}
		});
	}
};
