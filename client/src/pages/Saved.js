import React, { useEffect } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import { GET_SAVED, DELETE_SAVED } from '../utils/actions';
import API from '../utils/API';

import { Container, Row, Col } from 'react-bootstrap';
import ListItem2 from '../components/ListItem2';

const Saved = () => {
	const [ state, dispatch ] = useStoreContext();

	useEffect(() => {
		API.getSavedBooks()
			.then((res) => {
				dispatch({
					type: GET_SAVED,
					getSaved: res.data
				});
			})
			.catch((err) => console.log(err));
	}, []);

	const deleteBook = (bookId) => {
		API.deleteBook(bookId)
			.then(() => {
				dispatch({
					type: DELETE_SAVED,
					_id: bookId
				});
			})
			.catch((err) => console.log(err));
	};

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
								state.saved.map((result) => (
									<ListItem2
										key={result._id}
										result={result}
										deleteBook={() => deleteBook(result._id)}
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

export default Saved;
