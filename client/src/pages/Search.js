import React, { useState, useEffect } from 'react';

import SearchForm from '../components/SearchForm';
import ListItem from '../components/ListItem';
import API from '../utils/API';
import useDebounce from '../utils/debounceHook';

import { Container, Row, Col } from 'react-bootstrap';
import Styles from '../utils/pageStyles';

const { li, button, titleAndAuthor, img, p } = Styles;

const Search = (props) => {
	const [ search, setSearch ] = useState('Harry Potter');
	const [ results, setResults ] = useState([]);

	const debouncedSearchTerm = useDebounce(search, 500);

	useEffect(
		() => {
			if (!search) return;

			if (debouncedSearchTerm) {
				API.getBook(search)
					.then((res) => {
						console.log(search);
						const { items } = res.data;
						let bookData = items.map((book) => ({
							bookId: book.id,
							authors: book.volumeInfo.authors || [ 'No author to display' ],
							title: book.volumeInfo.title,
							description: book.volumeInfo.description || 'No description to display',
							image:
								book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
									? book.volumeInfo.imageLinks.thumbnail
									: '',
							previewLink: book.volumeInfo.previewLink
						}));
						setResults(bookData);
						console.log(results);
					})
					.catch((err) => console.log(err));
			}
		},
		[ debouncedSearchTerm ]
	);

	const handleInputChange = (e) => {
		setSearch(e.target.value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	const saveBook = (e) => {
		e.preventDefault();
		API.saveBook({
			title: '',
			authors: [ [ 'volumeInfo' ]['authors'] ],
			image: '',
			link: '',
			description: ''
		})
			.then((result) => {
				// get result and save it to a saved books state
			})
			.catch((err) => console.log(err));
	};

	return (
		<Container fluid>
			<Row>
				<Col>
					<SearchForm
						results={search}
						handleInputChange={handleInputChange}
						handleFormSubmit={handleFormSubmit}
					/>
				</Col>
			</Row>

			<Row>
				<Col className="resultsCol">
					<div>
						<h3>Search Results</h3>
					</div>
					<ul className="singleResult">
						<React.Fragment>
							{results ? (
								results.map((result) => (
									<ListItem key={result.bookId} result={result} saveBook={saveBook} />
								))
							) : (
								<h3>No Results</h3>
							)}
						</React.Fragment>
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default Search;
