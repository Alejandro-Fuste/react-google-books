import React, { useState, useEffect, useCallback } from 'react';
import SearchForm from '../components/SearchForm';
import API from '../utils/API';
import NoImage from '../assets/noImageVector.jpg';

import _ from 'lodash';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Styles from '../utils/pageStyles';

const { li, button, titleAndAuthor, img, p } = Styles;

const Search = (props) => {
	const [ search, setSearch ] = useState('Harry Potter');
	const [ debouncedSearch, setdebouncedSearch ] = useState('');
	const [ results, setResults ] = useState([]);

	const delayedSearch = useCallback(_.debounce((q) => se(q), 500), [ search ]);

	useEffect(
		() => {
			API.getBook(search)
				.then((res) => {
					console.log(search);
					console.log(res.data.items);
					setResults(res.data.items);
				})
				.catch((err) => console.log(err));
		},
		[ search ]
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
								results.map((result, index) => (
									<div>
										<li key={result.id} style={li}>
											<Button style={button} href={result['volumeInfo']['previewLink']}>
												View
											</Button>
											<Button style={button} onClick={saveBook}>
												Save
											</Button>
											<h5 style={titleAndAuthor}>Title: {result['volumeInfo']['title']}</h5>
											<h6 style={titleAndAuthor}>Author: {result['volumeInfo']['authors']}</h6>
											<img
												className="pic"
												// src={NoImage}
												src={result['volumeInfo']['imageLinks']['thumbnail']}
												// src={
												// 	result['volumeInfo']['imageLinks']['thumbnail'] == undefined ? (
												// 		NoImage
												// 	) : (
												// 		result['volumeInfo']['imageLinks']['thumbnail']
												// 	)
												// }
												alt="Book Thumbnail"
												style={img}
											/>
											<p style={p}>{result['volumeInfo']['description']}</p>
										</li>
									</div>
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
