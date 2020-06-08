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
						<li>
							<Button style={styles.button}>View</Button>
							<Button style={styles.button}>Save</Button>
							<h5>Title:</h5>
							<h6>Author:</h6>
							<img className="pic" src={''} alt="Result picture" />
							<p>
								Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet
								augue non leo luctus suscipit. Nulla iaculis ultrices condimentum. Cras porta vestibulum
								dolor a imperdiet. Sed quis mauris diam. Donec dapibus, diam sed faucibus consequat,
								felis quam elementum urna, non commodo diam lorem sollicitudin elit. Aliquam consequat,
								risus eget suscipit sagittis, diam quam aliquam odio, a tincidunt nibh enim quis turpis.
								Donec vulputate suscipit metus, ut ultrices dolor pellentesque quis. Cras id fermentum
								odio.{' '}
							</p>
						</li>
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
