import React, { useState, useEffect } from 'react';

import SearchForm from '../components/SearchForm';
import ListItem from '../components/ListItem';
import API from '../utils/API';
import useDebounce from '../utils/debounceHook';

import { Container, Row, Col } from 'react-bootstrap';

const Search = () => {
	const [ search, setSearch ] = useState('Harry Potter');
	const [ results, setResults ] = useState([]);

	const debouncedSearchTerm = useDebounce(search, 500);

	useEffect(
		() => {
			if (!search) return;

			if (debouncedSearchTerm) {
				API.getBook(search)
					.then((res) => {
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

	const saveBook = (bookId) => {
		const bookToSave = results.find((book) => book.bookId === bookId);

		API.saveBook(bookToSave).then(() => {}).catch((err) => console.log(err));
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
									<ListItem
										key={result.bookId}
										result={result}
										saveBook={() => saveBook(result.bookId)}
									/>
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
