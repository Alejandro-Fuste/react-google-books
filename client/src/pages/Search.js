import React, { useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import API from '../utils/API';
import { useStoreContext } from '../utils/GlobalState';
import { ADD_RESULTS } from '../utils/actions';

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
	const [ state, dispatch ] = useStoreContext();

	useEffect(() => {
		API.getBook({ query: state.initialSearchTerm })
			.then((res) => {
				dispatch({
					type: ADD_RESULTS,
					result: res.data.items
				});
				console.log(`res.data.items:`);
				console.log(res.data.items);
				console.log(state.results);
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
										<li key={index}>
											<Button style={styles.button} href={result['volumeInfo']['previewLink']}>
												View
											</Button>
											<Button style={styles.button} onClick={saveBook} key={index}>
												Save
											</Button>
											<h5>Title: {result['volumeInfo']['title']}</h5>
											<h6>Author: {result['volumeInfo']['authors']}</h6>
											<img
												className="pic"
												src={result['volumeInfo']['imageLinks']['thumbnail']}
												alt="Book Thumbnail"
											/>
											<p>{result['volumeInfo']['description']}</p>
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
