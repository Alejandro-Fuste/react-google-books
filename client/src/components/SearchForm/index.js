import React, { useRef } from 'react';
import API from '../../utils/API';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_RESULTS } from '../../utils/actions';
import './style.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchForm = () => {
	const searchRef = useRef();

	const [ state, dispatch ] = useStoreContext();

	const handleSubmit = (e) => {
		e.preventDefault();

		API.getBook({
			query: searchRef.current.value
		})
			.then((res) => {
				console.log(`CL for res from SearchForm:`);
				console.log(res);
				dispatch({
					type: ADD_RESULTS,
					result: res.data.items
				});
			})
			.catch((err) => console.log(err));
		console.log(searchRef.current.value);
		// console.log(state.results);
		searchRef.current.value = '';
	};

	return (
		<Container fluid>
			<Row>
				<Col className="searchCol">
					<Form onSubmit={handleSubmit}>
						<InputGroup className="mb-3">
							<FormControl
								placeholder="Enter Book Title"
								aria-label="BookTitle"
								aria-describedby="basic-addon2"
								type="text"
								ref={searchRef}
							/>
							<InputGroup.Append>
								<Button
									variant="outline-secondary"
									className="inputBtn"
									style={{ backgroundColor: '#969797', color: 'white' }}
									type="submit"
								>
									<FontAwesomeIcon icon={faSearch} style={{ marginRight: 5, color: 'white' }} />Search
								</Button>
							</InputGroup.Append>
						</InputGroup>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default SearchForm;
