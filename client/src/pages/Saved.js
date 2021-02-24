import React, { useEffect } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import { GET_SAVED } from '../utils/actions';
import API from '../utils/API';

import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../utils/pageStyles';
import ListItem from '../components/ListItem';

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

	const deleteBook = (bookId) => {
		console.log(`Delete button clicked ${bookId}`);
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
									<ListItem
										key={result._id}
										result={result}
										deleteBook={() => deleteBook(result._id)}
									/>
									// <div>
									// 	<li key={index} style={styles.li}>
									// 		<Button style={styles.button} href={result['previewLink']}>
									// 			View
									// 		</Button>
									// 		<Button style={styles.button} onClick={''} key={index}>
									// 			Delete
									// 		</Button>
									// 		<h5 style={styles.titleAndAuthor}>Title: {result.title}</h5>
									// 		<h6 style={styles.titleAndAuthor}>Author: {result['authors']}</h6>
									// 		<img
									// 			className="pic"
									// 			src={result['image']}
									// 			alt="Book Thumbnail"
									// 			style={styles.img}
									// 		/>
									// 		<p style={styles.p}>{result['description']}</p>
									// 	</li>
									// </div>
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
