const axios = require('axios');
const BASE_URI = 'https://www.googleapis.com/books/v1/volumes?q=';
const apiKey = process.env.API_KEY;

module.exports = {
	getBook: ({ query }) => {
		// const { searchTerm } = query;
		// console.log('query from googleBooksAPI file:');
		// console.log(query);

		// console.log('route for google book api:');
		// console.log(`${BASE_URI}${query}+intitle:${query}&key=${apiKey}`);

		return axios.get(`${BASE_URI}${query}+intitle:${query}&key=${apiKey}`, {
			params: {
				query
			}
		});
	}
};
