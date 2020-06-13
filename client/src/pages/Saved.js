import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import API from '../utils/API';
import { useStoreContext } from '../utils/GlobalState';
import { GET_SAVED } from '../utils/actions';

const styles = {
	button: {
		marginRight: 5,
		backgroundColor: '#969797',
		color: 'white',
		float: 'right',
		borderColor: '#969797'
	}
};

const Saved = () => {
	const [ state, dispatch ] = useStoreContext();

	useEffect(() => {
		API.getSavedBooks()
			.then((res) => {
				dispatch({
					type: GET_SAVED,
					getSaved: res.data
				});
				console.log(`res from getSavedBooks api:`);
				console.log(res.data);
				console.log(`saved books from global state:`);
				console.log(state.saved);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<Container fluid>
			<Row>
				<Col className="resultsCol">
					<div>
						<h3>Saved Books</h3>
					</div>

					<ul className="singleResult">
						<React.Fragment>
							{state.saved ? (
								state.saved.map((result, index) => (
									<div>
										<li key={index}>
											<Button style={styles.button} href={result['previewLink']}>
												View
											</Button>
											<Button style={styles.button} onClick={''} key={index}>
												Delete
											</Button>
											<h5>Title: {result.title}</h5>
											<h6>Author: {result['authors']}</h6>
											<img className="pic" src={result['image']} alt="Book Thumbnail" />
											<p>{result['description']}</p>
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

export default Saved;
