import axios from 'axios';

export default {
	getBook: function({ query }) {
		return axios.get(`/api/book/?query=${query}`);
	}
};
