import React, { useState, useEffect } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import { ADD_RESULTS } from '../utils/actions';
import SearchForm from '../components/SearchForm';
import API from '../utils/API';
import NoImage from '../assets/noImageVector.jpg';

import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../utils/pageStyles';

const Search = (props) => {
	// const [ state, dispatch ] = useStoreContext();
	const [ search, setSearch ] = useState('');

	useEffect(() => {
		API.getBook({ query: state.initialSearchTerm })
			.then((res) => {
				dispatch({
					type: ADD_RESULTS,
					result: res.data.items
				});
				// console.log(`res.data.items:`);
				// console.log(res.data.items);
				// console.log(`Thumbnail Image: ${res['data']['items'][0]['volumeInfo']['imageLinks']['thumbnail']}`);
				// console.log(`State: ${state}`);
				console.log('key');
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

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
					<SearchForm />
				</Col>
			</Row>

			<Row>
				<Col className="resultsCol">
					<div>
						<h3>Search Results</h3>
					</div>
					<ul className="singleResult">
						<React.Fragment>
							{state.results ? (
								state.results.map((result, index) => (
									<div>
										<li key={result.id} style={styles.li}>
											<Button style={styles.button} href={result['volumeInfo']['previewLink']}>
												View
											</Button>
											<Button style={styles.button} onClick={saveBook}>
												Save
											</Button>
											<h5 style={styles.titleAndAuthor}>
												Title: {result['volumeInfo']['title']}
											</h5>
											<h6 style={styles.titleAndAuthor}>
												Author: {result['volumeInfo']['authors']}
											</h6>
											<img
												className="pic"
												// src={NoImage}
												// src={result['volumeInfo']['imageLinks']['thumbnail']}
												// src={
												// 	result['volumeInfo']['imageLinks']['thumbnail'] === undefined ? (
												// 		NoImage
												// 	) : (
												// 		result['volumeInfo']['imageLinks']['thumbnail']
												// 	)
												// }
												alt="Book Thumbnail"
												style={styles.img}
											/>
											<p style={styles.p}>{result['volumeInfo']['description']}</p>
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
