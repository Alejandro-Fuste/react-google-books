import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const styles = {
	button: {
		marginRight: 5,
		backgroundColor: '#969797',
		color: 'white',
		float: 'right',
		borderColor: '#969797'
	}
};

const Search = (props) => {
	const [ results, setResults ] = useState([]);

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
						{results.map((result, index) => (
							<li>
								<Button style={styles.button} href={results[index]['volumeInfo']['previewLink']}>
									View
								</Button>
								<Button style={styles.button}>Save</Button>
								<h5>Title: {results[index]['volumeInfo']['title']}</h5>
								<h6>Author: {results[index]['volumeInfo']['authors']}</h6>
								<img
									className="pic"
									src={results[index]['volumeInfo']['imageLinks']['thumbnail']}
									alt="Book Thumbnail"
								/>
								<p>{results[index]['volumeInfo']['description']}</p>
							</li>
						))}
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default Search;

// console.log(results[0]['volumeInfo']['authors']);
// console.log(results[0]['volumeInfo']['title']);
// console.log(results[0]['volumeInfo']['previewLink']);
// console.log(results[0]['volumeInfo']['imageLinks']['thumbnail']);
// console.log(results[0]['volumeInfo']['description']);
