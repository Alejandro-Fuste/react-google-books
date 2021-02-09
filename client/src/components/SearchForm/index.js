import React from 'react';

import './style.css';
import { Form, FormControl, Button, InputGroup, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchForm = ({ search, handleInputChange, handleFormSubmit }) => {
	return (
		<Container fluid>
			<Row>
				<Col className="searchCol">
					<Form onSubmit={handleFormSubmit}>
						<InputGroup className="mb-3">
							<FormControl
								placeholder="Enter Book Title"
								aria-label="BookTitle"
								aria-describedby="basic-addon2"
								type="text"
								// ref={searchRef}
								value={search}
								onChange={handleInputChange}
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
