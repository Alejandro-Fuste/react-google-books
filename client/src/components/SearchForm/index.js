import React from 'react';
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
	return (
		<Container>
			<Row>
				<Col>
					<Form>
						<InputGroup className="mb-3">
							<FormControl
								placeholder="Enter Book Title"
								aria-label="BookTitle"
								aria-describedby="basic-addon2"
							/>
							<InputGroup.Append>
								<Button
									variant="outline-secondary"
									className="inputBtn"
									style={{ backgroundColor: '#969797', color: 'white' }}
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
